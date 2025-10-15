"use client";

import { motion } from "framer-motion";

import styles from "../styles/Home.module.scss";
import { useLanguage } from "@/contexts/LanguageContext";
import AboutPage from "./about/page";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container">
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hello, I&apos;m Sarus
        </motion.h1>

        <motion.p
          className={styles.heroDescription}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t.hero.description}
        </motion.p>

        {/* Button Go to Resume Page */}
        <motion.a
          href="/resume"
          className="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t.hero.button}
        </motion.a>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          ↓ Scroll down
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutPage />
      </motion.div>
    </div>
  );
}
