import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext({
  user: null
})

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null
  })

  useEffect(() => {
    const checkStatus = async () => {
      const response = await fetch("http://localhost:3000/users/status", {
        credentials: "include"
      })

      const json = await response.json()

      setAuthState(json)
    }

    checkStatus()
  }, [])

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  )
}
