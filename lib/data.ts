import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/22.jpeg";
import KasirImg from "@/public/Kasir.png";
import login_bukuindukImg from "@/public/login_bukuinduk.png";
import dashboard_bukuinduk from "@/public/dashboard_bukuinduk.png";
import LoginBPMNImg from "@/public/LoginBPMN.png";
import LoginWMSImg from "@/public/LoginWMS.png";


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
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated from MTSN 4 TULUNGAGUNG",
  //   location: "Tulungagung, ID",
  //   description:
  //     "I graduated after 3 year of studying. ",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2018-2021",
  // },
  {
    title: "Graduated from SMKS TELKOM MALANG",
    location: "Malang",
    description:
      "I studied in SMKS TELKOM MALANG for 3 years. I learned about programming, networking, and multimedia.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Student in State Politechnic of Malang",
    location: "Malang",
    description:
      "Informatics Engineering",
    icon: React.createElement(IoBookOutline),
    date: "2024-present",
  },
  {
    title: "UI/UX Design",
    location: "Surabaya",
    description:
      "Internship at publish.co.id ",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Business Process Development",
    location: "Malang",
    description:
      "Internship at Sarastya Agility Innovations ",
    icon: React.createElement(CgWorkAlt),
    date: "2025-2025",
  },
] as const;

export const projectsData = [
  {
    title: "Kasir App",
    description:
      "Aplikasi Kasir berbasis web yang dirancang untuk memudahkan proses transaksi penjualan di toko atau restoran.",
    tags: ["Node.js","React.js", "mysql", "Tailwind",],
    imageUrl: KasirImg ,
  },
  {
    title: "Sistem Informasi Pergudangan Kosmetik",
    description:
      "Sistem Manajemen Pergudangan Kosmetik berbasis web yang dirancang untuk mengelola inventaris dan proses pergudangan produk kosmetik.",
    tags: ["React.js", "Laravel", "mysql"],
    imageUrl: LoginWMSImg ,
  },
  {
    title: "Sistem Otomasi BPMN",
    description:
      "Sistem Otomasi BPMN berbasis web yang dirancang untuk mengotomatisasi proses bisnis menggunakan notasi BPMN (Business Process Model and Notation).",
    tags: ["React.js", "JavaScript", "Laravel", "Tailwind", "mysql"],
    imageUrl: LoginBPMNImg  ,
  },
  {
    title: "Sistem Buku Induk Siswa",
    description:
      "Sistem Informasi Buku Induk Siswa berbasis web yang dirancang untuk memudahkan manajemen data siswa.",
    tags: ["Vue", "JavaScript", "Laravel", "Tailwind", "MySQL"],
    imageUrl: dashboard_bukuinduk,
  },
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
  "PostgreSQL",
  "Laravel",
  "Vue",
  "MySQL",
] as const;
