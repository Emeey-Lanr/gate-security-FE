import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SearchIcon from "../../../assets/search.svg";
import Resident from "../../../assets/resident.svg";
import Key from "../../../assets/key.svg";

import { Link } from "react-router-dom";
import { useAdminModalStore } from "../../../store/Admin/useAdminModals";

const AdminDashboard = () => {
  const toggleSecurityModal = useAdminModalStore(
    (state) => state.setSecurityModal,
  );
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
      {/* HEADER */}
      <div>
        <h1 className="text-[24px] font-bold">ADMIN DASHBOARD</h1>
        <p className="text-xs">
          Welcome to Arepo estate resident and security admin control
        </p>
      </div>

      {/* SEARCH */}
      <div className="py-[16px]">
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
          <Input value={""} register={register} type="text" name="search" />
          <button className="absolute bg-[#1B1B1B] top-[10px] right-[10px]">
            <img src={SearchIcon} alt="Search" />
          </button>
        </form>
      </div>

      {/* STATS */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
        <div className="p-[10px] bg-[#fdfdfd] rounded-[5px] border border-[#303030] mb-[12px]">
          <p className="text-xs text-[#414141]">All Resident</p>
          <p>
            <span className="text-[34px] font-light text-[#414141]">0</span>
            <span className="text-xs text-gray-800"> resident</span>
          </p>
        </div>

        <div className="p-[10px] bg-[#b0f0aa31] rounded-[5px] border border-[#b0f0aa] mb-[12px]">
          <p className="text-xs">VERIFIED RESIDENT</p>
          <p>
            <span className="text-[34px] font-light text-[#5bfd4c]">0</span>
            <span className="text-xs"> Active</span>
          </p>
        </div>

        <div className="p-[10px] bg-[#ffbbbb3d] rounded-[5px] border border-[#f0aaaa] mb-[12px]">
          <p className="text-xs">PENDING VERIFICATION</p>
          <p>
            <span className="text-[34px] font-light text-[#ff5757]">0</span>
            <span className="text-xs"> Pending</span>
          </p>
        </div>

        {/*ALERT COUNT (NEW - IMPORTANT) */}
        <div className="p-[10px] bg-[#1b1b1b] rounded-[5px] border border-[#4a4a4a] mb-[12px]">
          <p className="text-xs">ACTIVE ALERTS</p>
          <p>
            <span className="text-[34px] font-light text-red-500">3</span>
            <span className="text-xs"> unresolved</span>
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:grid lg:grid-cols-[3fr_5fr] gap-[16px] mt-[24px]">
        {/* LEFT SIDE */}
        <div>
          {/* QUICK ACTIONS */}
          <div>
            <h2 className="text-sm font-medium">Quick Actions</h2>

            {/* Verify Residents */}
            <Link to={"/admin/residents"}>
              <div className="mt-[16px] bg-[#1b1b1b] border border-[#4a4a4a] p-[16px] rounded-md hover:bg-[#333] cursor-pointer">
                <img src={Resident} alt="" />
                <p className="font-bold py-[12px]">Verify Residents</p>
                <p className="text-xs">Approve or reject residents</p>
              </div>
            </Link>
            {/* Add Security */}
            <div
              onClick={() => toggleSecurityModal(true)}
              className="mt-[16px] bg-[#1b1b1b] border border-[#4a4a4a] p-[16px] rounded-md hover:bg-[#333] cursor-pointer"
            >
              <img src={Key} alt="" />
              <p className="font-bold py-[12px]">Add Security</p>
              <p className="text-xs">Register security personnel</p>
            </div>

            {/* Alerts Shortcut */}
            <Link to={"/admin/alerts"}>
              <div className="mt-[16px] relative bg-[#1b1b1b] border border-[#4a4a4a] p-[16px] rounded-md hover:bg-[#333] cursor-pointer">
                <span className="absolute top-[10px] right-[10px] bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
                  3
                </span>

                <p className="font-bold py-[12px]">Security Alerts</p>
                <p className="text-xs">View active incidents</p>
              </div>
            </Link>
          </div>

          {/* AI SUMMARY */}
          <div className="mt-[24px]">
            <h2 className="text-sm font-medium">AI Security Summary</h2>

            <div className="bg-[#111111] p-[16px] mt-[16px] rounded-md border border-[#4a4a4a]">
              <p className="text-xs text-[#aaa] leading-[18px]">
                • 3 incidents detected today <br />
                • 2 unauthorized access attempts (Gate B) <br />• 1 pending
                verification (Main Gate)
              </p>

              <button className="mt-[12px] text-xs text-blue-400">
                Open AI Assistant →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* ALERTS (PRIMARY FOCUS) */}
          <div>
            <h1 className="text-sm">Live Security Alerts</h1>

            <div className="bg-[#111111] p-[16px] mt-[16px] rounded-md border border-[#4a4a4a]">
              <div className="flex justify-between py-[8px] border-b border-[#2a2a2a]">
                <div>
                  <p className="text-sm font-medium">Unauthorized Access</p>
                  <p className="text-xs text-[#888]">Gate B • 2 mins ago</p>
                </div>
                <span className="text-xs text-red-500">Urgent</span>
              </div>

              <div className="flex justify-between py-[8px] border-b border-[#2a2a2a]">
                <div>
                  <p className="text-sm font-medium">Visitor Entry</p>
                  <p className="text-xs text-[#888]">Main Gate • 10 mins ago</p>
                </div>
                <span className="text-xs text-yellow-400">Pending</span>
              </div>

              <div className="flex justify-between py-[8px]">
                <div>
                  <p className="text-sm font-medium">Patrol Completed</p>
                  <p className="text-xs text-[#888]">Zone A • 1 hr ago</p>
                </div>
                <span className="text-xs text-green-400">Resolved</span>
              </div>

              <button className="mt-[12px] text-xs text-blue-400">
                View all alerts →
              </button>
            </div>
          </div>

          {/* ACTIVITY (SECONDARY) */}
          <div className="mt-[24px]">
            <h1 className="text-sm">Recent Resident Activity</h1>

            <div className="bg-[#111111] p-[16px] mt-[16px] rounded-md border border-[#4a4a4a]">
              <p className="text-center font-bold">No Recent Activity</p>
              <p className="text-center text-xs">
                You will see recent activity here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
