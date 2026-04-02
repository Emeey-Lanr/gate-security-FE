const AdminResidentDesktop = () => {
  return (
    <div className="hidden md:block overflow-x-auto">
        <table className="min-w-[1000px] table-fixed">
            <thead className="">
                <tr>
           <th className="text-sm font-normal text-left w-[150px] p-[8px]">NAME</th>
                <th className="text-sm font-normal text-left w-[200px] p-[8px]">EMAIL</th>
                <th className="text-sm font-normal text-left w-[150px] p-[8px]">PHONE</th>
                <th className="text-sm font-normal text-left p-[8px]">RESIDENT ID</th>
                <th className="text-sm font-normal text-left w-[250px] p-[8px]">HOME ADDRESS</th>
                <th className="text-sm font-normal text-left w-[100px] p-[8px]">STATUS</th>
                  <th className="text-sm font-normal text-left w-[100px] p-[8px]">ACTIONS</th>
                </tr>
     
            </thead> 
            <tbody>
                <tr  onClick={()=>alert(20)} className="  bg-[#fdfdfd] p-[8px] h-[48px] box-border  border border-[#303030] shadow-sm rounded-md ">
                    <td className="p-[8px]"><h1 className="text-[#333] text-sm truncate ">Oyelowo Emmanuel</h1></td>
                    <td className="p-[8px]"><p className="text-[#333] text-sm truncate">oyelowo.emmanuel@example.com</p></td>
                    <td className="p-[8px]"><p className="text-[#333] text-sm truncate">08126115740</p></td>
                    <td className=" p-[8px] "><p className="text-[#333] text-sm truncate">RES-001 030</p></td>
                    <td className="p-[8px]"><p className="text-[#333] text-sm truncate">123 Main Street, City, State</p></td>
                    <td className="p-[8px] "><p className="text-xs flex items-center gap-1 text-[#333]"><span className="block w-[8px] h-[8px] rounded-full bg-green-500"/> ACTIVE </p></td>
                    <td className="flex items-center gap-2 p-[8px] ">
                        <button onClick={(e)=>e.stopPropagation} className="border border-blue-500 bg-blue-100 text-blue-500 text-sm  py-1 px-3 rounded-sm hover:bg-blue-600 hover:text-[#fff]">Approve</button>
                        <button onClick={(e)=>e.stopPropagation} className="border border-red-500 bg-red-100 text-red-500 text-sm  py-1 px-3 rounded-sm hover:bg-red-600 hover:text-[#fff] ml-2">Delete</button>    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AdminResidentDesktop