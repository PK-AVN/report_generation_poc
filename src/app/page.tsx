import Image from "next/image";
import styles from "./page.module.css";
import Report from "./pages/Report";
import reportJSON from "../../public/data/reportData.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <Report reportData={reportJSON} />
    </main>
  );
}
