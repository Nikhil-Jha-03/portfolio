import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function SocialLinks() {
  const socialMedia = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/nikhil-jha-a95792248/", color: "#0077B5" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/nikhil.jha_03", color: "#E4405F" },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Nikhil-Jha-03", color: "#171515" },
    { name: "Discord", icon: <FaDiscord />, url: "https://discord.com/users/nikhil_003", color: "#5865F2" },
  ];

  return (
    <div className="flex gap-6">
      {socialMedia.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-3 rounded-full bg-white transition duration-300 hover:scale-110 shadow-lg"
        >
          <span
            className="text-2xl transition-colors duration-300"
            style={{ color: item.color }}
          >
            {item.icon}
          </span>
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-300 blur-md"
            style={{ backgroundColor: item.color }}
          />
        </a>
      ))}
    </div>
  );
}
