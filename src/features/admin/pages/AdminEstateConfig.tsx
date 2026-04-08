import Input from "../../../components/Input"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/back-arrow.svg";

const AdminEstateConfig = () => {
     const schema = z.object({
            search: z.string().min(1, ""),
          });
        
          type SearchData = z.infer<typeof schema>;
          const { handleSubmit, register } = useForm<SearchData>({
            resolver: zodResolver(schema),
          });
    
          const onSubmit = (data: SearchData) => {
        console.log(data);
          }

  return (
        <div className="w-[90%] mx-auto">
  <h1 className="text-[24px] font-bold  uppercase">Estate Configuration</h1>
  <p className="text-xs">Manage your estate account details</p>
   <div className="flex items-center gap-[8px] mt-[16px]">
          <Link to="/admin/dashboard" className="text-xs">
            Dashboard
          </Link>
          <img
            src={BackArrow}
            alt="Back"
            className="w-[14px] transform rotate-180"
          />
          <Link to="/admin/settings" className="text-xs">
            Setting
          </Link>
          <img
            src={BackArrow}
            alt="Back"
            className="w-[14px] transform rotate-180"
          />
          <Link to="/admin/estate/config" className="font-bold text-xs">
            Estate
          </Link>
        </div>

  <form onSubmit={handleSubmit(onSubmit)} className="mt-[24px]  bg-[#111] border border-[#333] p-[16px] rounded-md ">
    <div>
        <label  className="text-xs">Image</label>
  <div className="bg-[#2c2c2c] h-[200px] p-[16px] rounded-md mb-[12px] lg:w-[200px]"></div>
    </div>
            

    <div className="mb-[12px]">
      <label className="text-xs">Estate Name</label>
      <Input value={"Praise Hill Estate"} register={register} name="fullName" type="text"/>
    </div>
     <div className="mb-[12px]">
      <label className="text-xs">Estate Addres</label>
      <Input value={"Arepo User"} register={register} name="fullName" type="text"/>
    </div>


    <div className="mb-[12px]">
      <label className="text-xs">No. of House</label>
      <Input value={"1"} register={register} name="email" type="text"/>
    </div>


    <button className="mt-[12px] bg-white text-[#444] px-4 py-2 text-xs rounded">
      Save Changes
    </button>
  </form>
</div>
  )
}

export default AdminEstateConfig