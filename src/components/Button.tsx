
const Button = ({btnName}: {btnName: string})=> {

  return (
     <button type="submit" className="h-[40px] text-black w-full font-bold bg-white rounded-[5px] shadow-sm hover:translate-y-1 transition-transform duration-200 hover:outline-2 hover:outline-[#31313173] lg:h-[44px]" >{btnName}</button>
  )
}

export default Button