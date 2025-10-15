/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiHome,
  FiAward,
  FiFolder,
  FiMenu,
  FiX,
  FiFileText,
} from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "../styles/Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? "hidden" : "auto";
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          !isVisible ? styles["navbar--hidden"] : ""
        }`}
      >
        <div className={styles.navbar__container}>
          {/* Logo */}
          <div className={styles.navbar__logo}>
            <Link href="/" className={styles.navbar__brand}>
              <span className={styles.logoAccent}>S</span>R
            </Link>
          </div>

          <div className={styles.navbar__actions}>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={styles.navbar__lang}
              aria-label="Change language"
            >
              <img
                src={lang === "EN" ? "/flags/uk.svg" : "/flags/th.svg"}
                alt={lang === "EN" ? "English" : "Thai"}
              />
              <span>{lang}</span>
            </button>

            {/* Toggle */}
            <button
              className={`${styles.navbar__toggle} ${
                isSidebarOpen ? styles.active : ""
              }`}
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.sidebarOverlay} ${
          isSidebarOpen ? styles.active : ""
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ""}`}
      >
        <div className={styles.sidebar__content}>
          <div className={styles.sidebar__header}>
            <div className={styles.navbar__logo}>
              <span className={styles.logoAccent}>S</span>R
            </div>
            <button
              className={styles.navbar__toggle}
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <FiX size={26} />
            </button>
          </div>
          <ul className={styles.sidebar__links}>
            <li>
              <Link href="/" onClick={toggleSidebar}>
                <FiHome /> {t.nav.home}
              </Link>
            </li>
            <li>
              <Link href="/resume" onClick={toggleSidebar}>
                <FiFileText /> {t.nav.resume}
              </Link>
            </li>
            <li>
              <Link href="/certification" onClick={toggleSidebar}>
                <FiAward /> {t.nav.certifications}
              </Link>
            </li>
            <li>
              <Link href="/project" onClick={toggleSidebar}>
                <FiFolder /> {t.nav.projects}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
