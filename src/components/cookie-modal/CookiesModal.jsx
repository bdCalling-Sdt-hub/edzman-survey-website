"use client";
import { useState, useEffect } from "react";

export default function CookieModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Check for the cookieConsent cookie
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    if (!consent) {
      setIsModalVisible(true);
    }
  }, []);

  const saveConsent = () => {
    const browserInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

    document.cookie = `cookieConsent=true; path=/; max-age=31536000; Secure; SameSite=Strict`;
    document.cookie = `browserInfo=${encodeURIComponent(
      JSON.stringify(browserInfo)
    )}; path=/; max-age=31536000; Secure; SameSite=Strict`;

    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
        <div className="fixed bottom-0 z-[999] left-0 w-full bg-gray-100 border-t border-gray-300 p-4">
          <div className="md:px-12 mx-auto md:flex-row flex-col justify-between text-center flex">
            <p className="text-sm md:text-base text-start pr-12 text-gray-700">
              By clicking "Accept Cookies", you agree to the storing of cookies
              on your device to echance site navigation, analyze site usage, and
              assist in our marketing efforts.
            </p>
            <div className="flex items-center  justify-end gap-4">
              <button
                onClick={() => setIsModalVisible(false)}
                className="mt-4 text-sm text-nowrap md:px-4 md:py-2 p-2 bg-[#00B0F1] text-white rounded hover:bg-[#00B0F1]/90"
              >
                Reject All
              </button>
              <button
                onClick={saveConsent}
                className="mt-4 md:px-4 md:py-2 p-2 text-nowrap text-sm bg-[#00B0F1] text-white rounded hover:bg-[#00B0F1]/90"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
