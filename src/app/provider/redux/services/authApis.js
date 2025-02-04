import baseApis from "../query/baseApis";

export const authApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    postLoginInfo: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    patchNewPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
    forgetEmailPost: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: data,
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-reset-otp",
        method: "POST",
        body: data,
      }),
    }),
    verifyCode: builder.mutation({
      query: ({data}) => ({
        url: "/user/verify-code",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/resend-reset-code",
        method: "POST",
        body: data,
      }),
    }),
    resgiterPostUser: builder.mutation({
      query: ({ data }) => ({
        url: "/user/register-user",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  usePostLoginInfoMutation,
  usePatchNewPasswordMutation,
  useForgetEmailPostMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useResendOtpMutation,
  useResgiterPostUserMutation,
  useVerifyCodeMutation,
} = authApis;
