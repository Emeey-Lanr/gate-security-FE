import { Link } from "react-router-dom";
import BackArrow from "../../../assets/back-arrow.svg";

const AdminLogs = () => {
  return (
 <div className="w-[90%] mx-auto mt-[16px]">

  {/* HEADER */}
  <div>
    <h1 className="text-[24px] font-bold">ADMIN LOG</h1>
    <p className="text-xs">
      Use our AI powered log analysis to quickly identify and resolve security incidents.
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

  {/* CHAT AREA */}
  <div className="mt-[24px] bg-[#111111] p-[16px] rounded-md border border-[#4a4a4a] h-[500px] flex flex-col">

    {/* CHAT MESSAGES */}
    <div className="flex-1 overflow-y-auto mb-[16px] space-y-[12px]">
      
      {/* Admin Message */}
      <div className="flex justify-end">
        <div className="bg-[#1b1b1b] text-white p-[12px] rounded-lg max-w-[70%] text-sm ">
          Show me all unauthorized access attempts today.
        </div>
      </div>

      {/* AI Response */}
      <div className="flex justify-start">
        <div className="bg-[#222222] text-white p-[12px] rounded-lg max-w-[70%] text-sm">
          2 unauthorized access attempts detected at Gate B and Main Gate. Both unresolved.
        </div>
      </div>

      {/* Admin Message */}
      <div className="flex justify-end">
        <div className="bg-[#1b1b1b] text-white p-[12px] rounded-lg max-w-[70%] text-sm">
          Summarize alerts in the last 24 hours.
        </div>
      </div>

      {/* AI Response */}
      <div className="flex justify-start">
        <div className="bg-[#222222] text-white p-[12px] rounded-lg max-w-[70%]">
          • 3 incidents reported by residents <br/>
          • 1 resolved by security <br/>
          • 2 still pending
        </div>
      </div>

    </div>

    {/* INPUT BOX */}
    <form className="bg-[#1b1b1b] flex gap-[8px] lg:p-[16px]  border border-[#4a4a4a] rounded-md" >
      
      <input type="text" name="message" placeholder="Type your command..." className="h-[48px] px-[16px] w-full focus:outline-none focus:outline-1 border border-[#4a4a4a] bg-[#1b1b1b]" />
      <button className="bg-[#f1f1f1] border border-[#4a4a4a] flex-shrink-0 flex justify-center items-center w-[48px] h-[48px] rounded-full text-black   hover:bg-[#4ed53d]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19H8V21H2V13H4V19ZM12 19H8V17H12V19ZM16 17H12V15H16V17ZM20 15H16V13H20V15ZM10 13H4V11H10V13ZM22 13H20V11H22V13ZM8 5H4V11H2V3H8V5ZM20 11H16V9H20V11ZM16 9H12V7H16V9ZM12 7H8V5H12V7Z" fill="black"/>
</svg>

      </button>
    </form>

  </div>
</div>
  );
};

export default AdminLogs;
