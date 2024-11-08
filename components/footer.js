import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 z-50 text-white py-4 w-full fixed bottom-0 left-0  flex items-center justify-between text-center px-4 sm:px-8 shadow-lg">
      {/* Social Media Icons */}
      <div className="flex gap-4 text-gray-400 justify-center sm:gap-6">
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <FaFacebook className="text-xl hover:text-pink-500 transition duration-200" />
        </Link>
        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter className="text-xl hover:text-pink-500 transition duration-200" />
        </Link>
        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
          <FaInstagram className="text-xl hover:text-pink-500 transition duration-200" />
        </Link>
        <Link href="https://github.com" target="_blank" aria-label="Github">
          <FaGithub className="text-xl hover:text-pink-500 transition duration-200" />
        </Link>
      </div>
      
      
      <p className="text-xs text-gray-500 ">
        © {new Date().getFullYear()} BitLinks. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
