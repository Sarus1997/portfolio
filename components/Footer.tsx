"use client";

import React from "react";
import Link from "next/link";
import {
  FiHome,
  FiAward,
  FiFolder,
  FiFileText,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          {/* ส่วนโลโก้และคำอธิบาย */}
          <div className={styles.footer__about}>
            <Link href="/" className={styles.footer__brand}>
              <span className={styles.logoAccent}>S</span>R
            </Link>
            <p className={styles.footer__description}>{t.footer.description}</p>
            {/* Social Links */}
            <div className={styles.footer__social}>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          {/* ส่วนลิงก์เมนู */}
          <div className={styles.footer__nav}>
            <h4>{t.footer.quickLinks}</h4>
            <ul className={styles.footer__links}>
              <li>
                <Link href="/">
                  <FiHome />
                  <span>{t.footer.home}</span>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <FiFileText />
                  <span>{t.footer.resume}</span>
                </Link>
              </li>
              <li>
                <Link href="/certification">
                  <FiAward />
                  <span>{t.footer.certifications}</span>
                </Link>
              </li>
              <li>
                <Link href="/project">
                  <FiFolder />
                  <span>{t.footer.projects}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ส่วนติดต่อ */}
          <div className={styles.footer__contact}>
            <h4>{t.footer.contact}</h4>
            <div className={styles.footer__contactInfo}>
              <p>
                <FiMail />
                <span>your.email@example.com</span>
              </p>
              <p className={styles.footer__location}>Bangkok, Thailand</p>
            </div>
          </div>
        </div>

        {/* เส้นแบ่ง */}
        <div className={styles.footer__divider}></div>

        {/* ส่วนลิขสิทธิ์ */}
        <div className={styles.footer__bottom}>
          <p>
            © {new Date().getFullYear()} Sarus Saharat. {t.footer.rights}
          </p>
          <p className={styles.footer__madeWith}>
            {t.footer.madeWith} <span className={styles.heart}>♥</span>{" "}
            {t.footer.inBangkok}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
