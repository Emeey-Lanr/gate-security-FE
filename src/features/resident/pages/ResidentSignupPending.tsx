import Button from "../../../components/Button";
import ResidentLogo from "../components/ResidentLogo";

const ResidentSignupPending = () => {
  return (
    <div className="w-[100%] h-full fixed top-0 mx-auto grid justify-center items-center">
      <div className="w-[90%] mx-auto lg:w-[500px]">
        <div className="w-[64px] mx-auto">
          <ResidentLogo />
        </div>

        <p className="text-sm mt-[16px] leading-2  text-center lg:text-lg">
          Form responses received successfully, registration still pending until
          approved by admin.
        </p>
      </div>

      <div className="w-[90%] mx-auto lg:w-[500px]">
        <Button btnName="Login"/>
      </div>
    </div>
  );
};

export default ResidentSignupPending;
