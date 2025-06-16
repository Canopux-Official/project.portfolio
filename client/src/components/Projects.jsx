import pb1 from "../assets/Beatyx/p1.jpg";
import pb2 from "../assets/Beatyx/p2.jpg";
import pb3 from "../assets/Beatyx/p3.jpg";
import pb4 from "../assets/Beatyx/p4.jpg";
import pb5 from "../assets/Beatyx/p5.jpg";

import pa1 from "../assets/ArogSphere/1.png";
import pa2 from "../assets/ArogSphere/2.png";
import pa3 from "../assets/ArogSphere/3.png";
import pa4 from "../assets/ArogSphere/4.png";

import pc1 from "../assets/CreatorConnect/p1.png";

import pt1 from "../assets/Trend/p1.png";
import pt2 from "../assets/Trend/p2.png";
import pt3 from "../assets/Trend/p3.png";

import px1 from "../assets/TechXpert/p1.png";
import px2 from "../assets/TechXpert/p2.png";
import px3 from "../assets/TechXpert/p3.png";
import px4 from "../assets/TechXpert/p4.png";

import ATS1 from '../assets/ATS/ATS 1.png'
import ATS3 from '../assets/ATS/ATS 3.png'
import ATS6 from '../assets/ATS/ATS 6.png'
import ATS7 from '../assets/ATS/ATS 7.png'
import ATS8 from '../assets/ATS/ATS 8.png'

const projects = [
  {
    title: "ArogSphere",
    introduction:
      "An integrated medical support platform that compares medicine prices across vendors, offers AI-based disease prediction, locates nearby hospitals, and provides government health scheme information. It serves as a one-stop health-tech solution with cloud-based fundraising and informative blogs.",
    problemStatement:
      "Build a unified health-tech platform that compares medicine prices, predicts diseases, connects users to nearby hospitals, and educates them on government schemes—all in one place.",
    approach:
      "We developed a smart healthcare ecosystem that integrates AI for symptom analysis, real-time price comparison from platforms like 1mg and Netmeds, location-based hospital search, and a blog-driven awareness model.",
    technologies: {
      Languages: ["Python", "JavaScript"],
      Frameworks: ["React.js", "Node.js", "Flask"],
      // testing: ["Postman", "Jest", "Swagger"],
      Others: ["MongoDB", "Google Maps API"],
    },
    images: [pa1, pa2, pa3, pa4],
    github: "hned"
  },
  {
    title: "Beatyx",
    introduction:
      "A next-generation music streaming platform tailored for independent artists and niche listeners. Beatyx combines smooth UI, smart discovery algorithms, and community curation to redefine how music is shared, heard, and appreciated.",
    problemStatement:
      "Design a music streaming platform that empowers indie artists and offers a smooth discovery experience for listeners.",
    approach:
      "We created a platform where artists can upload music, manage albums, and engage with fans, while listeners enjoy personalized playlists and genre-based discovery.",
    technologies: {
      Languages: ["JavaScript", "TypeScript"],
      Frameworks: ["Next.js", "Express.js", "Tailwind CSS"],
      // testing: ["Cypress", "Postman"],
      Others: ["Firebase", "FFmpeg", "Stripe API"],
    },
    images: [pb1, pb2, pb3, pb4, pb5],
  },
  {
    title: "Trend",
    introduction:
      "A sleek e-commerce clothing platform offering curated collections for modern youth. Trends blends style with simplicity, featuring a smooth shopping experience, real-time inventory, and trend-driven recommendations to keep fashion always fresh.",
    problemStatement:
      "Launch a stylish, easy-to-navigate e-commerce site for youth clothing with live stock updates and recommendation engine.",
    approach:
      "We built a mobile-first fashion platform with dynamic product filtering, order tracking, and style-based suggestion modules.",
    technologies: {
      Languages: ["JavaScript"],
      Frameworks: ["React.js", "Node.js"],
      // testing: ["Jest", "Selenium"],
      Others: ["MongoDB", "Razorpay"],
    },
    images: [pt1, pt2, pt3],
  },
  {
    title: "CreatorConnect",
    introduction:
      "A dynamic platform enabling creators to connect with their audience, monetize exclusive content, and manage fan engagement, all through seamless, secure payment integration. CreatorsConnect empowers digital artists, streamers, and influencers to turn passion into profession.",
    problemStatement:
      "Create a creator-focused community platform that allows monetization, fan engagement, and content hosting.",
    approach:
      "We developed a social dashboard for creators to manage content, receive payments securely, and engage with fans via direct messages, subscriptions, and exclusive drops.",
    technologies: {
      Languages: ["JavaScript", "Python"],
      Frameworks: ["React.js", "Django"],
      // testing: ["Postman", "Jest"],
      Others: ["Stripe", "OAuth"],
    },
    images: [pc1],
  },
  {
    title: "TechXpert",
    introduction:
      "An interactive platform for mastering tech skills through structured learning paths, hands-on quizzes, certifications, and career-focused resources. TechXpert helps learners grow from beginner to expert, with content tailored for real-world success.",
    problemStatement:
      "Build an interactive education platform offering tech-focused learning paths, certifications, and structured upskilling.",
    approach:
      "We designed a modular LMS (Learning Management System) featuring topic-wise quizzes, certification engines, and progress analytics dashboards.",
    technologies: {
      Languages: ["Python", "JavaScript"],
      Frameworks: ["Django", "React.js"],
      // testing: ["PyTest", "Cypress"],
      Others: ["PostgreSQL", "JWT"],
    },
    images: [px1, px2, px3, px4],
  },
  {
    title: "ATS",
    introduction:
      "A smart recruitment assistant that allows job seekers to upload resumes and get instant ATS scores, keyword suggestions, and tailored job matches. For recruiters, it filters top talent using AI/NLP to score skills, education, and role-fit in real time.",
    problemStatement:
      "Automate the resume screening process using AI and help job seekers improve their resumes based on ATS criteria.",
    approach:
      " We engineered a dual-role platform for recruiters and applicants. Candidates can upload resumes, receive instant ATS scores based on skills, education, and job match, and explore tailored job recommendations. On the other side, recruiters can post job openings and get AI-ranked candidates based on resume analysis, NLP, and role fit—making hiring faster and more efficient.",
    technologies: {
      Languages: ["Python", "JavaScript"],
      Frameworks: ["React.js", "NestJS", "Flask"],
      // testing: ["Postman", "PyTest", "Swagger"],
      Others: ["Prisma", "Multer", "JWT", "Scikit-learn",],
    },
    images: [ATS1, ATS3, ATS6, ATS7, ATS8],

  },
];

export default projects;
