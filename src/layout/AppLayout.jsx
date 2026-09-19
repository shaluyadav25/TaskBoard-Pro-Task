import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppLayout = () => {
  return (
    <>
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex flex-1 flex-col">
        <Header/>
        <main className="flex flex-1 ">
          <Outlet/>
        </main>
      </div>
    </div>
    </>
  )
}

export default AppLayout