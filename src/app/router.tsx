import { Route, Routes } from "react-router-dom"
import AdminSignup from "../features/admin/pages/AdminSignup"
import AdminLayouts from "../layouts/AdminLayouts"
import AdminDashboard from "../features/admin/pages/AdminDashboard"
import AdminAllResidents from "../features/admin/pages/AdminAllResidents"
import ResidentSignup from "../features/resident/pages/ResidentSignup"
import ResidentSignin from "../features/resident/pages/ResidentSignin"
import ResidentLayouts from "../layouts/ResidentLayouts"
import ResidentDashboard from "../features/resident/pages/ResidentDashboard"
import AdminSignin from "../features/admin/pages/AdminSignin"
import ResidentGenerateCode from "../features/resident/pages/ResidentGenerateCode"
import ResidentAllCodes from "../features/resident/pages/ResidentAllCodes"
import ResidentViewCode from "../features/resident/pages/ResidentViewCode"
import AdminResident from "../features/admin/pages/AdminResident"
const router = () => {
  return (
    <>
     <Routes>
      {/* ADMIN ROUTES */}
       
      <Route path="admin">
        {/* ADMIN SIGNUP AND SIGNIN ROUTES */}
          <Route path="signup" element={<AdminSignup/>}/>
           <Route path="signin" element={<AdminSignin/>}/>

{/* ADMIN DASHBOARD ROUTES */}
        <Route path="" element={<AdminLayouts/>} >
            <Route path="dashboard" element={<AdminDashboard/>} />
            <Route path="residents" element={<AdminAllResidents/>}/> 
             <Route path="residents/:id" element={<AdminResident/>}/> 
        </Route>
      </Route>
       
 

 {/* RESIDENT ROUTES */}
     <Route path="resident">
      {/* RESIDENT SIGNUP AND SIGNIN ROUTES */}
       <Route path="signup" element={<ResidentSignup/>}/>
       <Route path="signin" element={<ResidentSignin/>}/>

{/* RESIDENT DASHBOARD ROUTES */}
        <Route path="" element={<ResidentLayouts/>}>
            <Route index element={<ResidentDashboard/>}/>
            <Route path="generate" element={<ResidentGenerateCode/>}/>
            <Route path="all" element={<ResidentAllCodes/>}/>
            <Route path="code" element={<ResidentViewCode/>}/>
        </Route>
     </Route>
     </Routes>
    </>
  )
}

export default router