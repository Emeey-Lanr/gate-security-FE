import { Link } from "react-router-dom";
import BackArrow from "../../../assets/back-arrow.svg";

const AdminNotifications = () => {
  return (
    <div className="w-[90%] mx-auto">
  <h1 className="text-[24px] font-bold">NOTIFICATIONS</h1>
 <p className="text-xs">Manage your notifications</p>
   <div className="flex items-center gap-[8px] mt-[16px]">
          <Link to="/admin/dashboard" className="text-xs">
            Dashboard
          </Link>
          <img
            src={BackArrow}
            alt="Back"
            className="w-[14px] transform rotate-180"
          />
          <Link to="/admin/settings" className="text-xs">
            Setting
          </Link>
          <img
            src={BackArrow}
            alt="Back"
            className="w-[14px] transform rotate-180"
          />
          <Link to="/admin/settings/notifications" className="font-bold text-xs">
            Notifications
          </Link>
        </div>
  <div className="mt-[24px] space-y-[16px]">

    <div className="flex justify-between items-center bg-[#111] p-[16px] border border-[#333] rounded">
      <p>Email Notifications</p>
      <input type="checkbox" />
    </div>

    <div className="flex justify-between items-center bg-[#111] p-[16px] border border-[#333] rounded">
      <p>SMS Alerts</p>
      <input type="checkbox" />
    </div>

    <div className="flex justify-between items-center bg-[#111] p-[16px] border border-[#333] rounded">
      <p>Push Notifications</p>
      <input type="checkbox" />
    </div>

  </div>
</div>
  )
}

export default AdminNotifications