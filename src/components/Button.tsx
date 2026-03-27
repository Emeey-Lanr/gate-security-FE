
const Button = ({btnName, clickAction}: {btnName: string, clickAction: () => void}) => {

  return (
     <button className="h-[44px] w-full font-bold bg-white rounded-[5px] shadow-sm hover:translate-y-1 transition-transform duration-200" onClick={clickAction}>{btnName}</button>
  )
}

export default Button