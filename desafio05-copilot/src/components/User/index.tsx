import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";



export default function User() {
    const { id } = useParams()
    const userId = id ? Number(id) : null
    const { user, loading, error } = useUser(userId)


    if (loading) {
        return <main className="animate-pulse text-2xl h-full w-full mx-auto text-center mt-48">Aguardando dados ...</main>
    }

    if (error) {
        return <main className="text-2xl h-full w-full mx-auto text-center my-auto text-red-500  mt-48">{error}</main>
    }

    return (
        <main>
            {user?.id}
            <h1>{user?.username}</h1>
            <p>{user?.email}</p>

        </main>
    )
}
