import { Link  } from "react-router-dom"
import BackArrow from "../../../assets/back-arrow.svg";
const AdminSetting = () => {
  return (
<div className="w-[90%] mx-auto">
  {/* HEADER */}
  <div>
    <h1 className="text-[24px] font-bold">ADMIN SETTINGS</h1>

    <p className="text-xs">
      Manage system preferences, security configuration, and admin controls.
    </p>

    {/* BREADCRUMBS */}
    <div className="flex items-center gap-[8px] mt-[16px]">
      <Link to="/admin/dashboard" className="text-xs">
        Dashboard
      </Link>
      <img
        src={BackArrow}
        alt="Back"
        className="w-[14px] transform rotate-180"
      />
      <Link to="/admin/settings" className="text-xs font-bold">
        Settings
      </Link>
    </div>
  </div>

  {/* SETTINGS GRID */}
  <div className="mt-[24px] grid md:grid-cols-2 lg:grid-cols-3 gap-[16px]">

    {/* ADMIN PROFILE */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">Admin Profile</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Update your account information
      </p>

      <button className="mt-[12px] text-xs text-blue-400">
        Edit Profile →
      </button>
    </div>

    {/* SECURITY PERSONNEL */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">Security Personnel</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Manage guards and access roles
      </p>

      <button
        
        className="mt-[12px] text-xs text-blue-400"
      >
        Add / Manage →
      </button>
    </div>

    {/* ALERT SETTINGS */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">Alert Settings</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Configure how alerts are triggered
      </p>

      <button className="mt-[12px] text-xs text-blue-400">
        Configure →
      </button>
    </div>

    {/* NOTIFICATIONS */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">Notifications</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Control SMS, email, or push alerts
      </p>

      <button className="mt-[12px] text-xs text-blue-400">
        Manage →
      </button>
    </div>

    {/* ESTATE SETTINGS */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">Estate Configuration</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Gate names, zones, and structure
      </p>

      <button className="mt-[12px] text-xs text-blue-400">
        Edit →
      </button>
    </div>

    {/* SYSTEM PREFERENCES */}
    <div className="bg-[#111] border border-[#333] p-[16px] rounded-md">
      <h2 className="text-sm font-bold">System Preferences</h2>
      <p className="text-xs text-[#aaa] mt-[4px]">
        Dark mode, UI behavior, defaults
      </p>

      <button className="mt-[12px] text-xs text-blue-400">
        Customize →
      </button>
    </div>
  </div>
</div>
  )
}

export default AdminSetting