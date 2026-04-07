import AdminLogo from "./AdminLogo";
import Dahsboard from "../../../assets/dashboard.svg";
import Residents from "../../../assets/residentwo.svg";
import Security from "../../../assets/security.svg";
import Logs from "../../../assets/log.svg";
import Settings from "../../../assets/setting.svg";
import Logout from "../../../assets/logout.svg";
import Exit from "../../../assets/exit.svg";
import Alert from "../../../assets/alert.svg";
import { useAdminSidebarStore } from "../../../store/Admin/useAdminSidebarStore";
import { Link } from "react-router";

const AdminSidebar = () => {
  const open = useAdminSidebarStore((state) => state.sidebar?.isOpen);
  const toggleSidebar = useAdminSidebarStore((state) => state.setSidebar);

  const sideBarItems = [
    { name: "Dashboard", src: Dahsboard, url: "/admin/dashboard" },
    { name: "Residents", src: Residents, url: "/admin/residents" },
    { name: "Security", src: Security, url: "/admin/security" },
    { name: "Alerts", src: Alert, url: "/admin/alerts" },
    { name: "AI Logs", src: Logs, url: "/admin/logs" },
    { name: "Settings", src: Settings, url: "/admin/settings" },
    { name: "Logout", src: Logout, url: "/admin/logout" },
  ];
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`${open ? "translate-x-0" : "translate-x-[-100vw]"}  transition-all duration-500 flex w-full h-full z-10  justify-center items-center fixed top-0 bg-[#0f0f0f] md:hidden`}
      >
        <div>
          <div className="absolute top-0 right-0 m-[16px]">
            <button onClick={() => toggleSidebar({ isOpen: false })}>
              <img src={Exit} className="w-[24px]" alt="Exit" />
            </button>
          </div>
          <div className="w-[64px]  mx-auto lg:w-[200px] mb-[32px]">
            <AdminLogo />
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-[32px]">
            {sideBarItems.map((item, index) => (
              <Link
                onClick={() => toggleSidebar({ isOpen: false })}
                to={item.url}
                key={index}
                className="flex flex-col  items-center hover:transition-all hover:bg-[#333] hover:border hover:border-[#444] hover:p-[16px]"
              >
                <img src={item.src} className="w-[24px]" alt={item.name} />
                <p className="text-sm">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden  lg:block lg:w-[200px] lg:flex-shrink-0 lg:top-0 lg:h-screen bg-[#0f0f0f] lg:sticky">
        <div className="flex w-[90%] px-[16px] items-center py-[16px] gap-2 mx-auto">
          <div className="w-[28px] h-[28px]">
            <AdminLogo />
          </div>
          <h1 className="text-lg font-bold text-center">SECESTA</h1>
        </div>

        <div>
          {sideBarItems.map((item, index) => (
            <Link to={item.url} key={index}>
              <div
                className={`flex items-center px-[16px] ${index == 5 && "absolute bottom-0"} ${index == 6 && "absolute bottom-[48px]"} w-[90%] mx-auto gap-2 h-[44px]   hover:border-l-2 hover:border-t-0 hover:border-r-0 hover:border-b-0  hover:transition-all hover:duration-300 hover:bg-[#333] hover:border hover:border-[#ddd]`}
              >
                <img className="w-[18px]" src={item.src} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
