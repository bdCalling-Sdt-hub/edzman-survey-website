"use client";
import { useEffect, useState } from "react";
import { Input, Button, message } from "antd";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "antd/dist/reset.css";
import { useVerifyCodeMutation } from "@/app/provider/redux/services/authApis";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [verifycode, { isLoading }] = useVerifyCodeMutation();
  const [verifyEmail, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("register-email");
    if (!email) {
      Swal.fire({
        title: "Email not found!",
        text: "Please enter your email again.",
        icon: "error",
      });
      router.push("/register");
    } else {
      setEmail(email);
    }
  }, [router]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    if (value && index < 4) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleVerify = async () => {
    const otpString = otp.join("");
    const otpNumberConvert = Number(otpString);

    if (!otpString || otpString.length !== 5) {
      Swal.fire("Please enter a valid 5-digit OTP.");
      return;
    }

    const data = {
      email: verifyEmail,
      verifyCode: otpNumberConvert,
    };
    console.log(data);

    try {
      const response = await verifycode({ data }).unwrap();
      console.log("OTP Verified:", response);
      Swal.fire({
        title: "OTP Verified!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
      message.error("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    Swal.fire("OTP Resent!", "Check your email for the new OTP.", "success");
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="bg-white p-6 flex flex-col md:gap-12 py-12 rounded-xl max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-6">
          Check your email
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We sent a reset link to <strong>{verifyEmail}</strong>. Enter the
          5-digit code mentioned in the email.
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-input-${index}`}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-lg font-bold rounded-md shadow-sm border border-gray-300 focus:border-[#21B6F2] focus:ring focus:ring-blue-300"
              maxLength={1}
            />
          ))}
        </div>
        <Button
          type="primary"
          className="w-full py-2 rounded-sm text-white bg-[#00b0f2] hover:bg-[#00b0f2]/70"
          onClick={handleVerify}
          disabled={!isOtpComplete || isLoading}
        >
          {isLoading ? "Verifying OTP..." : "Verify OTP"}
        </Button>
        <p className="text-center text-gray-600 mt-4">
          You have not received the email?{" "}
          <a
            className="text-[#00b0f2] hover:underline cursor-pointer"
            onClick={handleResendOtp}
          >
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
