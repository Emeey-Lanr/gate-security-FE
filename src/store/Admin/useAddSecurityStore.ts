import { create } from "zustand";

type AddSecurityModal = {
    isOpen:boolean
}

type AddSecurityStore = {
     securityModal:AddSecurityModal | null
     setSecurityModal:(securityModal:AddSecurityModal)=>void
}

export const useAddSecurityModalStore = create<AddSecurityStore>((set)=>({
  securityModal:{isOpen:false}, 
     setSecurityModal:(securityModal)=>set({securityModal})
}))