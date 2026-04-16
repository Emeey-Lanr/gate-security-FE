import { Link } from "react-router-dom"
import BackArrow from "../../../assets/back-arrow.svg";

const ResidentSetting = () => {
  return (

    <div className="w-[90%] mx-auto">
  {/* HEADER */}
  <div>
    <h1 className="text-[24px] font-bold">SETTINGS</h1>

    <p className="text-xs">
      Manage profile, security configuration, and admin controls.
    </p>

    {/* BREADCRUMBS */}
    <div className="flex items-center gap-[8px] mt-[16px]">
      <Link to="/resident/dashboard" className="text-xs">
        Dashboard
      </Link>
      <img
        src={BackArrow}
        alt="Back"
        className="w-[14px] transform rotate-180"
      />
      <Link to="/resident/settings" className="text-xs font-bold">
        Settings
      </Link>
    </div>
  </div>

  {/* SETTINGS GRID */}
  <div className="mt-[24px] grid md:grid-cols-2 lg:grid-cols-3 gap-[16px]">

    {/* ADMIN PROFILE */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">Resident Profile</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Update your account information
      </p>

      <Link  to={"/admin/settings/profile"}  className="mt-[12px] text-xs text-blue-400">
        Edit Profile →
      </Link>
    </div>


    {/* ESTATE SETTINGS */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">Estate Details</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Gate names, Id, and structure
      </p>

      <Link  to={"/admin/settings/estate/config"} className="mt-[12px] text-xs text-blue-400">
        View →
      </Link>
    </div>

    {/* SYSTEM PREFERENCES */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">System Preferences</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Dark mode, UI behavior, defaults
      </p>

      <Link to={"/admin/settings/prefrences"}  className="mt-[12px] text-xs text-blue-400">
        Customize →
      </Link>
    </div>
  </div>
</div>
)
}

export default ResidentSetting