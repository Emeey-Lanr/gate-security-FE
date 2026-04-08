import { create } from "zustand";



type AdminSidebarStore = {
    sidebar: boolean | null
    setSidebar:(sidebar:boolean)=>void
}

export const useAdminSidebarStore = create<AdminSidebarStore>((set)=>({
  sidebar:false,
  setSidebar:(state:boolean)=>set({
    sidebar:state
  })

}))


//setSideBar is a function that takes sidebar as a parameter
//  is the parameter that is passed to change the  value