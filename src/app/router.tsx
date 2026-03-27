import { Route, Routes } from "react-router-dom"
import AdminSignup from "../features/admin/pages/AdminSignup"
import AdminLayouts from "../layouts/AdminLayouts"
import AdminDashboard from "../features/admin/pages/AdminDashboard"
import AdminResident from "../features/admin/pages/AdminResident"

const router = () => {
  return (
    <>
     <Routes>
      {/* ADMIN ROUTES */}
        <Route path="admin/signup" element={<AdminSignup/>}/>

        <Route path="admin" element={<AdminLayouts/>} >
            <Route index element={<AdminDashboard/>} />
            <Route path="resident" element={<AdminResident/>}/> 
        </Route>
 
     </Routes>
    </>
  )
}

export default router