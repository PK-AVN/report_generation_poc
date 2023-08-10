"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Report from "./pages/Report";
import reportJSON from "../../public/data/reportData.json";

export default function Home() {
  const handlePreviewPDF = () => {
    // Apply print styles dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "print-styles.css"; // Path to your print stylesheet
    document.head.appendChild(link);

    // Open print dialog
    window.print();

    // Remove the print stylesheet after printing
    link.parentNode && link.parentNode.removeChild(link);
  };
  return (
    <main className={styles.main}>
      {/* <button onClick={handlePreviewPDF}>Preview as PDF</button> */}
      <Report reportData={reportJSON} />
    </main>
  );
}
