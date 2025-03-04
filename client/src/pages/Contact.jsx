import React from 'react'
import '../styles/Contact.css'
import MapComponent from '../components/MapComponent'

const Contact = () => {
    return (
        <div className='contact_page'>
            <div className='contact_container'>
                <h2 className="contact_title">Let's Connect</h2>
                <div className='contact_map'>
                    <MapComponent />
                </div>
                <div className="contact_info">
                    <div className="contact_item">
                        <span className="contact_label">📍 Address:</span>Bhubaneswar, Odisha, India, 751003
                    </div>
                    <div className="contact_item">
                        <span className="contact_label">📧 Email:</span> canopus.incglobe@gmail.com
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
