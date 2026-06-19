import { Mail, Phone, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FileText } from "lucide-react";
import { profile } from "./profile";

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: profile.email,
    link: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: profile.phone,
    link: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: profile.location,
    link: "#contact",
  },
  {
    icon: SiGithub,
    title: "GitHub",
    value: "github.com/ARADHYA200",
    link: profile.githubUrl,
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/aradhya-agarwal",
    link: profile.linkedinUrl,
  },
  {
    icon: FileText,
    title: "Resume",
    value: "Download Resume",
    link: profile.resumeUrl,
  },
];

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};
