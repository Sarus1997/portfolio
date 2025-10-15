// "use client";

// import { useState, useEffect } from "react";
// import { JSX } from "react";
// import {
//   Linkedin,
//   Github,
//   Facebook,
//   Instagram,
//   Mail,
//   MapPin,
//   User,
//   Calendar,
//   Sparkles,
//   Code,
//   Video,
// } from "lucide-react";

// export default function AboutPage(): JSX.Element {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="about-page">
//       {/* Animated background elements */}
//       <div className="background-effects">
//         <div
//           className="mouse-glow"
//           style={{
//             left: mousePosition.x - 192,
//             top: mousePosition.y - 192,
//           }}
//         />
//         <div className="glow-orb glow-orb-1" />
//         <div className="glow-orb glow-orb-2" />

//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${5 + Math.random() * 10}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="content-wrapper">
//         <div className={`main-card ${isVisible ? "visible" : ""}`}>
//           {/* Header gradient */}
//           <div className="card-header">
//             <div className="header-overlay" />
//             <div className="header-gradient" />
//             {[...Array(30)].map((_, i) => (
//               <div
//                 key={i}
//                 className="star"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 3}s`,
//                 }}
//               />
//             ))}
//           </div>

//           {/* Profile section */}
//           <div className="profile-section">
//             {/* Profile image with glow effect */}
//             <div className="profile-image-container">
//               <div className="profile-glow-wrapper">
//                 <div className="profile-glow" />
//                 <div className="profile-image">
//                   <div className="profile-emoji">👨‍💻</div>
//                 </div>
//                 <div className="profile-badge">
//                   <Sparkles size={20} />
//                 </div>
//               </div>
//             </div>

//             {/* Name and title */}
//             <div className="name-section">
//               <h1 className="main-title">
//                 Hello, I'm <span className="gradient-text">Sarus</span>
//               </h1>
//               <div className="role-badges">
//                 <span className="badge badge-purple">
//                   <Code size={16} /> Frontend Dev
//                 </span>
//                 <span className="badge badge-blue">
//                   <Code size={16} /> Backend Dev
//                 </span>
//                 <span className="badge badge-indigo">
//                   <Video size={16} /> Video Editor
//                 </span>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="description-section">
//               <p className="description-main">
//                 I am a student who graduated in{" "}
//                 <span className="highlight">
//                   Information Technology and Digital Innovation
//                 </span>
//                 , Faculty of Science, Walailak University.
//               </p>
//               <p className="description-secondary">
//                 I may not be very skilled in programming, but I have a passion
//                 for web design, mobile apps, and backend development. Nowadays,
//                 there are many tools and languages that make learning even more
//                 enjoyable.
//               </p>
//             </div>

//             {/* Info cards */}
//             <div className="info-grid">
//               <div className="info-card info-card-purple">
//                 <div className="info-header">
//                   <div className="info-icon info-icon-purple">
//                     <User size={20} />
//                   </div>
//                   <span className="info-label">Full Name</span>
//                 </div>
//                 <p className="info-value">Saharat Suwannapapond</p>
//               </div>

//               <div className="info-card info-card-blue">
//                 <div className="info-header">
//                   <div className="info-icon info-icon-blue">
//                     <Calendar size={20} />
//                   </div>
//                   <span className="info-label">Age</span>
//                 </div>
//                 <p className="info-value">27 Years</p>
//               </div>

//               <div className="info-card info-card-indigo">
//                 <div className="info-header">
//                   <div className="info-icon info-icon-indigo">
//                     <Mail size={20} />
//                   </div>
//                   <span className="info-label">Email</span>
//                 </div>
//                 <p className="info-value info-email">saharat.rus@gmail.com</p>
//               </div>

//               <div className="info-card info-card-purple">
//                 <div className="info-header">
//                   <div className="info-icon info-icon-purple">
//                     <MapPin size={20} />
//                   </div>
//                   <span className="info-label">Location</span>
//                 </div>
//                 <p className="info-value">Bangkok, Thailand 🇹🇭</p>
//               </div>
//             </div>

//             {/* Social links */}
//             <div className="social-links">
//               <a href="#" target="_blank" className="social-icon social-blue">
//                 <Linkedin size={20} />
//               </a>
//               <a href="#" target="_blank" className="social-icon social-purple">
//                 <Github size={20} />
//               </a>
//               <a href="#" target="_blank" className="social-icon social-indigo">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" target="_blank" className="social-icon social-pink">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Main container */
//         .about-page {
//           min-height: 100vh;
//           background: linear-gradient(
//             135deg,
//             #0f172a 0%,
//             #581c87 50%,
//             #0f172a 100%
//           );
//           position: relative;
//           overflow: hidden;
//         }

