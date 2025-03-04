import React from 'react'
import '../styles/About.css'
import user from "../assets/user.png"

const members = [
    {
        image: user,
        name: "Akhilesh Choudhary",
        skills: ["IOT", "Arduino", "3D Printing", "Frontend Development"]
    },
    {
        image: user,
        name: "Jagannath Adhikari",
        skills: ["Android Development With Kotlin","Jet Pack Compose" ,"Firebase"]
    },
    {
        image: user,
        name: "Prem Chandra Prasad",
        skills: ["Java", "Javascript", "React+Vite", "Next.Js", "Node Js", "Tailwind UI","MongoDB"]
    },
    {
        image: user,
        name: "Ashish Mittal",
        skills: ["HTML", "Tailwind CSS", "Javascript","React","Node Js","ShadCn UI"]
    },
    {
        image: user,
        name: "Paresh Chandra Pothal",
        skills: ["React", "Node JS", "MongoDB","Streamlit","Python","ML"]
    },
    {
        image: user,
        name: "Archit Mishra",
        skills: ["React+Vite", "Node JS", "Docker","MongoDB","UI-UX Design", "Tailwind CSS","Material UI"]
    }
    , {
        image: user,
        name: "Pratik Sourav Panda",
        skills: ["Management", "C/C++","Python","Marketing","Finance","Content Writing","Graphic Designing"]
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
