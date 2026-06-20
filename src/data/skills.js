
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiTensorflow,
  SiOpencv,
  SiDocker,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import {
  Database,
  Cpu,
  Code2,
  BrainCircuit,
  Cloud,
  GitBranch,
  Layers,
  Radio,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "C++", icon: SiCplusplus, proficiency: 88 },
      { name: "Python", icon: SiPython, proficiency: 85 },
      { name: "JavaScript", icon: SiJavascript, proficiency: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: Cpu,
    skills: [
      { name: "React", icon: SiReact, proficiency: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 88 },
      { name: "HTML5", icon: SiHtml5, proficiency: 92 },
      { name: "CSS3", icon: SiCss, proficiency: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: 85 },
      { name: "Express.js", icon: SiExpress, proficiency: 85 },
      { name: "REST APIs", proficiency: 88 },
      { name: "JWT Auth", proficiency: 82 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, proficiency: 85 },
      { name: "MySQL", icon: SiMysql, proficiency: 80 },
      { name: "SQL", proficiency: 82 },
    ],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: [
      { name: "Machine Learning", proficiency: 78 },
      { name: "OpenCV", icon: SiOpencv, proficiency: 80 },
      { name: "YOLO", proficiency: 75 },
      { name: "TensorFlow", icon: SiTensorflow, proficiency: 72 },
    ],
  },
  {
    title: "Tools",
    icon: Layers,
    skills: [
      { name: "Git", icon: SiGit, proficiency: 90 },
      { name: "GitHub", icon: SiGithub, proficiency: 90 },
      { name: "Postman", icon: SiPostman, proficiency: 85 },
      { name: "VS Code", proficiency: 92 },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS Basics", proficiency: 65 },
      { name: "Docker", icon: SiDocker, proficiency: 68 },
      { name: "Vercel / Netlify", proficiency: 80 },
    ],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git Workflow", icon: SiGit, proficiency: 90 },
      { name: "GitHub Actions", icon: SiGithub, proficiency: 70 },
      { name: "Branching Strategy", proficiency: 82 },
    ],
  },
  {
    title: "Core CS",
    icon: Code2,
    skills: [
      { name: "DSA (400+ LC)", proficiency: 88 },
      { name: "OOP", proficiency: 85 },
      { name: "DBMS", proficiency: 80 },
      { name: "Computer Networks", proficiency: 75 },
    ],
  },
  {
    title: "ECE",
    icon: Radio,
    skills: [
      { name: "Embedded Systems", proficiency: 78 },
      { name: "Microcontrollers", proficiency: 75 },
      { name: "Signal Processing", proficiency: 70 },
      { name: "Digital Electronics", proficiency: 72 },
    ],
  },
];

export const techMarquee = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Docker", icon: SiDocker },
];