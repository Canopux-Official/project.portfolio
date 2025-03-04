import React from 'react'
import '../styles/About.css'
import user from "../assets/user.png"

const members = [
    {
        image: user,
        name: "John Doe",
        skills: ["React", "Node.js", "MongoDB"]
    },
    {
        image: user,
        name: "Jane Smith",
        skills: ["Python", "Machine Learning", "Data Science"]
    },
    {
        image: user,
        name: "Alice Johnson",
        skills: ["UI/UX Design", "Figma", "Adobe XD"]
    },
    {
        image: user,
        name: "Bob Williams",
        skills: ["DevOps", "AWS", "Docker"]
    },
    {
        image: user,
        name: "Bob Williams",
        skills: ["DevOps", "AWS", "Docker"]
    },
    {
        image: user,
        name: "Bob Williams",
        skills: ["DevOps", "AWS", "Docker"]
    }
    , {
        image: user,
        name: "Bob Williams",
        skills: ["DevOps", "AWS", "Docker"]
    }
]


const About = () => {
    return (
        <div className='about_page'>
            <div className='about_container'>
                <h2 className="about_title">Meet Our Core Members</h2>
                <div className='about_wrapper'>
                    {members.map((member, index) => (
                        <div key={index} className={`about_content`}>
                            <div className='about_image'>
                                <div className='image_container'>
                                    <img src={member.image} alt="" />
                                </div>
                                <div className='name_container'>
                                    {member.name}
                                </div>
                            </div>
                            <div className='about_skills'>
                                <div>
                                    <h5 className='about_title' style={{ fontSize: "1.3rem" }}>Skills</h5>
                                    <ul>
                                        {member.skills.map((skill, index) => {
                                            return (
                                                <li key={index}>{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
