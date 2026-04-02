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

             <div className="">
                 <div className="flex items-center gap-1"><div className="w-[8px] h-[8px] rounded-full bg-green-500"></div><p className="text-xs text-[#666]">ACTIVE</p></div>
               <button className="text-xs rounded-sm mt-[8px] border text-[#666] border-[#a7a7a7] w-[60px] h-[28px] flex items-center justify-center">View</button>
             </div>
          </div>
    </>
  )
}

export default AdminResidentMobile