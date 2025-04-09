import "./App.scss"
import { Route, Routes } from "react-router"
import { HomePage } from "./pages/Home"
import { EditProduct } from "./pages/EditProduct"

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="edit-product" element={<EditProduct />} />
    </Routes>
  )
}

export default App
