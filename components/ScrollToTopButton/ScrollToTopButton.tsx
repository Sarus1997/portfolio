"use client";

import { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.scss";
import { ChevronUp } from "lucide-react"; // ใช้ icon จาก lucide-react (ถ้ามี)

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ตรวจสอบการ scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll ขึ้นบนสุด
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.show : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
