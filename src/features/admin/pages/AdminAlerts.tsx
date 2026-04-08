import { Link } from "react-router-dom";
import BackArrow from "../../../assets/back-arrow.svg";
import AlertModal from "../components/AlertModal";
import { useAdminModalStore } from "../../../store/Admin/useAdminModals";
const AdminAlerts = () => {
  const alertModal = useAdminModalStore((state)=>state.alertModal)
  const toggleAlertModal = useAdminModalStore((state)=>state.setAlertModal)
  return (
    <>
      <div className="w-[90%] mx-auto mt-[16px]">
        {/* HEADER */}
        <div>
          <h1 className="text-[24px] font-bold">ADMIN ALERTS</h1>
          <p className="text-xs">
            View and manage security alerts, including unauthorized access
            attempts and other incidents.
          </p>

          <div className="flex items-center gap-[8px] mt-[16px]">
            <Link to="/admin/dashboard" className="text-xs">
              Dashboard
            </Link>
            <img
              src={BackArrow}
              alt="Back"
              className="w-[14px] transform rotate-180"
            />
            <Link to="/admin/residents" className="text-xs font-bold">
              Alerts
            </Link>
          </div>
        </div>

        <div onClick={()=>toggleAlertModal(true)} className="mt-[18px]">
          <div className="mb-[18px] bg-[#1b1b1b] border border-[#4a4a4a]  p-[16px] rounded-md w-full hover:transition-all hover:duration-300 hover:bg-[#333] hover:border hover:border-[#ddd]">
            <div>
              <p className="font-bold text-sm">Unauthorized Access Attempt</p>
              <p className="text-xs text-[#aaa]">Gate B - 10:30 AM</p>
            </div>
            <div>
              <p className="text-xs  mt-[8px] text-[#aaa]">
                Status:{" "}
                <span className="font-bold text-[#ff0000]">Unresolved</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {alertModal && <AlertModal />}
    </>
  );
};

export default AdminAlerts;
