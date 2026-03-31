import {create} from "zustand"

type Loading = {
    status:boolean
}


type LoadingStore = {
    loading: Loading | null
    setLoading:(loading:Loading)=>void
}


export const useLoadingStore = create<LoadingStore>((set)=>({
  loading:{status:false},
  setLoading:(loading)=>set({loading})
}))
