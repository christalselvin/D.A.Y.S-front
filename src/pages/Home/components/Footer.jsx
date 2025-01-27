import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const YogaFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Logo and Brand Name */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 sm:mb-0">
            <span className="text-green-500">D.A.Y.S</span> AN Yoga INSTITUTE

          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <a href="/" className="hover:text-green-500">Home</a>
            <a href="/article" className="hover:text-green-500">Article</a>
            <a href="contact" className="hover:text-green-500">Contact</a>
            <a href="about" className="hover:text-green-500">About</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100071712365099"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/anyogainstitute?igsh=MXRmaWh0dmtyNGZsMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          <a
            href="https://x.com/ashishu9899?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaTwitter className="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/918127227284"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          <a
            href="https://youtube.com/@anyogainstitute?si=lowYzoFr96ofjBE0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 text-center text-sm">
        <p>
          &copy; 2025 D.A.Y.S AN YOGA All rights reserved.{' '}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-green-700 hover:underline"
          >
            CHRISTAL
          </a>
        </p>
      </div>
    </footer>
  );
};

export default YogaFooter;
