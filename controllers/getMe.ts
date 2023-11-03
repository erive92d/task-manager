export async function getMe () {
    try {
        const res = await fetch("http://localhost:3000/api/users/")
        return await res.json()
    } catch (error) {
         throw new Error("failed")
    }
    
}
