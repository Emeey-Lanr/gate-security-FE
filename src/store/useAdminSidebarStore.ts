import { create } from "zustand";

type AdminSidebar = {
    isOpen:boolean
}

type AdminSidebarStore = {
    sidebar: AdminSidebar | null
    setSidebar:(sidebar:AdminSidebar)=>void
}

export const useAdminSidebarStore = create<AdminSidebarStore>((set)=>({
  sidebar:{isOpen:false},
  setSidebar:(sidebar)=>set({sidebar})
}))