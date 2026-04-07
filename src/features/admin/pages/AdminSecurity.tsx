import { Link } from "react-router-dom";
import BackArrow from "../../../assets/back-arrow.svg";
import Input from "../../../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SearchIcon from "../../../assets/search.svg";
import Key from "../../../assets/key.svg";
import AddSecurity from "../components/AddSecurity";
const AdminSecurity = () => {
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
    <>
    <div className="w-[90%] mx-auto">
      <div>
        <h1 className="text-[24px] font-bold">ADMIN SECURITY</h1>

        <p className="text-xs">
          View and manage security information, including verification status.
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
          <Link to="/admin/residents" className="text-xs font-bold">
            Security
          </Link>
        </div>

        <div className="py-[16px] mx-auto">
          <form
            className="relative"
            onSubmit={handleSubmit(onSubmit)}
            action=""
          >
            <Input register={register} type="text" name="search" />
            <button className="absolute bg-[#1B1B1B] top-[10px] right-[10px]">
              <img src={SearchIcon} alt="Search" />
            </button>
          </form>
        </div>
        <div className="mt-[16px] md:w-[400px] mb-[16px]">
          <div className="bg-[#1b1b1b] border border-[#4a4a4a]  p-[16px] rounded-md w-full hover:transition-all hover:duration-300 hover:bg-[#333] hover:border hover:border-[#ddd]">
            <img src={Key} className="block w-[24px]" alt="Verify Residents" />
            <p className="font-bold py-[12px] text-sm">Add Security</p>
            <p className="text-xs">Click to add security personnel</p>
          </div>
        </div>
      </div>

      <div></div>

      <div className=" overflow-x-auto">
        <table className="min-w-[1000px] table-fixed">
          <thead className="">
            <tr>
              <th className="text-sm font-normal text-left w-[150px] p-[8px]">
                First Name
              </th>
              <th className="text-sm font-normal text-left w-[150px] p-[8px]">
                Last Name
              </th>
              <th className="text-sm font-normal text-left w-[150px] p-[8px]">
                Email
              </th>
              <th className="text-sm font-normal text-left w-[150px] p-[8px]">
                Phone Number
              </th>
              <th className="text-sm font-normal text-left w-[200px] p-[8px]">
                Access Code
              </th>

              <th className="text-sm font-normal text-left w-[100px] p-[8px]">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  bg-[#fdfdfd] p-[8px] h-[48px] box-border  border border-[#303030] shadow-sm rounded-md ">
              <td className="p-[8px]">
                <h1 className="text-[#333] text-sm truncate ">Emmanuel</h1>
              </td>
              <td className="p-[8px]">
                <h1 className="text-[#333] text-sm truncate ">Oyelowo</h1>
              </td>
              <td className="p-[8px]">
                <h1 className="text-[#333] text-sm truncate ">
                  emeeylanr@gmail.com
                </h1>
              </td>
              <td className="p-[8px]">
                <h1 className="text-[#333] text-sm truncate ">08126115740</h1>
              </td>
              <td className="p-[8px]  ">
                <div className="flex gap-1">
 <p className="text-[#333] text-sm truncate">
                  *****************
                </p>
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3H4V16"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 7H20V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H10C9.46957 21 8.96086 20.7893 8.58579 20.4142C8.21071 20.0391 8 19.5304 8 19V7Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                </div>
               
              </td>
              <td className="flex items-center gap-2 p-[8px] ">
                <button
                  onClick={(e) => e.stopPropagation}
                  className="border border-blue-500 bg-blue-100 text-blue-500 text-sm  py-1 px-3 rounded-sm hover:bg-blue-600 hover:text-[#fff]"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => e.stopPropagation}
                  className="border border-red-500 bg-red-100 text-red-500 text-sm  py-1 px-3 rounded-sm hover:bg-red-600 hover:text-[#fff] ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* <AddSecurity/> */}
    </>
  );
};

export default AdminSecurity;
