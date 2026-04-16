import { Link } from "react-router-dom";
import Key from "../../../assets/key.svg";
import BackArrow from "../../../assets/back-arrow.svg";
import Copy from "../../../assets/copy.svg"

const ResidentAllCodes = () => {
  return (
   <div className="w-[90%] mx-auto">
  {/* HEADER */}
  <div>
    <h1 className="text-[24px] font-bold">RESIDENT CODES</h1>

    <p className="text-xs">
      Generate and manage visitor access codes
    </p>

    {/* BREADCRUMBS */}
    <div className="flex items-center gap-[8px] mt-[16px]">
      <Link to="/resident/dashboard" className="text-xs">
        Dashboard
      </Link>
      <img
        src={BackArrow}
        alt="Back"
        className="w-[14px] transform rotate-180"
      />
      <p className="text-xs">Codes</p>
    </div>
  </div>

  {/* GENERATE CODE */}
  <div className="mt-[16px] bg-[#1b1b1b] lg:w-[300px] border border-[#4a4a4a] p-[16px] rounded-md hover:bg-[#333] cursor-pointer">
    <img src={Key} alt="" />
    <p className="font-bold py-[12px]">Generate Code</p>
    <p className="text-xs">Instant key creation for visitors</p>
  </div>

  {/* LIST */}
  <p className="mt-[24px] text-sm">All Codes</p>

  {/* CARD */}
  <div className="bg-[#111111] p-[16px] mt-[16px] rounded-md border border-[#4a4a4a]">
    
    {/* ITEM */}
    <div className="py-[12px] border-b border-[#2a2a2a]">
      
      {/* TOP ROW */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <p className="text-sm font-medium">John Doe</p>

            <span className="bg-gray-500 h-[8px] w-[8px] ml-[8px] rounded-full"></span>

            <p className="text-white text-xs ml-[8px]">Exited</p>
          </div>

          <p className="text-xs text-[#888] mt-[4px] flex items-center gap-1">
            Code: A23X9 <button><img src={Copy} className="w-[12px]" alt="copy"/></button> • Expires in 10 mins
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-[8px]">
          <button className="text-xs text-blue-400 hover:underline">
            Edit
          </button>
          <button className="text-xs text-red-400 hover:underline">
            Delete
          </button>
        </div>
      </div>

      {/* NOTES */}
      <div className="mt-[8px] bg-[#1b1b1b] p-[10px] rounded-md border border-[#333]">
        <p className="text-[10px] text-[#aaa]">NOTE</p>
        <p className="text-xs mt-[2px]">
          Delivering a package. Call on arrival.
        </p>
      </div>
    </div>

    {/* EMPTY STATE (optional) */}
    {/* 
    <p className="text-center text-xs text-[#aaa]">
      No codes generated yet
    </p> 
    */}

  </div>
</div>
  );
};

export default ResidentAllCodes;
