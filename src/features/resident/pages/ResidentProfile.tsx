import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/back-arrow.svg";
const ResidentProfile = () => {
       const schema = z.object({
        search: z.string().min(1, ""),
      });
    
      type SearchData = z.infer<typeof schema>;
      const { handleSubmit, register } = useForm<SearchData>({
        resolver: zodResolver(schema),
      });

      const onSubmit = (data: SearchData) => {
    console.log(data);
  };
  return (
    <div className="w-[90%] mx-auto">
  <h1 className="text-[24px] font-bold uppercase">Profile</h1>
  <p className="text-xs">Manage your personal account details</p>
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
            Settings
          </Link>
          <img
            src={BackArrow}
            alt="Back"
            className="w-[14px] transform rotate-180"
          />
          <Link to="/admin/settings/profile" className="font-bold text-xs">
            Profile
          </Link>
        </div>

  <form onSubmit={handleSubmit(onSubmit)} className="mt-[24px]  bg-[#111] border border-[#333] p-[16px] rounded-md ">
    <p className="text-sm mb-[6px]">Resident Img</p>
    <div className="w-[200px] h-[200px] bg-[#1b1b1b] rounded-md mb-[12px] border border-[#3f3f3f]">

    </div>
    <div className="mb-[12px]">
      <label className="text-xs">Full Name</label>
      <Input value={"Emeey"} register={register} name="fullName" type="text"/>
    </div>

    <div className="mb-[12px]">
      <label className="text-xs">Email</label>
      <Input value={"emeeylanr@gamil.com"} register={register} name="email" type="text"/>
    </div>

    <div className="mb-[12px]">
      <label className="text-xs">Password</label>
      <Input value={"**1234Lanr"} register={register} name="password"  type="password"/>
    </div>

    <button className="mt-[12px] bg-white text-[#444] px-4 py-2 text-xs rounded">
      Save Changes
    </button>
  </form>
</div>
  )
}

export default ResidentProfile