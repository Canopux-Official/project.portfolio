import React from "react";
import "../styles/Map.css"; // Import CSS file

const MapComponent = () => {
  return (
    <div className="map_container">
      <iframe
        title="IIIT Bhubaneswar Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.940183290328!2d85.72755507515185!3d20.26887681397144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190909d94c4d59%3A0xf44b3c3d370edeb6!2sIIIT%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1710000000000"
        className="map_iframe"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;



