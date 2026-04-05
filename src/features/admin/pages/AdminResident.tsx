import { Link } from "react-router-dom";
import BackArrow from "../../../assets/back-arrow.svg";
import Input from "../../../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SearchIcon from "../../../assets/search.svg";
const AdminResident = () => {
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
      <div>
        <h1 className="text-[24px] font-bold">ADMIN RESIDENTS</h1>

        <p className="text-xs">
          View and manage resident information, including verification status.
        </p>
        <div className="flex items-center gap-[8px] mt-[16px]">
          <Link to="/admin/dashboard" className="text-xs">
            Dashboard
          </Link>
          <img
            src={BackArrow}
            alt="Back"
            className="w-[14px] transform rotate-180"
          />
          <Link to="/admin/residents" className="text-xs">
            Residents
          </Link>
          <img
            src={BackArrow}
            alt="Back"
            className="w-[14px] transform rotate-180"
          />
          <Link to="/admin/resident" className="font-bold text-xs">
            Resident
          </Link>
        </div>
      </div>

      <div>
        <div></div>
      </div>

      <div className="py-[16px] mx-auto">
        <form className="relative" onSubmit={handleSubmit(onSubmit)} action="">
          <Input register={register} type="text" name="search" />
          <button className="absolute bg-[#1B1B1B] top-[10px] right-[10px]">
            <img src={SearchIcon} alt="Search" />
          </button>
        </form>
      </div>

      <div className="lg:w-[70%] lg:mx-auto">
        <div className="bg-[#2c2c2c] h-[200px] p-[16px] rounded-md mb-[12px] lg:w-[200px]"></div>
        <div className="flex items-center gap-1">
          <div className="w-[8px] h-[8px] rounded-full bg-green-500"></div>
          <p className="text-xs text-[#666]">ACTIVE</p>
        </div>

        <div className="lg:w-full lg:grid lg:grid-cols-2 lg:gap-5">
          <div className="mt-[12px]  mx-auto w-full">
            <h1 className="text-sm">Name</h1>
            <p className="text-xs bg-[#1B1B1B] p-[8px] rounded-sm border border-[#444]">
              Oyelowo Emmanuel Oluwadara
            </p>
          </div>
          <div className="mt-[12px] mx-auto w-full">
            <h1 className="text-sm">Address</h1>
            <p className="text-xs bg-[#1B1B1B] p-[8px] rounded-sm border border-[#444]">
              Aege 123 h
            </p>
          </div>

          <div className="mt-[12px] mx-auto w-full">
            <h1 className="text-sm">Email</h1>
            <p className="text-xs bg-[#1B1B1B] p-[8px] rounded-sm border border-[#444]">
              oyelowo.emmanuel@example.com
            </p>
          </div>

          <div className="mt-[12px] mx-auto w-full">
            <h1 className="text-sm">Phone Number</h1>
            <p className="text-xs bg-[#1B1B1B] p-[8px] rounded-sm border border-[#444]">
              123-456-7890
            </p>
          </div>

          <div className="mt-[12px] mx-auto w-full">
            <h1 className="text-sm">House Id</h1>
            <p className="text-xs bg-[#1B1B1B] p-[8px] rounded-sm border border-[#444]">
              123-456-7890
            </p>
          </div>
        </div>

        <div className="my-[12px]">
          <button className="w-full h-[40px] text-sm text-gray-900 border border-[#444] bg-white mb-[12px]">
            Verify
          </button>
          <button className="w-full h-[40px] bg-red-600 rounded-sm border border-[#444] text-xs text-white ">
            Delete
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default AdminResident;
