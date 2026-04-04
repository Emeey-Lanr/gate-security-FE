import Menu from "../../../assets/menu.svg"
import Approve from "../../../assets/approve.svg"
import Delete from "../../../assets/delete.svg"
import DeleteModal from "../../../components/DeleteModal"

const AdminResidentMobile = () => {
    
  return (
    <>
      <div className="flex justify-between items-start bg-[#fdfdfd] p-[8px] box-border rounded-[5px] border border-[#303030] shadow-sm md:hidden">
             <div className="flex gap-2 items-start">
                 <div className="w-[32px] h-[32px] bg-[#000000] rounded-md flex items-center justify-center"><p className="text-black font-bold">E</p></div>
                 <div className="lg:flex">
                  <h1 className="text-sm w-[150px] truncate text-[#333] font-bold">Oyelowo Emmanuel</h1>
                        <p className="text-xs text-[#666] w-[100px] truncate">oyelowo.emmanuel@example.com</p>
                  <p className="text-xs text-[#666]">08126115740</p>
            
                 </div>
             </div>

             <div className="relative flex flex-col justify-between h-[48px] items-end ">
                 <div className="flex items-center gap-1"><div className="w-[8px] h-[8px] rounded-full bg-green-500"></div><p className="text-xs text-[#666]">ACTIVE</p></div>
               <button className="text-xs rounded-sm   flex items-center justify-center">
                <img src={Menu} className="" alt="Menu"/>
                 </button>
              
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg ">
                     <button className="flex w-full justify-end text-sm text-gray-700 hover:bg-gray-100">
                         <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.40399 7.40409C7.49775 7.31036 7.6249 7.2577 7.75749 7.2577C7.89007 7.2577 8.01722 7.31036 8.11099 7.40409L12 11.2931L15.89 7.40309C15.9362 7.35541 15.9914 7.3174 16.0524 7.29128C16.1135 7.26517 16.1791 7.25147 16.2455 7.25099C16.3119 7.25051 16.3777 7.26325 16.4391 7.28848C16.5005 7.31371 16.5563 7.35091 16.6032 7.39792C16.6501 7.44493 16.6871 7.50081 16.7122 7.56229C16.7372 7.62377 16.7498 7.68963 16.7491 7.75601C16.7484 7.8224 16.7345 7.88799 16.7083 7.94895C16.682 8.00992 16.6438 8.06503 16.596 8.11109L12.707 12.0001L16.597 15.8901C16.6447 15.9363 16.6827 15.9915 16.7088 16.0525C16.7349 16.1136 16.7486 16.1792 16.7491 16.2456C16.7496 16.312 16.7368 16.3778 16.7116 16.4392C16.6864 16.5006 16.6492 16.5564 16.6022 16.6033C16.5551 16.6502 16.4993 16.6872 16.4378 16.7123C16.3763 16.7373 16.3105 16.7499 16.2441 16.7492C16.1777 16.7485 16.1121 16.7346 16.0511 16.7084C15.9902 16.6821 15.935 16.6439 15.889 16.5961L12 12.7071L8.10999 16.5971C8.06379 16.6448 8.00857 16.6828 7.94753 16.7089C7.88649 16.735 7.82087 16.7487 7.75448 16.7492C7.68809 16.7497 7.62227 16.7369 7.56086 16.7117C7.49945 16.6865 7.44368 16.6493 7.3968 16.6023C7.34992 16.5552 7.31288 16.4994 7.28782 16.4379C7.26277 16.3764 7.25021 16.3106 7.25088 16.2442C7.25155 16.1778 7.26543 16.1122 7.29172 16.0512C7.31801 15.9903 7.35617 15.9351 7.40399 15.8891L11.293 12.0001L7.40299 8.11009C7.30956 8.01637 7.25709 7.88943 7.25709 7.75709C7.25709 7.62475 7.31056 7.49781 7.40399 7.40409Z" fill="#000"/>
</svg>

                     </button>
                    <button className="flex border border-l-0 border-r-0 border-t-gray-200 gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                       <img src={Approve} alt="Approve"/> Approve</button>
                       <button className="flex gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                       <img src={Delete} alt="Delete"/> Delete</button>
                </div>
          </div>
</div>
<DeleteModal/>
    </>
  )
}

export default AdminResidentMobile