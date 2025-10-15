import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "../styles/Footer.module.scss";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>
          &copy; {new Date().getFullYear()} Sarus.
        </p>
        <div className={styles.footer__links}>
          <a
            href="https://www.linkedin.com/in/saharat-rus/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/saharatrus"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:saharat.rus@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
