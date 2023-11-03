
export async function getTasks (email:string) {
    const res = await fetch(`http://localhost:3000/api/users/${email}`)
  
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return await res.json()
}
