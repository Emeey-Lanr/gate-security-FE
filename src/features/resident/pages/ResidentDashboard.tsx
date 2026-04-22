import Key from "../../../assets/key.svg"
import Alert from "../../../assets/alert.svg"
import { Link } from "react-router-dom"
const ResidentDashboard = () => {
  return (
   <div className="w-[90%] mx-auto">
      {/* HEADER */}
      <div>
        <h1 className="text-[24px] font-bold">RESIDENT DASHBOARD</h1>
        <p className="text-xs">
          Manage your visitors and security access
        </p>
      </div>

      {/* STATS */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[16px]">
      
        <div className="p-[10px] bg-[#b0f0aa31] rounded-[5px] border border-[#b0f0aa] mb-[12px]">
      <p className="text-xs">Active Codes</p>
      <p>
        <span className="text-[34px] font-light text-[#5bfd4c]">
           2
        </span>
      </p>
    </div>
   
        <div className="p-[10px] bg-[#1b1b1b] rounded-[5px] border border-[#4a4a4a] mb-[12px]">
      <p className="text-xs ">Expired Code</p>
      <p>
        <span className="text-[34px] font-light text-red-500">
           2
        </span>
      </p>
    </div>
    
        <div className="p-[10px] bg-[#ffbbbb3d] rounded-[5px] border border-[#f0aaaa] mb-[12px]">
      <p className="text-xs">Alerts Raised</p>
      <p>
        <span className="text-[34px] font-light text-[#ff5757]">
           2
        </span>
      </p>
    </div>
       
      </div>

      {/* MAIN */}
      <div className="lg:grid lg:grid-cols-[3fr_5fr] gap-[16px] mt-[24px]">
        {/* LEFT SIDE */}
        <div>
          {/* GENERATE CODE */}
              
              <div>
                <p>Actions</p>
              </div>
            <div
            
              className="mt-[16px] bg-[#1b1b1b] border border-[#4a4a4a] p-[16px] rounded-md hover:bg-[#333] cursor-pointer"
            >
              <img src={Key} alt="" />
              <p className="font-bold py-[12px]">Generate Code</p>
              <p className="text-xs">Instant key creation for vistors</p>
            </div>
    

          {/* ALERT */}
           <div
            
              className="mt-[16px] bg-red-600 border border-red-400 p-[16px] rounded-md hover:bg-red-600 cursor-pointer"
            >
              <img src={Alert} alt="" />
              <p className="font-bold py-[12px] text-white">Raise an alert</p>
              <p className="text-xs text-white">Raise an alert incase of emergency</p>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* VISITOR CODES */}
          <div>
            <h1 className="text-sm">Your Visitor Codes</h1>

            <div className="bg-[#111111] p-[16px] mt-[16px] rounded-md border border-[#4a4a4a]">
              {/* ITEM */}
              <div className="flex justify-between py-[10px] border-b border-[#2a2a2a]">
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-[#888]">
                    Code: A23X9 • Expires in 10 mins
                  </p>
                </div>

                 <div className="bg-gray-500 h-[24px] rounded-full w-[80px] text-xs flex items-center justify-center">
                   <p className="text-white">Exited</p>
                 </div>
              </div>

              <div className="flex justify-between py-[10px] border-b border-[#2a2a2a]">
                <div>
                  <p className="text-sm font-medium">Sarah James</p>
                  <p className="text-xs text-[#888]">
                    Code: B91K2 • Expires in 2 hrs
                  </p>
                </div>

                  <div className="bg-green-500 h-[24px] rounded-full w-[80px] text-xs flex items-center justify-center">
                    <p className="text-white">Arrived</p>
                  </div>
              </div>

              <div className="flex justify-between py-[10px]">
                <div>
                  <p className="text-sm font-medium">Michael Lee</p>
                  <p className="text-xs text-[#888]">
                    Code: Z88P1 • Expired
                  </p>
                </div>

                 <div className="bg-yellow-400  h-[24px] rounded-full w-[80px] text-xs flex items-center justify-center">
                    <p className="text-black">Pending</p>
                 </div>
              </div>

              <Link to="/resident/codes">
                <button className="mt-[12px] text-xs text-blue-400">
                  View all →
                </button>
              </Link>
            </div>
          </div>

          {/* OPTIONAL: ALERT HISTORY */}
          <div className="mt-[24px]">
            <h1 className="text-sm">Recent Alerts</h1>

            <div className="bg-[#111111] p-[16px] mt-[16px] rounded-md border border-[#4a4a4a]">
              <p className="text-center font-bold">No Alerts Yet</p>
              <p className="text-center text-xs">
                Your alerts will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResidentDashboard