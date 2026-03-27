import { Outlet } from "react-router-dom"
import ResidentSideBar from "../features/resident/components/ResidentSideBar"

const ResidentLayouts = () => {
  return (
    <>
     <ResidentSideBar/>
     <main>
        <Outlet/>
     </main>
    </>
  )
}

export default ResidentLayouts