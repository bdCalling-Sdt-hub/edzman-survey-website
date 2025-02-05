"use client";
import { use, useEffect, useState } from "react";
import { Input, Button } from "antd";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "antd/dist/reset.css";
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "@/app/provider/redux/services/authApis";
import { toast } from "sonner";

const VerifyEmailOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [resentOtp, { isLoading: isLoadingResend }] = useResendOtpMutation();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      toast.error("Email not found. Please enter your email again.");
      router.push("/login/email-confirm");
    } else {
      setEmail(email);
    }
  }, []);
  const router = useRouter();
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
      toast.error("Please enter a valid 5-digit OTP.");
      return;
    }

    const data = {
      email: email,
      resetCode: otpNumberConvert,
    };

    try {
      const response = await verifyOtp(data).unwrap();
      console.log("OTP Verified:", response);
      toast.success("OTP Verified. Redirecting to reset password page.");
      setTimeout(() => {
        router.push("/login/email-confirm/verify-email-otp/reset-password");
      }, 1500);
    } catch (err) {
      console.error(err);
      message.error("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    const email = localStorage.getItem("email");
    console.log(email);

    if (!email) {
      toast.error("No email found. Please try again.");
      return;
    }
    const data = { email };
    try {
      const response = await resentOtp(data).unwrap();

      if (response?.success) {
        toast.success("OTP has been resent successfully. Check your email.");
      } else {
        const errorMessage =
          response?.message || "Failed to resend OTP. Please try again.";
        toast.error(errorMessage);
      }
    } catch (err) {
      console.error("Failed to resend OTP:", err);
      const errorMessage =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again later.";

      toast.error(errorMessage);
    }
  };
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="bg-white p-6 flex flex-col md:gap-12 py-12 rounded-xl max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-6">
          Check your email
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We sent a reset link to <strong>{email}</strong>. Enter the 5-digit
          code mentioned in the email.
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
            onClick={() => handleResendOtp()}
            className="text-[#00b0f2] hover:underline cursor-pointer"
          >
            {isLoadingResend ? "Resending OTP..." : "Resend"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailOtp;
