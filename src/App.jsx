import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Dashboard from "./pages/Dashboard/Dashboard"
import Tasks from "./pages/Tasks"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/task" element={<Tasks/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App