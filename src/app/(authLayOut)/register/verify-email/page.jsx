// 'use client';
// import { useEffect, useState } from 'react';
// import { Input, Button } from 'antd';
// import { useRouter } from 'next/navigation';
// import 'antd/dist/reset.css';
// import {
//   useResendOtpMutation,
//   useVerifyCodeMutation,
// } from '@/app/provider/redux/services/authApis';
// import { toast } from 'sonner';

// const VerifyEmail = () => {
//   const [otp, setOtp] = useState(['', '', '', '', '']);
//   const [verifycode, { isLoading }] = useVerifyCodeMutation();
//   const [verifyEmail, setEmail] = useState('');
//   const router = useRouter();
//   const [resentOtp, { isLoading: isLoadingResend }] = useResendOtpMutation();
//   useEffect(() => {
//     const email = localStorage.getItem('register-email');
//     if (!email) {
//       toast.error('Email not found! Please enter your email again.');
//       router.push('/register');
//     } else {
//       setEmail(email);
//     }
//   }, [router]);

//   const handleChange = (value, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = value.slice(0, 1);
//     setOtp(newOtp);

//     if (value && index < 4) {
//       document.getElementById(`otp-input-${index + 1}`).focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && index > 0 && !otp[index]) {
//       document.getElementById(`otp-input-${index - 1}`).focus();
//     }
//   };

//   const isOtpComplete = otp.every((digit) => digit !== '');

//   const handleVerify = async () => {
//     const otpString = otp.join('');
//     const otpNumberConvert = Number(otpString);

//     if (!otpString || otpString.length !== 5) {
//       toast.error('Please enter a valid 5-digit OTP.');
//       return;
//     }

//     const data = {
//       email: verifyEmail,
//       verifyCode: otpNumberConvert,
//     };

//     try {
//        await verifycode({ data }).unwrap();
//       toast.success('OTP Verified! Redirecting to login page.');
//       window.location.href = '/';
//     } catch (err) {
//       console.error(err);
//       toast.error('Invalid OTP. Please try again.');
//     }
//   };

//   const handleResendOtp = async () => {
//     const email = localStorage.getItem('email');

//     if (!email) {
//       toast.error('No email found. Please try again.');
//       return;
//     }
//     const data = { email };
//     try {
//       const response = await resentOtp(data).unwrap();

//       if (response?.success) {
//         toast.success('OTP has been resent successfully. Check your email.');
//       } else {
//         const errorMessage =
//           response?.message || 'Failed to resend OTP. Please try again.';
//         toast.error(errorMessage);
//       }
//     } catch (err) {
//       console.error('Failed to resend OTP:', err);
//       const errorMessage =
//         err?.response?.data?.message ||
//         err?.message ||
//         'Something went wrong. Please try again later.';

//       toast.error(errorMessage);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen justify-center">
//       <div className="bg-white p-6 flex flex-col md:gap-12 py-12 rounded-xl max-w-md w-full">
//         <h2 className="text-center text-2xl font-bold mb-6">
//           Check your email
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           We sent a reset link to <strong>{verifyEmail}</strong>. Enter the
//           5-digit code mentioned in the email.
//         </p>
//         <div className="flex justify-center space-x-2 mb-6">
//           {otp.map((digit, index) => (
//             <Input
//               key={index}
//               id={`otp-input-${index}`}
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, index)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               className="w-12 h-12 text-center text-lg font-bold rounded-md shadow-sm border border-gray-300 focus:border-[#21B6F2] focus:ring focus:ring-blue-300"
//               maxLength={1}
//             />
//           ))}
//         </div>
//         <Button
//           type="primary"
//           className="w-full py-2 rounded-sm text-white bg-[#00b0f2] hover:bg-[#00b0f2]/70"
//           onClick={handleVerify}
//           disabled={!isOtpComplete || isLoading}
//         >
//           {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
//         </Button>
//         <p className="text-center text-gray-600 mt-4">
//           You have not received the email?{' '}
//           <a
//             className="text-[#00b0f2] hover:underline cursor-pointer"
//             onClick={() => handleResendOtp()}
//           >
//             {isLoadingResend ? 'Resending OTP...' : 'Resend'}
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;
'use client';
import { useEffect, useState } from 'react';
import { Input, Button, Flex, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import 'antd/dist/reset.css';
import {
  useResendOtpMutation,
  useVerifyCodeMutation,
} from '@/app/provider/redux/services/authApis';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

const { Text } = Typography;

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const [verifycode, { isLoading }] = useVerifyCodeMutation();
  const [verifyEmail, setEmail] = useState('');
  const router = useRouter();
  const [resentOtp, { isLoading: isLoadingResend }] = useResendOtpMutation();

  useEffect(() => {
    const email = localStorage.getItem('register-email');
    if (!email) {
      toast.error('Email not found! Please enter your email again.');
      router.push('/register');
    } else {
      setEmail(email);
    }
  }, [router]);

  const handleVerify = async () => {
    const otpNumberConvert = Number(otp);
    if (!otp || otp.length !== 5) {
      toast.error('Please enter a valid 5-digit OTP.');
      return;
    }

    const data = {
      email: verifyEmail,
      verifyCode: otpNumberConvert,
    };

    try {
      const response = await verifycode({ data }).unwrap();
      console.log(response);
      if (response?.success) {
        Cookies.remove('token');
        Cookies.set('token', response?.data?.accessToken);
        localStorage.setItem('accessToken', response?.data?.accessToken);
        toast.success('User registered successfully.');
        const accToken = localStorage.getItem('accessToken');
        const condition = accToken !== null;
        if (condition) {
          window.location.href = '/';
        }
      }
    } catch (err) {
      console.error(err);
      toast.error('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    const email = localStorage.getItem('register-email');

    if (!email) {
      toast.error('No email found. Please try again.');
      return;
    }
    const data = { email };
    try {
      const response = await resentOtp(data).unwrap();

      if (response?.success) {
        toast.success('OTP has been resent successfully. Check your email.');
      } else {
        const errorMessage =
          response?.message || 'Failed to resend OTP. Please try again.';
        toast.error(errorMessage);
      }
    } catch (err) {
      console.error('Failed to resend OTP:', err);
      const errorMessage =
        err?.data?.message || 'Something went wrong. Please try again later.';
      toast.error(errorMessage);
    }
  };

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      <div className="bg-[#fff] max-w-[400px] w-full p-6 rounded-lg shadow-md">
        <Text
          strong
          style={{
            fontSize: '24px',
            textAlign: 'center',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Check your email
        </Text>
        <p className="text-base !text-center mb-6 text-[#666]">
          We sent a reset link to <strong>{verifyEmail}</strong>. Enter the
          5-digit code mentioned in the email.
        </p>

        <div className="flex items-center justify-center">
          <Input.OTP
            length={5}
            value={otp}
            onChange={(value) => setOtp(value)}
            style={{ marginBottom: '24px' }}
            inputStyle={{ width: '48px', height: '48px', fontSize: '18px' }}
          />
        </div>

        <Button
          type="primary"
          block
          onClick={handleVerify}
          disabled={otp.length !== 5 || isLoading}
          style={{ marginBottom: '16px' }}
        >
          {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
        </Button>

        <Text style={{ textAlign: 'center', color: '#666' }}>
          You have not received the email?{' '}
          <Button
            type="link"
            onClick={handleResendOtp}
            disabled={isLoadingResend}
            style={{ padding: 0 }}
          >
            {isLoadingResend ? 'Resending OTP...' : 'Resend'}
          </Button>
        </Text>
      </div>
    </Flex>
  );
};

export default VerifyEmail;
