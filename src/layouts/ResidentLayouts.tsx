import { Outlet } from "react-router-dom"
import ResidentSideBar from "../features/resident/components/ResidentSideBar"
import ResidentHeader from "../features/resident/components/ResidentHeader"

const ResidentLayouts = () => {
  return (
    <>
      <div className="lg:min-h-screen lg:w-full lg:flex">
        <ResidentSideBar/>
       <main className="lg:flex-1">
       <ResidentHeader/>
        <Outlet/>
     </main>
      </div>
    
    </>
  )
}

export default ResidentLayouts