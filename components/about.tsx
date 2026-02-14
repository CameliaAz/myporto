"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import { configFirebase } from "@/lib/data";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";


// 1. Definisikan Interface agar TypeScript tidak protes properti raw_aboutme
interface AboutData {
  raw_aboutme?: string;
}

export default function About() {
  const { ref } = useSectionInView("About");

  // Inisialisasi Firebase
  const app = initializeApp(configFirebase);
  const db = getFirestore(app);

  // 2. Gunakan tipe AboutData pada useState
  const [data, setDatas] = useState<AboutData>({});
  const [sanitizedHtml, setSanitizedHtml] = useState("Loading...");

  async function getaboutme() {
    try {
      const docRef = doc(db, "aboutme", "CK7DGnNGrnoJqXCQV6Hc");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // 3. Tegaskan tipe data yang diterima dari Firestore
        setDatas(docSnap.data() as AboutData);
      } else {
        console.error("Document not found.");
        setSanitizedHtml("No data found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setSanitizedHtml("Error loading content.");
    }
  }

  // Effect 1: Ambil data dari Firebase saat komponen pertama kali muncul
  useEffect(() => {
    getaboutme();
  }, []);

  // Effect 2: Lakukan sanitasi HANYA jika data.raw_aboutme berubah
  useEffect(() => {
    // Trik utama: Hanya import DOMPurify di sisi client
    if (data?.raw_aboutme) {
      import("dompurify").then((dompurify) => {
        const DOMPurify = dompurify.default;
        const clean = DOMPurify.sanitize(data.raw_aboutme!);
        setSanitizedHtml(clean);
      });
    }
  }, [data]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <section dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </motion.section>
  );
}
