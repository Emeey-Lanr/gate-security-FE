import Router from "./app/router"
import Loading from "./components/Loading"
import { useLoadingStore } from "./store/useLoadingStore"



const App = () => {
 const loading = useLoadingStore((state)=>state.loading)
  return <>

  <Router/>
   {loading  && <Loading/>}
  
   
  </> 
}
 
export default App
