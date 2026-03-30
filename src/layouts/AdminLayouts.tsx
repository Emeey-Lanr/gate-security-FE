import { Outlet } from "react-router-dom"
import Sidebar from "../features/admin/components/Sidebar"
import { useState } from "react"
import AdminHeader from "../features/admin/components/AdminHeader"

const AdminLayouts = () => {
  const [hide, _] = useState<boolean>(false)
  return (
    <div>
        {hide && <Sidebar/>}
        <main>
           <AdminHeader/>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayouts