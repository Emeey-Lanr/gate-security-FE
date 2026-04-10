import Button from "../../../components/Button"
import Input from "../../../components/Input"

import EyesOn from "../../../assets/eyes-on.svg"
import EyesOff from "../../../assets/eyes-off.svg"
import { useForm,} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router"
import { useLoadingStore } from "../../../store/useLoadingStore"
import ResidentLogo from "../components/ResidentLogo"
import ResidentBackgroundImg from "../components/ResidentBackgroundImg";
import ErrorToast from "../../../components/ErrorToast"
import Select from "../../../components/Select";
const ResidentSignup = () => {
  const [inputType, setInputType] = useState<boolean>(false)
 const navigate = useNavigate() 
 const setLoading = useLoadingStore((state)=>state.setLoading)

//  Options
const [estateAdress, _] = useState([{label:`praise hill`, value:"wj", description:"Arepo"}, {label:"Journalist", value:"wj", description:"Arepo"}])
 
 const schema = z.object({
  firstName: z.string().min(2, "First name is required").max(50, "Name must be less than 100 characters"),
    surname: z.string().min(2, "Last name is required").max(50, "Name must be less than 100 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z.number().min(10, "Invalid Phone numebr").max(11, "Invalid Phone Number"),
  estate: z.string().min(2, "Estate address is required"),
  houseId: z.string().min(2, "House Id is required"),
  password:z.string().min(6, "Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character").regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character")
 })

 type FormData = z.infer<typeof schema>
 const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema)
 });


 const onSubmit = (data: FormData) => {
  setLoading(true)
  console.log(data)
 }
 
  return (
    <>
  

   <div className="relative overflow-hidden w-[90%] h-[100vh] mx-auto py-[16px] lg:grid lg:w-[80%] lg:grid-cols-2 gap-[20px] lg:items-center ">
   <div className="absolute lg:w-[50%] h-[100%] lg:left-[650px]"><ResidentBackgroundImg /></div>   
      <header className="relative z-10">

 <div className="w-[48px] lg:w-[100px]">
  <ResidentLogo/>
 </div>

     <h1 className="text-[24px] font-medium pb-[2px] lg:text-[42px]">RESIDENT SIGNUP</h1>
     <p className="text-sm font-light lg:text-[16px]">Create your admin account to get started.</p>
      </header>

<form className="relative mt-[14px] lg:w-[100%]  lg:mx-auto" onSubmit={handleSubmit(onSubmit)}>
  
  <div className="w-full  lg:grid lg:grid-cols-2 lg:gap-2">
      <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >First Name</label>
    <Input value={watch("firstName") || ""}  type="text" register={register} name="firstName"/>
    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName?.message}</p>}
    </div>
  <div className="mb-[8px]">
    <label  className="text-sm  block pb-[4px]" >Surname</label>
    <Input value={watch("surname") || ""}  type="text" register={register} name="lastName"/>
    {errors.surname && <p className="text-red-500 text-xs">{errors.surname.message}</p>}
    </div>

  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Email</label>
    <Input value={watch("email") || ""}  type="email" register={register} name="email"/>
    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
    </div>

  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Phone Number</label>
    <Input value={watch("phoneNumber") || ""} type="text" register={register} name="phoneNumber"/>
    {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>}
    </div>

  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Estate</label>
    <Select name="estate" register={register} options={estateAdress}/>
    {errors.estate && <p className="text-red-500 text-xs">{errors.estate.message}</p>}
    </div>

  <div className="mb-[8px] relative">
    <label htmlFor="" className="text-sm  block pb-[4px]" >House Id</label>
    <Input value={watch("houseId") || ""}  type="text" register={register} name="houseId"/>
    {errors.houseId && <p className="text-red-500 text-xs">{errors.houseId.message}</p>}
    </div>

    <div className="mb-[8px] relative">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Password</label>
    <Input value={watch("password") || ""}  type={inputType ? "text" : "password"} register={register} name="password"/>
     <button className="absolute right-[16px] top-[32px]" onClick={()=>setInputType(!inputType)}>{inputType ?  <img src={EyesOn} alt="Hide Password"/> : <img src={EyesOff} alt="Show Password"/> }</button>
    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
    </div>

  </div>
 

   <div className="mt-[16px]">
    <Button  btnName="Submit"/>
   </div>
    
    <p className="text-sm font-light text-center mt-[16px]">Got an account already ?  <button className="font-bold" onClick={()=>navigate("/resident/signin")}>Signin</button></p>
     </form>
    
    </div>
<ErrorToast/>
  </>
  )
}

export default ResidentSignup