import { useForm } from "react-hook-form"
import Input from "../../../components/Input"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import SearchIcon  from "../../../assets/search.svg"
import Resident from "../../../assets/resident.svg"
import Key from "../../../assets/key.svg"

const AdminDashboard = () => {
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
        <h1 className="text-[24px] font-bold">ADMIN DASHBOARD</h1>
        <p className="text-xs">Welcome to Arepo estate resident and security admin control</p>
      </div>

       <div className="py-[16px] mx-auto">
         <form className="relative" onSubmit={handleSubmit(onSubmit)} action="">
           <Input  register={register} type="text" name="search"/>
           <button className="absolute bg-[#1B1B1B] top-[10px] right-[10px]" >
            <img src={SearchIcon} alt="Search"/>
           </button>
         </form>

          <div className="">
             <div className="p-[10px] my-[8px] bg-[#fdfdfd] rounded-[5px]  border border-[#303030]">
              <p className="text-xs text-[#414141]">All Resident</p>
               <p className=""><span className="text-bold text-[34px] font-light text-[#414141]">0</span><span className="text-xs font-light text-[#414141]"> resident</span></p>
            </div>
            
            <div className="p-[10px] my-[8px] bg-[#b0f0aa31] rounded-[5px]  border border-[#b0f0aa]">
              <p className="text-xs">VERIFIED RESIDENT</p>
               <p className=""><span className="text-bold text-[34px] font-light text-[#5bfd4c]">0</span><span className="text-xs font-light"> Active</span></p>
            </div>

            <div className="p-[10px] my-[8px] bg-[#ffbbbb3d] rounded-[5px]  border border-[#f0aaaa]">
              <p className="text-xs">PENDING VERIFICATION</p>
             <p className=""><span className="text-bold text-[34px] font-light text-[#ff5757]">0</span><span className="text-xs font-light"> Active</span></p>
            </div>
            <div></div>

          </div>

          <div className="mt-[24px]">
             <h2 className="text-sm font-medium">Quick Action</h2>
             <div className="mt-[16px]">
              <div className="bg-[#1b1b1b] border border-[#4a4a4a]  p-[16px] rounded-md w-full">
                <img src={Resident} className="block" alt="Verify Residents"/>
                <p className="font-bold py-[12px]">Verify Residents</p>
                <p className="text-xs">Click to verify residents</p>
              </div>
             </div>

             <div className="mt-[16px]">
              <div className="bg-[#1b1b1b] border border-[#4a4a4a]  p-[16px] rounded-md w-full">
                <img src={Key} className="block" alt="Verify Residents"/>
                <p className="font-bold py-[12px]">Add Security</p>
                <p className="text-xs">Click to verify residents</p>
              </div>
             </div>
          </div>

          <div className="mt-[24px] mx-auto">
            <h1 className="text-sm">Recent Resident Activity</h1>
            <div className="bg-[#111111] p-[16px] mt-[16px] rounded-md border border-[#4a4a4a]">
               <div></div>
               <p className="text-center font-bold">No Recent Activity</p>
               <p className="text-center text-xs">You will see recent activity here</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default AdminDashboard