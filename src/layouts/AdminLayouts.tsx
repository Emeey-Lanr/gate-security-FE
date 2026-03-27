import { Outlet } from "react-router-dom"
import Sidebar from "../features/admin/components/Sidebar"

const AdminLayouts = () => {
  return (
    <div>
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayouts