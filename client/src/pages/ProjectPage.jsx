import React from 'react'
import "../styles/ProjectPage.css"
import VideoComponent from '../components/VideoComponent'
import { useEffect, useState } from "react";
const projects = [
    { title: "Project 1", video: <VideoComponent />, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum eum natus alias numquam optio facere cum odio. In et eveniet distinctio ut beatae eum recusandae enim laboriosam velit iusto, odio dolores dicta dolorum ipsam rerum repellat molestias non quibusdam nostrum, fugiat iure, optio illo? Quae eaque enim sit, officiis commodi dolorum numquam ex itaque voluptates corrupti explicabo sequi earum sunt, tempora eos deserunt totam optio a.",reference: "https://www.google.com" },

    { title: "Project 2", video: <VideoComponent />, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum eum natus alias numquam optio facere cum odio. In et eveniet distinctio ut beatae eum recusandae enim laboriosam velit iusto, odio dolores dicta dolorum ipsam rerum repellat molestias non quibusdam nostrum, fugiat iure, optio illo? Quae eaque enim sit, officiis commodi dolorum numquam ex itaque voluptates corrupti explicabo sequi earum sunt, tempora eos deserunt totam optio a." ,reference: "https://www.google.com"},

    { title: "Project 3", video: <VideoComponent />, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum eum natus alias numquam optio facere cum odio. In et eveniet distinctio ut beatae eum recusandae enim laboriosam velit iusto, odio dolores dicta dolorum ipsam rerum repellat molestias non quibusdam nostrum, fugiat iure, optio illo? Quae eaque enim sit, officiis commodi dolorum numquam ex itaque voluptates corrupti explicabo sequi earum sunt, tempora eos deserunt totam optio a.",reference: "https://www.google.com" },

    { title: "Project 4", video: <VideoComponent />, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum eum natus alias numquam optio facere cum odio. In et eveniet distinctio ut beatae eum recusandae enim laboriosam velit iusto, odio dolores dicta dolorum ipsam rerum repellat molestias non quibusdam nostrum, fugiat iure, optio illo? Quae eaque enim sit, officiis commodi dolorum numquam ex itaque voluptates corrupti explicabo sequi earum sunt, tempora eos deserunt totam optio a.",reference: "https://www.google.com" },

];

const ProjectPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='Project_Page'>
            <div className='project_container'>
                <div className='project_header'>
                    <h2 className="project_title">Our Projects</h2>
                </div>

                <div className='project_wrapper'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project_content`}
                        >
                            <div className='project_video'>
                                {project.video}
                            </div>
                            <div className='project_description'>
                                <h3 style={{ color: "green" }}>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className='project_links'>
                                    <div className='nav-btn'><a href={project.reference} style={{color: "white",textDecoration: "None"}}>Github Repo</a></div>
                                    <div className='nav-btn'>⭐ : 5</div>
                                    <div className='nav-btn'>👍 : 5</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
