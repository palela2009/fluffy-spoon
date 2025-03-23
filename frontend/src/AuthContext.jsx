import { createContext, useState } from "react"

export const AuthContext = createContext({
  user: null
})

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null
  })

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  )
}
