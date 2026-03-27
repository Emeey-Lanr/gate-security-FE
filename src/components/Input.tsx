

const Input = ({onChange}: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <input onChange={onChange} type="text" className='h-[44px] w-full rounded-[5px] text-white px-[5px] border border-[#7C7C7C] outline-none focus:ring-2 focus:ring-[#3c3d3d73]'/>
  )
}

export default Input