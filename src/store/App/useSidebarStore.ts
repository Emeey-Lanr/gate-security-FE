import { create } from "zustand";

type SidebarStore = {
    sidebar:boolean | null
    setSidebar:(sidebar:boolean)=>void
}

export const useSidebarStore = create<SidebarStore>((set)=>({
    sidebar:false,
    setSidebar:(state:boolean)=>set({sidebar:state})
}))