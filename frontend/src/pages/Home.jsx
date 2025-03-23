import "./Home.scss"
import { AuthContext } from "../AuthContext.jsx"
import { useContext } from "react"

export const HomePage = () => {
  const { authState } = useContext(AuthContext)

  return (
    <div>
      <h1 className="title">Welcome</h1>
      <h2>{authState.user && authState.user.username}</h2>
    </div>
  )
}
