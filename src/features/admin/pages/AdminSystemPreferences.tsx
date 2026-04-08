import { Link } from "react-router-dom"
import BackArrow from "../../../assets/back-arrow.svg";
const AdminSystemPreferences = () => {
  return (
    <div className="w-[90%] mx-auto">
     <h1 className="text-[24px] font-bold">SYSTEM PREFERENCES</h1>
          <p className="text-xs">
            Decide on what suits your style
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
            <Link to="/admin/settings" className="text-xs">
              Settings
            </Link>
             <img
              src={BackArrow}
              alt="Back"
              className="w-[14px] transform rotate-180"
            />
            <Link to="/admin/settings/prefrences" className="text-xs font-bold">
              system prefrences
            </Link>
          </div>

  <div className="mt-[24px] space-y-[16px]">

    {/* Dark Mode */}
    <div className="flex justify-between items-center bg-[#111] p-[16px] border border-[#333] rounded">
      <p className="text-sm">Dark Mode</p>
      <input type="checkbox" />
    </div>


    {/* Alert Sound */}
    <div className="flex justify-between items-center bg-[#111] p-[16px] border border-[#333] rounded">
      <p className="text-sm">Enable Alert Sound</p>
      <input type="checkbox" />
    </div>

  </div>
</div>
  )
}

export default AdminSystemPreferences