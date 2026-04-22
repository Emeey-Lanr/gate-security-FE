type Option = {
  label: string;
  value: string | number;
  description:string
};

const Select = ({
  register,
  name,
  options,
  defaultValue,
}: {
  register: any;
  name: string;
  options: Option[];
  defaultValue?: string | number;
}) => {
  return (
    <select
      {...register(name)}
      defaultValue={defaultValue}
      className="text-sm bg-[#1B1B1B] h-[40px]  w-full rounded-[5px] accent-gray-800 text-white px-[5px] border border-[#7C7C7C] outline-none focus:ring-2 focus:ring-[#3c3d3d73] lg:h-[44px]"
    >
      <option value="" disabled>
        Select an option
      </option>

      {options.map((option, index) => (
        <option key={index} className="" value={option.value}>
          {option.label} 
          {option.description != "" && <span className="text-xs">{option.description}</span>}
        </option>
      ))}
    </select>
  );
};

export default Select