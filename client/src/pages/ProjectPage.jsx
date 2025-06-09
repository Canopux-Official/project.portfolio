import "../styles/ProjectPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const projects = [
  {
    title: "ArogSphere",
    images: [pa1, pa2, pa3, pa4],
    description:
      "ArogSphere is an innovative healthcare platform designed to simplify and enhance your medical journey. This intelligent application offers a range of powerful features, including medicine price comparison, allowing users to find the best deals across platforms like 1mg, Netmeds, and more. With AI-powered disease prediction, users can input symptoms and receive potential diagnoses to guide their next steps. The platform also features a nearby hospital locator, helping users find medical facilities instantly.",
    tech: ["MERN STACK", "AI", "Cloud"],
    github: "https://github.com/yourusername/arogsphere",
    demo: "https://arogsphere.example.com",
  },
  {
    title: "Beatyx",
    images: [pb1, pb2, pb3, pb4, pb5],
    description:
      "Beatyx - Beat The Bits is a full-stack web application developed by Canopux, offering a seamless and immersive music streaming experience. With an intuitive interface and smooth navigation, users can enjoy uninterrupted streaming, explore diverse playlists curated for different moods and genres, and stay updated with the latest trending songs. The platform provides robust playlist management, allowing users to create, edit, and organize their favorite tracks effortlessly.",
    tech: ["MERN STACK", "Music Streaming"],
    github: "https://github.com/yourusername/beatyx",
    demo: "https://beatyx.example.com",
  },
  {
    title: "Trend",
    images: [pt1, pt2, pt3],
    description:
      "Trend is a modern e-commerce platform designed for fashion enthusiasts who love staying ahead of trends. With a curated selection of stylish clothing and accessories, it blends quality and affordability, ensuring that fashion remains accessible to all. The platform empowers users to express their individuality while enjoying a seamless shopping experience with smooth navigation and hassle-free checkout. Personalized recommendations enhance the journey by offering tailored product suggestions based on user preferences.",
    tech: ["MERN STACK", "E-Commerce"],
    github: "https://github.com/yourusername/trend",
    demo: "https://trend.example.com",
  },
  {
    title: "CreatorConnect",
    images: [pc1, pc1, pc1],
    description:
      "CreatorConnect is an interactive platform designed to strengthen the creator-fan relationship through seamless engagement and support. Fans can follow creators, like, comment, and even send direct messages, fostering a vibrant community. With Razorpay integration, supporters can contribute through one-time donations or monthly subscriptions, while creators enjoy a secure financial system, including transaction history and easy bank or UPI withdrawals. The platform offers smooth user authentication via Google, Facebook, or GitHub, allowing users to register as either Creators or Fans.",
    tech: ["MERN STACK", "Razorpay Integration"],
    github: "https://github.com/yourusername/creatorconnect",
    demo: "https://creatorconnect.example.com",
  },
  {
    title: "TechXpert",
    images: [px1, px2, px3, px4],
    description:
      "TechXpert is a dynamic learning and teaching platform designed to help users acquire and share valuable tech skills. It fosters an interactive environment where individuals can exchange expertise, gain insights, and collaborate on projects. With certification programs, users can validate their skills, making it easier to showcase their proficiency and accomplishments. The platform encourages teamwork and knowledge-building, creating a thriving community of tech enthusiasts. TechXpert is more than just a learning hub—it's a space for growth, innovation, and collaboration in the ever-evolving world of technology.",
    tech: ["MERN STACK", "Certification Programs"],
    github: "https://github.com/yourusername/techxpert",
    demo: "https://techxpert.example.com",
  },
];

const ProjectPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="project-page">
      {/* Floating Background Elements */}
      <div className="floating-bg">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="project_container">
        <div className="project_header">
          {/* <h2 className="project_title">Our Projects</h2> */}
          <p className="main-title">Tech-Driven Creations</p>
        </div>

        <div className="project_wrapper">
          {projects.map((project, index) => (
            <div key={index} className="project_content fade-in">
              <div className="project_slider">
                <Slider {...settings}>
                  {project.images.map((image, idx) => (
                    <div key={idx}>
                      <img
                        src={image}
                        alt={`${project.title} - Slide ${idx + 1}`}
                        className="slider_image zoom-on-hover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="project_description">
                <h3 className="project_title_green">{project.title}</h3>
                <p>{project.description}</p>

                {/* <div className="tech_stack">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="tech_badge">
                      {techItem}
                    </span>
                  ))}
                </div> */}

                <div className="project_links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pro-btn github-btn"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pro-btn demo-btn"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
