import { Outlet } from "react-router-dom";
import Sidebar from "../features/admin/components/AdminSidebar";
import AdminHeader from "../features/admin/components/AdminHeader";
import AddSecurity from "../features/admin/components/AddSecurity";
import { useAdminModalStore } from "../store/Admin/useAdminModals";

const AdminLayouts = () => {
  const securityModal = useAdminModalStore(
    (state) => state.securityModal,
  );
  return (
    <>
      <div className="lg:min-h-screen lg:w-full lg:flex">
        <Sidebar />

        <main className="lg:flex-1">
          <AdminHeader />
          <Outlet />
          {securityModal && <AddSecurity />}
        </main>
      </div>
    </>
  );
};

export default AdminLayouts;
