import AdminLogo from "./AdminLogo"
import SidebarIcon from "../../../assets/sidebar-icon.svg"
const AdminHeader = () => {
  return (
    <div className="w-[90%] mx-auto py-[24px]  flex justify-between items-center">
        <div className="w-[32px] h-[32px]"><AdminLogo/></div>

         <div className="flex items-center gap-[16px]">
            <div className="w-[24px] h-[24px] bg-white rounded-sm flex items-center justify-center">
               <p className="font-bold text-sm text-[#1b1b1bee]">E</p>
            </div>
             <button className="">
                <img className="W-[24px] h-[24px]" src={SidebarIcon} alt="hamburger" />
             </button>
         </div>
    </div>
  )
}

export default AdminHeader