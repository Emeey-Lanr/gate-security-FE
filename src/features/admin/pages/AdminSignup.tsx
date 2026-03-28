import adminBold from "../../../assets/admin-bold.svg"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import AdminBackgroundImg from "../components/AdminBackgroundImg"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const AdminSignup = () => {
 
 const schema = z.object({
  name: z.string().min(2, "Name is required").max(50, "Name must be less than 100 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  estateName: z.string().min(2, "Estate name is required"),
  estateAddress: z.string().min(2, "Estate address is required"),
  password:z.string().min(6, "Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character").regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character")
 })

 type FormData = z.infer<typeof schema>
 const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema)
 });


 const onSubmit = (data: FormData) => {
  console.log(data)
 }
  return (
  <>
  

   <div className="relative w-[90%] h-[100vh] mx-auto py-[16px] lg:grid lg:grid-cols-2 gap-[20px] lg:items-center ">
   <div className="absolute w-full h-[100%] lg:left-[-380px]"><AdminBackgroundImg /></div>   
      <header className="relative z-10">

<img src={adminBold} alt="Admin" className="lg:w-[48px]"/>
     <h1 className="text-[24px] font-medium pb-[2px] lg:text-[42px]"><span className="text-[16px] lg:[34px]">ADMIN</span> SIGNUP</h1>
     <p className="text-sm font-light lg:text-[16px]">Create your admin account to get started.</p>
      </header>

<form className="relative z-10 mt-[14px] lg:w-[80%] lg:mx-auto" onSubmit={handleSubmit(onSubmit)}>
  
  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Admin Name</label>
    <Input type="text" register={register} name="name"/>
    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
    </div>
  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Admin Email</label>
    <Input type="text" register={register} name="email"/>
    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
    </div>

  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Estate Name</label>
    <Input type="text" register={register} name="estateName"/>
    {errors.estateName && <p className="text-red-500 text-xs">{errors.estateName.message}</p>}
    </div>

  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Estate Address</label>
    <Input type="text" register={register} name="estateAddress"/>
    {errors.estateAddress && <p className="text-red-500 text-xs">{errors.estateAddress.message}</p>}
    </div>

  <div className="mb-[8px]">
    <label htmlFor="" className="text-sm  block pb-[4px]" >Admin Password</label>
    <Input type="password" register={register} name="password"/>
    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
    </div>

   <div className="mt-[16px]">
    <Button  btnName="Submit"/>
   </div>
   
     </form>
    </div>
  </>
   
     
   
    
  )
}

export default AdminSignup