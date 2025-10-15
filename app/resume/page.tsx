"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import styles from "./Resume.module.scss";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Resume() {
  const { t } = useLanguage();
  return (
    <div className={styles.container}>
      <motion.section
        className={styles.heroResume}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h1
          className={styles.resumeTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.resume.title}
        </motion.h1>

        <motion.p
          className={styles.heroDescription}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t.resume.description}
        </motion.p>

        {/* Preview iframe */}
        <motion.div
          className={styles.resumePreview}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <iframe
            src="https://www.canva.com/design/DAGu7M_Qr4c/ef8lTj_H5IcZaJRCRcDTGw/view?embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>

        <motion.h1
          className={styles.heroDescription}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.resume.description}
        </motion.h1>

        {/* Download buttons */}
        <motion.div
          className={styles.buttonGroup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="/resume/CV_Saharat_th.pdf"
            download="CV_Saharat_th.pdf"
            className={`${styles.button} ${styles.thBtn}`}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 6px 25px rgba(0,150,199,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            ดาวน์โหลดเรซูเม่ (ไทย)
          </motion.a>

          <motion.a
            href="/resume/CV_Saharat_eng.pdf"
            download="CV_Saharat_eng.pdf"
            className={`${styles.button} ${styles.engBtn}`}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 6px 25px rgba(0,180,216,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume (English)
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}
