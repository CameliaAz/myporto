"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import { configFirebase } from "@/lib/data";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import DOMPurify from "dompurify";

export default function About() {
  const { ref } = useSectionInView("About");

  const app = initializeApp(configFirebase);
  const db = getFirestore(app);

  const [data, setDatas] = useState({}); // Inisialisasi state dengan objek kosong
  const [sanitizedHtml, setSanitizedHtml] = useState("Loading...");


  async function getaboutme() {
    try {
      const docRef = doc(db, "aboutme", "CK7DGnNGrnoJqXCQV6Hc");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Fetched data:", docSnap.data());
        setDatas(docSnap.data());
      } else {
        console.error("Document not found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getaboutme();
  }, []);

   // Sanitasi hanya setelah data ada
  useEffect(() => {
    if (data?.raw_aboutme) setSanitizedHtml(DOMPurify.sanitize(data.raw_aboutme));
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
