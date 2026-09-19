import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppLayout = () => {
  return (
    <>
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>
      <div className="flex min-w-0 flex-1 flex-col">
        <Header/>
        <main className="flex min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet/>
        </main>
      </div>
    </div>
    </>
  )
}

export default AppLayout