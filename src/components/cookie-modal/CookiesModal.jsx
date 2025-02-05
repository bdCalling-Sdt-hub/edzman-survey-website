"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie for easier cookie management

export default function CookieModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsModalVisible(true);
    }
  }, []);
  // TODO: Implement the following functions
  const saveConsent = () => {
    // Store browser information in cookies
    const browserInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

    // Set cookie consent and browser info
    Cookies.set("cookieConsent", "true", { expires: 365 }); // Expires in 1 year
    Cookies.set("browserInfo", JSON.stringify(browserInfo), { expires: 365 });

    // Collect and store navigation data
    trackNavigation();

    // Collect and store form submissions
    trackFormSubmissions();

    setIsModalVisible(false);
  };

  const rejectConsent = () => {
    setIsModalVisible(false);
  };

  const trackNavigation = () => {
    // Store the current URL in cookies
    Cookies.set("lastVisitedPage", window.location.href, { expires: 365 });

    // Track future navigation
    window.addEventListener("beforeunload", () => {
      Cookies.set("lastVisitedPage", window.location.href, { expires: 365 });
    });
  };

  const trackFormSubmissions = () => {
    // Track all form submissions on the page
    document.querySelectorAll("form").forEach((form) => {
      form.addEventListener("submit", (event) => {
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        // Store form data in cookies
        Cookies.set(
          `formSubmission_${form.id}`,
          JSON.stringify(formDataObject),
          {
            expires: 365,
          }
        );
      });
    });
  };

  return (
    <>
      {isModalVisible && (
        <div className="fixed bottom-0 z-[999] left-0 w-full bg-gray-100 border-t border-gray-300 p-4">
          <div className="md:px-12 mx-auto md:flex-row flex-col justify-between text-center flex">
            <p className="text-sm md:text-base text-start pr-12 text-gray-700">
              By clicking "Accept Cookies", you agree to the storing of cookies
              on your device to enhance site navigation, analyze site usage, and
              assist in our marketing efforts.
            </p>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={rejectConsent}
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
