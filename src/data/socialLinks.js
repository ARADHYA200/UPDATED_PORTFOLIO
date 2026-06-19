import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Mail, FileText } from "lucide-react";

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ARADHYA200",
    icon: SiGithub,
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aradhya-agarwal-4264062a2",
    icon: FaLinkedin,
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/aradhya_agarwal/",
    icon: SiLeetcode,
    ariaLabel: "Visit LeetCode profile",
  },
  {
    name: "Email",
    url: "mailto:aradhyaagarwal2k131987@gmail.com",
    icon: Mail,
    ariaLabel: "Send email",
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: FileText,
    ariaLabel: "Download resume",
  },
];

export const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Achievements", to: "achievements" },
  { name: "Contact", to: "contact" },
];
