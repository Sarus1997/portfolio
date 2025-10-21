"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  User,
  Calendar,
  Sparkles,
  Code,
  Video,
} from "lucide-react";
import styles from "./About.module.scss";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles["about-page"]}>
      {/* Background effects */}
      <div className={styles["background-effects"]}>
        <div
          className={styles["mouse-glow"]}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className={`${styles["glow-orb"]} ${styles["glow-orb-1"]}`} />
        <div className={`${styles["glow-orb"]} ${styles["glow-orb-2"]}`} />

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles["content-wrapper"]}>
        <motion.div
          className={styles["main-card"]}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Card header */}
          {/* <div className={styles["card-header"]}>
            <div className={styles["header-overlay"]} />
            <div className={styles["header-gradient"]} />
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={styles.star}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div> */}

          {/* Profile section */}
          <div className={styles["profile-section"]}>
            <div className={styles["profile-image-container"]}>
              <motion.div
                className={styles["profile-glow-wrapper"]}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <div className={styles["profile-glow"]} />
                <div className={styles["profile-image"]}>
                  <img
                    src="/img/avatar/profile_sr.png"
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "scale(1.3) translate(-5%, 10%)",
                      transformOrigin: "center",
                    }}
                  />
                </div>
                <div className={styles["profile-badge"]}>
                  <Sparkles size={20} />
                </div>
              </motion.div>
            </div>

            <div className={styles["name-section"]}>
              <h1 className={styles["main-title"]}>
                Hello, I&apos;m{" "}
                <span className={styles["gradient-text"]}>Sarus</span>
              </h1>
              <div className={styles["role-badges"]}>
                <span className={`${styles.badge} ${styles["badge-purple"]}`}>
                  <Code size={16} /> Frontend Dev
                </span>
                <span className={`${styles.badge} ${styles["badge-blue"]}`}>
                  <Code size={16} /> Backend Dev
                </span>
                <span className={`${styles.badge} ${styles["badge-indigo"]}`}>
                  <Video size={16} /> Video Editor
                </span>
              </div>
            </div>

            <div className={styles["description-section"]}>
              <p className={styles["description-main"]}>
                I am a student who graduated in{" "}
                <span className={styles.highlight}>
                  Information Technology and Digital Innovation
                </span>
                , Faculty of Science, Walailak University.
              </p>
              <p className={styles["description-secondary"]}>
                I may not be very skilled in programming, but I have a passion
                for web design, mobile apps, and backend development. Nowadays,
                there are many tools and languages that make learning even more
                enjoyable.
              </p>
            </div>

            {/* Info cards */}
            <div className={styles["info-grid"]}>
              <motion.div
                className={`${styles["info-card"]} ${styles["info-card-purple"]}`}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles["info-header"]}>
                  <div
                    className={`${styles["info-icon"]} ${styles["info-icon-purple"]}`}
                  >
                    <User size={20} />
                  </div>
                  <span className={styles["info-label"]}>
                    {t.about.nameTitle}
                  </span>
                </div>
                <p className={styles["info-value"]}>{t.about.name}</p>
              </motion.div>

              <motion.div
                className={`${styles["info-card"]} ${styles["info-card-blue"]}`}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles["info-header"]}>
                  <div
                    className={`${styles["info-icon"]} ${styles["info-icon-blue"]}`}
                  >
                    <Calendar size={20} />
                  </div>
                  <span className={styles["info-label"]}>
                    {t.about.ageTitle}
                  </span>
                </div>
                <p className={styles["info-value"]}>{t.about.age}</p>
              </motion.div>

              <motion.div
                className={`${styles["info-card"]} ${styles["info-card-indigo"]}`}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles["info-header"]}>
                  <div
                    className={`${styles["info-icon"]} ${styles["info-icon-indigo"]}`}
                  >
                    <Mail size={20} />
                  </div>
                  <span className={styles["info-label"]}>
                    {t.about.emailTitle}
                  </span>
                </div>
                <p
                  className={`${styles["info-value"]} ${styles["info-email"]}`}
                >
                  saharat.rus@gmail.com
                </p>
              </motion.div>

              <motion.div
                className={`${styles["info-card"]} ${styles["info-card-purple"]}`}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles["info-header"]}>
                  <div
                    className={`${styles["info-icon"]} ${styles["info-icon-purple"]}`}
                  >
                    <MapPin size={20} />
                  </div>
                  <span className={styles["info-label"]}>
                    {t.about.locationTitle}
                  </span>
                </div>
                <p className={styles["info-value"]}>{t.about.location}</p>
              </motion.div>
            </div>

            {/* Social links */}
            <div className={styles["social-links"]}>
              <motion.a
                href="#"
                target="_blank"
                className={`${styles["social-icon"]} ${styles["social-blue"]}`}
                whileHover={{ scale: 1.15 }}
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                className={`${styles["social-icon"]} ${styles["social-purple"]}`}
                whileHover={{ scale: 1.15 }}
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                className={`${styles["social-icon"]} ${styles["social-indigo"]}`}
                whileHover={{ scale: 1.15 }}
              >
                <Facebook size={20} />
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                className={`${styles["social-icon"]} ${styles["social-pink"]}`}
                whileHover={{ scale: 1.15 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
