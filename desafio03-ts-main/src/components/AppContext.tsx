import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { api } from "../api"

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

interface IAppContext {
  user: string,
  userId: string
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void,
  setUserId: (userId: string) => void,
  userData: null | undefined | UserData
}



export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userData, setUserData] = useState<null | UserData>()
  const [userId, setUserId] = useState<string>('')



  const storage = getAllLocalStorage()

  useEffect(() => {

    if (storage) {
      const { login, userId } = JSON.parse(storage)
      setIsLoggedIn(login)
      setUserId(userId)
    }
  }, [])

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])


  const user = 'nathally'

  console.log('userData', userData)

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, userId, setUserId, userData }}>
      {children}
    </AppContext.Provider>
  )
}
