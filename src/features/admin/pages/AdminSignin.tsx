import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AdminBackgroundImg from "../components/AdminBackgroundImg";
import EyesOn from "../../../assets/eyes-on.svg";
import EyesOff from "../../../assets/eyes-off.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoadingStore } from "../../../store/useLoadingStore";
import AdminLogo from "../components/AdminLogo";

const AdminSignin = () => {
  const [inputType, setInputType] = useState<boolean>(false);
  const navigate = useNavigate();
  const setLoading = useLoadingStore((state) => state.setLoading);

  const schema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(
        6,
        "Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character",
      )
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character",
      ),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setLoading({ status: true });
    console.log(data);
  };

  return (
    <>
      <div className="relative overflow-hidden w-[90%] h-[100vh] mx-auto py-[16px] lg:grid lg:w-[80%] lg:grid-cols-2 gap-[20px] lg:items-center ">
        <div className="absolute w-full h-[100%] lg:left-[300px]">
          <AdminBackgroundImg />
        </div>

        {/* HEADER */}
        <header className="relative z-10">
          <div className="w-[48px] lg:w-[200px]">
            <AdminLogo />
          </div>

          <h1 className="text-[24px] font-medium pb-[2px] lg:text-[42px]">
            ADMIN SIGNIN
          </h1>
          <p className="text-sm font-light lg:text-[16px]">
            Sign in to your admin account.
          </p>
        </header>

{/* form */}
        <form
          className="relative mt-[14px] lg:w-[80%] lg:mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-[8px]">
            <label htmlFor="" className="text-sm  block pb-[4px]">
              Admin Email
            </label>
            <Input value={""} type="text" register={register} name="email" />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-[8px] relative">
            <label htmlFor="" className="text-sm  block pb-[4px]">
              Admin Password
            </label>
            <Input  value={""}
              type={inputType ? "text" : "password"}
              register={register}
              name="password"
            />
            <button
              className="absolute right-[16px] top-[32px]"
              onClick={() => setInputType(!inputType)}
            >
              {inputType ? (
                <img src={EyesOn} alt="Hide Password" />
              ) : (
                <img src={EyesOff} alt="Show Password" />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-[16px]">
            <Button btnName="Submit" />
          </div>

          <p className="text-sm font-light text-center mt-[16px]">
            Don't have an account ?{" "}
            <button
              className="font-bold"
              onClick={() => navigate("/admin/signup")}
            >
              Signup
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default AdminSignin;
