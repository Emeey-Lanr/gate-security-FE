import { Outlet } from "react-router-dom";
import Sidebar from "../features/admin/components/AdminSidebar";
import AdminHeader from "../features/admin/components/AdminHeader";
import AddSecurity from "../features/admin/components/AddSecurity";
import { useAdminModalStore } from "../store/Admin/useAdminModals";
import LogoutModal from "../components/LogoutModal";
const AdminLayouts = () => {
  const securityModal = useAdminModalStore(
    (state) => state.securityModal,
  );
  const logoutModal = useAdminModalStore((state)=>state.logOutModal)
  return (
    <>
      <div className="lg:min-h-screen lg:w-full lg:flex">
        <Sidebar />

        <main className="lg:flex-1">
          <AdminHeader />
          <Outlet />
          {securityModal && <AddSecurity />}
           {logoutModal && <LogoutModal text="Are you sure you want to log out of the admin dashboard?"/>}
   
        </main>
      </div>
    </>
  );
};

export default AdminLayouts;
