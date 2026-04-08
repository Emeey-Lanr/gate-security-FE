const Input = ({
  register,
  name,
  type,
  value
}: {
  register: any;
  name: string;
  type: string;
  value:string | number
}) => {
  return (
    <input
      {...register(name)}
      type={type}
      value={value}
      className="text-sm bg-[#1B1B1B] h-[40px] w-full rounded-[5px] text-white px-[5px] border border-[#7C7C7C] outline-none focus:ring-2 focus:ring-[#3c3d3d73] lg:h-[44px]"
    />
  );
};

export default Input;
