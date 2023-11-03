export const getSingleTask = async (id:string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/${id}`,{cache:"no-store"})
        if(!response.ok) {
            throw new Error("failed to fetch")
        }
        return await response.json()
    } catch (error) {
        throw new Error("Failed to fetch single task")
    }
}