import {create} from "zustand"



type LoadingStore = {
    loading: boolean | null
    setLoading:(state:boolean)=>void
}


export const useLoadingStore = create<LoadingStore>((set)=>({
  loading:false,
  setLoading:(loading)=>set({loading})
}))
