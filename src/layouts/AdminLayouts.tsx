import { Outlet } from "react-router-dom"
import Sidebar from "../features/admin/components/AdminSidebar"
import { useState } from "react"
import AdminHeader from "../features/admin/components/AdminHeader"

const AdminLayouts = () => {
  const [hide, _] = useState<boolean>(false)
  return (
    <div className="lg:min-h-screen lg:w-full lg:flex">
        <Sidebar/>

        <main className="lg:flex-1">
        
           <AdminHeader/>
            <Outlet/>
  
        </main>
    </div>
  )
}

export default AdminLayouts