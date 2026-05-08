import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Conta from "./pages/(private)/Conta"
import ContaInfo from "./pages/(private)/ContaInfo"
import Home from "./pages/Home"

const MainRoutes = () => {
    const { isLoggedIn, userId } = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={isLoggedIn ? <Navigate to={`/conta/${userId}`} /> : <Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Navigate to='/' />} />
            <Route path='/infoconta/:id' element={isLoggedIn ? <ContaInfo /> : <Navigate to='/' />} />
        </Routes>
    )
}

export default MainRoutes
