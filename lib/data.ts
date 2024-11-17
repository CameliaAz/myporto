import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/11.jpeg";
import rmtdevImg from "@/public/22.jpeg";
import KasirImg from "@/public/Kasir.png";


export const configFirebase = {
  apiKey: "AIzaSyBQvPhRTcpY5p1Ry0M-cuFVMTLPdGgiBHg",
  authDomain: "myportofolio-7d1f2.firebaseapp.com",
  projectId: "myportofolio-7d1f2",
  storageBucket: "myportofolio-7d1f2.appspot.com",
  messagingSenderId: "985990003354",
  appId: "1:985990003354:web:db62e95506e17a1439bd23"
} as const;


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from MTSN 4 TULUNGAGUNG",
    location: "Tulungagung, ID",
    description:
      "I graduated after 3 year of studying. ",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2021",
  },
  {
    title: "Graduated from SMKS TELKOM MALANG",
    location: "Malang, ID",
    description:
      "I studied in SMKS TELKOM MALANG for 3 years. I learned about programming, networking, and multimedia.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Student in Politeknik Negeri Malang",
    location: "Malang, ID",
    description:
      "Teknik Informatika",
    icon: React.createElement(IoBookOutline),
    date: "2024-present",
  },
  {
    title: "UI/UX Design",
    location: "Surabaya, ID",
    description:
      "Internship at publish.co.id ",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Kasir App",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. Users can give public feedback to companies.",
    tags: ["Node.js","React.js", "mysql", "Tailwind",],
    imageUrl: KasirImg ,
  },
  {
    title: "Laundry App",
    description:
      "Laundry app for a local business. Users can schedule a pickup and delivery time for their laundry. Admins can manage orders and customers.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  // {
  // //   title: "Alacart POS",
  // //   description:
  // //     "POS system for a local restaurant. Admins can manage menu items, orders, and customers. Users can order food and pay online.",
  // //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  // //   imageUrl:  corpcommentImg,
  // // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "TypeScript",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
