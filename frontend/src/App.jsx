import "./App.scss"
import { Route, Routes } from "react-router"
import { HomePage } from "./pages/Home"
import { Dashboard } from "./dashboard/dashboard"



function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
