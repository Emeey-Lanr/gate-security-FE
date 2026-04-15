import ResidentLogo from "./ResidentLogo";
import Dahsboard from "../../../assets/dashboard.svg";
import Residents from "../../../assets/residentwo.svg";
import Security from "../../../assets/security.svg";
import Settings from "../../../assets/setting.svg";
import Logout from "../../../assets/logout.svg";
import Exit from "../../../assets/exit.svg";

import { useSidebarStore } from "../../../store/App/useSidebarStore";
import { Link } from "react-router";
import { useAdminModalStore } from "../../../store/Admin/useAdminModals";

const ResidentSideBar = () => {
   const open = useSidebarStore((state) => state.sidebar);
  const toggleSidebar = useSidebarStore((state) => state.setSidebar);
  const logoutModal = useAdminModalStore((state)=>state.setLogoutModal)

  const logoutModalBtn = (logout:boolean, sidebar:boolean)=>{
    logoutModal(logout)
    toggleSidebar(sidebar)
  }

  const sideBarItems = [
    { name: "Dashboard", src: Dahsboard, url: "/resident/dashboard" },
    { name: "Active Codes", src: Residents, url: "/resident/codes" },
    { name: "Alerts", src: Security, url: "/resident/alert" },

 
    { name: "Settings", src: Settings, url: "/resident/settings" },
       { name: "Logout", src: Logout, url: "/resident/logout" },

  ];
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`${open ? "translate-x-0" : "translate-x-[-100vw]"}  transition-all duration-500 flex w-full h-full z-10  justify-center items-center fixed top-0 bg-[#0f0f0f] lg:hidden`}
      >
        <div>
          <div className="absolute top-0 right-0 m-[16px]">
            <button onClick={() => toggleSidebar(false)}>
              <img src={Exit} className="w-[24px]" alt="Exit" />
            </button>
          </div>
          <div className="w-[64px]  mx-auto lg:w-[200px] mb-[32px]">
            <ResidentLogo/>
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-[32px]">
            {sideBarItems.map((item, index) => (
             (index == 4 ? <button onClick={()=>logoutModalBtn(true, false)} className="flex flex-col  items-center hover:transition-all hover:bg-[#333] hover:border hover:border-[#444] hover:p-[16px]" key={index}>
              <img src={item.src} className="w-[24px]" alt={item.name} />
                <p className="text-sm">{item.name}</p>
             </button> : <Link
                onClick={() => toggleSidebar(false)}
                to={item.url}
                key={index}
                className="flex flex-col  items-center hover:transition-all hover:bg-[#333] hover:border hover:border-[#444] hover:p-[16px]"
              >
                <img src={item.src} className="w-[24px]" alt={item.name} />
                <p className="text-sm">{item.name}</p>
              </Link>)
              
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden  lg:block lg:w-[200px] lg:flex-shrink-0 lg:top-0 lg:h-screen bg-[#0f0f0f] lg:sticky">
        <div className="flex w-[90%] px-[16px] items-center py-[16px] gap-2 mx-auto">
          <div className="w-[28px] h-[28px]">
            <ResidentLogo />
          </div>
          <h1 className="text-lg font-bold text-center">SECESTA</h1>
        </div>

        <div>
          {sideBarItems.map((item, index) => (
            (index == 4 ? <button onClick={()=>logoutModalBtn(true, false)} className="flex items-center px-[16px] absolute bottom-0 w-[90%] mx-auto gap-2 h-[44px]   hover:border-l-2 hover:border-t-0 hover:border-r-0 hover:border-b-0  hover:transition-all hover:duration-300 hover:bg-[#333] ">
               <img className="w-[18px]" src={item.src} alt={item.name} />
                <p>{item.name}</p>
            </button>: <Link to={item.url} key={index}>
              <div
                className={`flex items-center px-[16px] ${index == 3 && "absolute bottom-[48px]"} ${index == 6 && "absolute bottom-[48px]"} w-[90%] mx-auto gap-2 h-[44px]   hover:border-l-2 hover:border-t-0 hover:border-r-0 hover:border-b-0  hover:transition-all hover:duration-300 hover:bg-[#333] hover:border hover:border-[#ddd]`}
              >
                <img className="w-[18px]" src={item.src} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </Link>)
           
          ))}
        </div>
      </div>
    </>
  )
}

export default ResidentSideBar