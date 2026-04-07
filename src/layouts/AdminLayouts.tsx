import { Outlet } from "react-router-dom"
import Sidebar from "../features/admin/components/AdminSidebar"
import AdminHeader from "../features/admin/components/AdminHeader"
import AddSecurity from "../features/admin/components/AddSecurity"
import { useAddSecurityModalStore,  } from "../store/Admin/useAddSecurityStore"

const AdminLayouts = () => {
 const securityModal = useAddSecurityModalStore((state)=>state.securityModal?.isOpen) 
  return (
    <>
     <div className="lg:min-h-screen lg:w-full lg:flex">
        <Sidebar/>

        <main className="lg:flex-1">
        
           <AdminHeader/>
            <Outlet/>
     {securityModal && <AddSecurity/>}
        </main>
        
    </div>
   
    </>
   
  )
}

export default AdminLayouts