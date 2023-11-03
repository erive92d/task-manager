import connect from "@/db";
import User from "@/models/User";
import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials:any) {
                const { email, password } = credentials
                try {
                    await connect()
                    const user = await User.findOne({email})
                   
                    if(!user) {
                        return null
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if(!passwordMatch) {
                        return null
                    }

                    return user
                } catch (error) {
                    throw new Error("failed to login")
                }
                
            },
            
        })
        ,
        
    ],
    
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/user/account/login"
    },
    
    session: {
        strategy: 'jwt',
      },
    // callbacks: {
    //     jwt: async ({token, user}) => {
    //         user && (token.user = user)
    //         return token
    //     },
    //     async session({ session, token, user }) {
    //         // Send properties to the client, like an access_token from a provider.
    //         session.accessToken = token.accessToken
    //         return session
    //       }
    // },
}

const handler = NextAuth(authOptions)


export {handler as GET, handler as POST}