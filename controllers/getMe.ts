export async function getMe () {
    try {
        const res = await fetch("http://localhost:3000/api/users/me")
        if(!res.ok) {
            throw new Error("Failed to fetch data")
        }
        return await res.json()
    } catch (error) {
         throw new Error("failed")
    }
    
}
