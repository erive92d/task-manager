export const deleteTask = async (id:string | undefined) => {
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/${id}` , {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        })

        return response

    } catch (error) {
        throw new Error("Failed to fetch single task")
    }
}