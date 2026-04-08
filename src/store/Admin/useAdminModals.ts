import { create } from "zustand";



type AddSecurityStore = {
     securityModal:boolean | null
     setSecurityModal:(state:boolean)=>void
     alertModal:boolean | null
     setAlertModal:(state:boolean)=>void
}

export const useAdminModalStore = create<AddSecurityStore>((set)=>({
  securityModal: false, 
     setSecurityModal:(state:boolean)=>set({securityModal:state}),
       alertModal:false,
       setAlertModal:(state:boolean)=>set({alertModal:state}),
}))