//         /* Background effects */
//         .background-effects {
//           position: absolute;
//           inset: 0;
//           overflow: hidden;
//         }

//         .mouse-glow {
//           position: absolute;
//           width: 384px;
//           height: 384px;
//           background: rgba(168, 85, 247, 0.2);
//           border-radius: 50%;
//           filter: blur(80px);
//           transition: all 0.3s ease-out;
//           pointer-events: none;
//         }

//         .glow-orb {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(80px);
//         }

//         .glow-orb-1 {
//           top: 80px;
//           left: 40px;
//           width: 288px;
//           height: 288px;
//           background: rgba(59, 130, 246, 0.1);
//           animation: pulse 4s ease-in-out infinite;
//         }

//         .glow-orb-2 {
//           bottom: 80px;
//           right: 40px;
//           width: 384px;
//           height: 384px;
//           background: rgba(99, 102, 241, 0.1);
//           animation: pulse 4s ease-in-out infinite;
//           animation-delay: 700ms;
//         }

//         .particle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           background: rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           animation: float linear infinite;
//         }

//         /* Content wrapper */
//         .content-wrapper {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//           padding: 32px;
//         }

//         .main-card {
//           max-width: 896px;
//           width: 100%;
//           opacity: 0;
//           transform: translateY(48px);
//           transition: all 1s ease-out;
//         }

//         .main-card.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Card header */
//         .card-header {
//           height: 128px;
//           background: linear-gradient(90deg, #9333ea, #3b82f6, #6366f1);
//           position: relative;
//           overflow: hidden;
//           border-radius: 24px 24px 0 0;
//         }

//         .header-overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.2);
//         }

//         .header-gradient {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             transparent,
//             rgba(15, 23, 42, 0.4)
//           );
//         }

//         .star {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           background: rgba(255, 255, 255, 0.4);
//           border-radius: 50%;
//           animation: twinkle ease-in-out infinite;
//         }

//         /* Profile section */
//         .profile-section {
//           background: rgba(15, 23, 42, 0.4);
//           backdrop-filter: blur(32px);
//           border: 1px solid rgba(168, 85, 247, 0.2);
//           border-radius: 0 0 24px 24px;
//           padding: 0 48px 48px 48px;
//           margin-top: -64px;
//           position: relative;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//         }

//         /* Profile image */
//         .profile-image-container {
//           display: flex;
//           justify-content: center;
//           margin-bottom: 24px;
//         }

//         .profile-glow-wrapper {
//           position: relative;
//         }

//         .profile-glow {
//           position: absolute;
//           inset: -4px;
//           background: linear-gradient(90deg, #9333ea, #3b82f6, #6366f1);
//           border-radius: 50%;
//           filter: blur(16px);
//           opacity: 0.75;
//           animation: spin-slow 8s linear infinite;
//         }

//         .profile-glow-wrapper:hover .profile-glow {
//           opacity: 1;
//         }

//         .profile-image {
//           position: relative;
//           width: 160px;
//           height: 160px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 4px solid #0f172a;
//           background: linear-gradient(135deg, #a855f7, #3b82f6);
//         }

//         .profile-emoji {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 80px;
//         }

//         .profile-badge {
//           position: absolute;
//           bottom: -8px;
//           right: -8px;
//           background: linear-gradient(90deg, #9333ea, #3b82f6);
//           border-radius: 50%;
//           padding: 8px;
//           border: 2px solid #0f172a;
//           color: white;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Name section */
//         .name-section {
//           text-align: center;
//           margin-bottom: 32px;
//         }

//         .main-title {
//           font-size: 48px;
//           font-weight: 700;
//           color: white;
//           margin-bottom: 16px;
//           letter-spacing: -0.02em;
//         }

//         .gradient-text {
//           background: linear-gradient(90deg, #c084fc, #93c5fd, #a5b4fc);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .role-badges {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 12px;
//         }

//         .badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 16px;
//           border-radius: 9999px;
//           font-size: 14px;
//           border: 1px solid;
//         }

//         .badge-purple {
//           background: rgba(168, 85, 247, 0.2);
//           color: #d8b4fe;
//           border-color: rgba(168, 85, 247, 0.3);
//         }

//         .badge-blue {
//           background: rgba(59, 130, 246, 0.2);
//           color: #93c5fd;
//           border-color: rgba(59, 130, 246, 0.3);
//         }

