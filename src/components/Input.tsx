const Input = ({
  register,
  name,
  type,
}: {
  register: any;
  name: string;
  type: string;
}) => {
  return (
    <input
      {...register(name)}
      type={type}
      className="text-sm bg-[#1B1B1B] h-[40px] w-full rounded-[5px] text-white px-[5px] border border-[#7C7C7C] outline-none focus:ring-2 focus:ring-[#3c3d3d73] lg:h-[44px]"
    />
  );
};

export default Input;
