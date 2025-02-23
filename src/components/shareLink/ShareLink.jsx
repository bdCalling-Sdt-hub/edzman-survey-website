import { Card } from 'antd';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

function ShareLink() {
  const socialLinks = {
    facebook:
      'https://www.facebook.com/sharer/sharer.php?u=https://example.com',
    linkedin:
      'https://www.linkedin.com/sharing/share-offsite/?url=https://example.com',
    twitter:
      'https://twitter.com/intent/tweet?url=https://example.com&text=Check%20this%20out!',
    whatsapp:
      'https://api.whatsapp.com/send?text=Check%20this%20out!%20https://example.com',
    telegram:
      'https://t.me/share/url?url=https://example.com&text=Check%20this%20out!',
    instagram: 'https://www.instagram.com/',
  };

  return (
    <div className="max-w-screen-2xl mt-12 mx-auto px-4">
      {/* Quote Section */}
      <Card>
        <h1 className="text-[#1D3557] text-center italic font-semibold text-md md:text-2xl">
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </h1>
      </Card>

      {/* Share Section */}
      <div className="max-w-screen-md mt-12 mx-auto flex items-center justify-center flex-col text-center">
        <h1 className="text-[#1D3557] text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
          Share Your Insights and Inspire Change
        </h1>
        <div className="w-full h-1 rounded-full bg-[#00b0f2] my-6"></div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4267B2] hover:scale-110 transition-transform duration-300"
            aria-label="Share on Facebook"
          >
            <FaFacebook size={40} />
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:scale-110 transition-transform duration-300"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DA1F2] hover:scale-110 transition-transform duration-300"
            aria-label="Share on Twitter"
          >
            <FaTwitter size={40} />
          </Link>
          <Link
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:scale-110 transition-transform duration-300"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp size={40} />
          </Link>
          <Link
            href={socialLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0088CC] hover:scale-110 transition-transform duration-300"
            aria-label="Share on Telegram"
          >
            <FaTelegram size={40} />
          </Link>
          <Link
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E1306C] hover:scale-110 transition-transform duration-300"
            aria-label="Share on Instagram"
          >
            <FaInstagram size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShareLink;