//         .badge-indigo {
//           background: rgba(99, 102, 241, 0.2);
//           color: #a5b4fc;
//           border-color: rgba(99, 102, 241, 0.3);
//         }

//         /* Description */
//         .description-section {
//           margin-bottom: 32px;
//           max-width: 672px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .description-main {
//           color: #cbd5e1;
//           text-align: center;
//           line-height: 1.75;
//           font-size: 18px;
//           margin-bottom: 16px;
//         }

//         .highlight {
//           color: #c084fc;
//           font-weight: 600;
//         }

//         .description-secondary {
//           color: #94a3b8;
//           text-align: center;
//           line-height: 1.75;
//           font-size: 16px;
//         }

//         /* Info grid */
//         .info-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 16px;
//           margin-bottom: 32px;
//           max-width: 672px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .info-card {
//           background: rgba(30, 41, 59, 0.5);
//           backdrop-filter: blur(4px);
//           border-radius: 16px;
//           padding: 20px;
//           border: 1px solid rgba(71, 85, 105, 0.5);
//           transition: all 0.3s ease;
//         }

//         .info-card:hover {
//           transform: translateY(-2px);
//         }

//         .info-card-purple:hover {
//           border-color: rgba(168, 85, 247, 0.5);
//           box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
//         }

//         .info-card-blue:hover {
//           border-color: rgba(59, 130, 246, 0.5);
//           box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
//         }

//         .info-card-indigo:hover {
//           border-color: rgba(99, 102, 241, 0.5);
//           box-shadow: 0 8px 24px rgba(99, 102, 241, 0.2);
//         }

//         .info-header {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 12px;
//         }

//         .info-icon {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .info-icon-purple {
//           background: rgba(168, 85, 247, 0.2);
//           color: #c084fc;
//         }

//         .info-icon-blue {
//           background: rgba(59, 130, 246, 0.2);
//           color: #93c5fd;
//         }

//         .info-icon-indigo {
//           background: rgba(99, 102, 241, 0.2);
//           color: #a5b4fc;
//         }

//         .info-label {
//           color: #94a3b8;
//           font-size: 14px;
//         }

//         .info-value {
//           color: white;
//           font-weight: 500;
//           font-size: 16px;
//         }

//         .info-email {
//           word-break: break-all;
//           font-size: 15px;
//         }

//         /* Social links */
//         .social-links {
//           display: flex;
//           justify-content: center;
//           gap: 16px;
//         }

//         .social-icon {
//           width: 48px;
//           height: 48px;
//           border-radius: 12px;
//           background: rgba(30, 41, 59, 0.5);
//           backdrop-filter: blur(4px);
//           border: 1px solid rgba(71, 85, 105, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #94a3b8;
//           transition: all 0.3s ease;
//         }

//         .social-icon:hover {
//           color: white;
//           transform: scale(1.1);
//         }

//         .social-blue:hover {
//           border-color: rgba(59, 130, 246, 0.5);
//           background: rgba(59, 130, 246, 0.1);
//           box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
//         }

//         .social-purple:hover {
//           border-color: rgba(168, 85, 247, 0.5);
//           background: rgba(168, 85, 247, 0.1);
//           box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
//         }

//         .social-indigo:hover {
//           border-color: rgba(99, 102, 241, 0.5);
//           background: rgba(99, 102, 241, 0.1);
//           box-shadow: 0 8px 24px rgba(99, 102, 241, 0.2);
//         }

//         .social-pink:hover {
//           border-color: rgba(236, 72, 153, 0.5);
//           background: rgba(236, 72, 153, 0.1);
//           box-shadow: 0 8px 24px rgba(236, 72, 153, 0.2);
//         }

//         /* Animations */
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0) translateX(0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100vh) translateX(50px);
//             opacity: 0;
//           }
//         }

//         @keyframes twinkle {
//           0%,
//           100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 1;
//           }
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 0.1;
//           }
//           50% {
//             opacity: 0.15;
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         /* Responsive */
//         @media (max-width: 640px) {
//           .content-wrapper {
//             padding: 16px;
//           }

//           .profile-section {
//             padding: 0 24px 24px 24px;
//           }

//           .main-title {
//             font-size: 32px;
//           }

//           .profile-image {
//             width: 128px;
//             height: 128px;
//           }

//           .profile-emoji {
//             font-size: 64px;
//           }

//           .description-main {
//             font-size: 16px;
//           }

//           .info-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
