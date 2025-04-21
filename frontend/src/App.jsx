import "./App.scss"
import { Route, Routes } from "react-router"
import { HomePage } from "./pages/Home"
import { Userpage } from "./Userpage/userpage"

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/userpage" element={<Userpage />} />
    </Routes>
  )
}

export default App
