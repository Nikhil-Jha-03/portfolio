import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-300 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4 poppins-medium">
        <div className="flex space-x-6">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition duration-300">
            <FaDiscord />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-500">Designed & Built by Nikhil Jha</p>

        <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
