
export async function getTasks () {
    const res = await fetch("http://localhost:3000/api/users")
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}
