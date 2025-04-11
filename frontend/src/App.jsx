import "./App.scss"
import { Route, Routes, useNavigate } from "react-router"
import { HomePage } from "./pages/Home"
import { AuthPage } from "./pages/AuthPage"
import { Dashboard } from "./dashboard/dashboard"

function App() {
  const ProtectedRoute = ({ children }) => {
    const { authState } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
      if (authState.loading !== true && authState.user === null) {
        navigate("/")
      }
    }, [authState.user, navigate, authState.loading])

    return authState.user ? children : null
  }

  return (
    <Routes>
      <Route index element={<HomePage />} />

      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
