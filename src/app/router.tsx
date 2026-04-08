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
import AdminSecurity from "../features/admin/pages/AdminSecurity"
import AdminLogs from "../features/admin/pages/AdminLogs"
import AdminAlerts from "../features/admin/pages/AdminAlerts"
import AdminSetting from "../features/admin/pages/AdminSettings"
import AdminProfile from "../features/admin/pages/AdminProfile"
import AdminSystemPreferences from "../features/admin/pages/AdminSystemPreferences"
import AdminEstateConfig from "../features/admin/pages/AdminEstateConfig"
import AdminNotifications from "../features/admin/pages/AdminNotifications"

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
              <Route path="security" element={<AdminSecurity/>}/> 
              <Route path="alerts" element={<AdminAlerts/>}/>
               <Route path="logs" element={<AdminLogs/>}/>
               <Route path="settings" element={<AdminSetting/>}/>
               <Route path="settings/profile" element={<AdminProfile/>}/>
               <Route path="settings/prefrences" element={<AdminSystemPreferences/>}/>
               <Route path="settings/estate/config" element={<AdminEstateConfig/>}/>
                <Route path="settings/notifications" element={<AdminNotifications/>}/>
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