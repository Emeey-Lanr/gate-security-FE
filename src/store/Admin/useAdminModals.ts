import { create } from "zustand";



type AddSecurityStore = {
     securityModal:boolean | null
     setSecurityModal:(securityModal:boolean)=>void
}

export const useAddSecurityModalStore = create<AddSecurityStore>((set)=>({
  securityModal: false, 
     setSecurityModal:(state:boolean)=>set({securityModal:state})
}))