'use client'
import { useState } from "react";
import { Input, Button } from "antd";
import { useRouter } from "next/navigation"; // For navigation in Next.js
import "antd/dist/reset.css";
import Swal from "sweetalert2";

const OtpForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const router = useRouter(); // Initialize Next.js router

  // Update OTP array on input change
  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Allow only one character
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 4) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Handle backspace and navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Check if all OTP fields are filled
  const isOtpComplete = otp.every((digit) => digit !== "");

  // Handle verification and navigation
  const handleVerify = () => {
    if (isOtpComplete) {
      Swal.fire({
        title: "OTP Verified!",
        text: `Your OTP: ${otp.join("")}`,
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#00b0f2",
      }).then(() => {
        router.push("/find-why/answer-Questions");
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please complete the OTP before verifying.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#00b0f2",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-6 flex flex-col md:gap-12 py-12 rounded-xl max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-6">Check your email</h2>
        <p className="text-center text-gray-600 mb-6">
          We sent a reset link to <strong>contact@dscode.com</strong>. Enter the 5-digit code mentioned in the email.
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
          disabled={!isOtpComplete}
        >
          Verify
        </Button>
        <p className="text-center text-gray-600 mt-4">
          You have not received the email?{" "}
          <a className="text-[#00b0f2] hover:underline cursor-pointer">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default OtpForm;
