import { useForm } from "react-hook-form"
import Input from "../../../components/Input"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import SearchIcon  from "../../../assets/search.svg"
import { Link } from "react-router-dom"
import BackArrow from "../../../assets/back-arrow.svg"
import AdminResidentMobile from "../components/AdminResidentMobile"
import AdminResidentDesktop from "../components/AdminResidentDesktop"
const AdminResident = () => {
   const schema = z.object({
      search: z.string().min(1, "")
    })
  
    type SearchData = z.infer<typeof schema>
    const {handleSubmit, register} = useForm<SearchData>({
      resolver: zodResolver(schema)
    });
  
    const onSubmit = (data: SearchData) => {
      console.log(data)
    }

  return (
     <div className="w-[90%] mx-auto">
      <div>
         
        <h1 className="text-[24px] font-bold">ADMIN RESIDENTS</h1>
        
        <p className="text-xs">View and manage resident information, including verification status.</p>

        <div className="flex items-center gap-[8px] mt-[16px]">
           <Link to="/admin/dashboard" className="text-xs">Dashboard</Link>
          <img src={BackArrow} alt="Back" className="w-[14px] transform rotate-180" />
           <Link to="/admin/resident" className="font-bold text-xs">Resident</Link>
         </div>
      </div>

       <div className="py-[16px] mx-auto">
               <form className="relative" onSubmit={handleSubmit(onSubmit)} action="">
                 <Input  register={register} type="text" name="search"/>
                 <button className="absolute bg-[#1B1B1B] top-[10px] right-[10px]" >
                  <img src={SearchIcon} alt="Search"/>
                 </button>
               </form>
      </div>

      <div>

<AdminResidentDesktop/>
       <AdminResidentMobile/>

          <div className="mt-[16px]">
            <p className="text-xs text-center"> 1 to 10 of 100 results</p>

            <div className="w-[100px] mx-auto flex gap-1 bg-[#2c2c2c] border border-[#a7a7a7] p-[8px] rounded-md mt-[8px]">
             <button className="w-[20px] h-[20px]  bg-[#1B1B1B] text-white  border border-[#a7a7a7] text-xs">1</button>
             <button className="w-[20px] h-[20px] text-[#666]  text-xs">2</button>
             <button className="w-[20px] text-xs text-[#666] h-[20px] ">3</button>
            </div>
          </div>
      </div>
</div>
  )
}

export default AdminResident