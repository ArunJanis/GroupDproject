import React from 'react';
import './About.css'; // Make sure to create this CSS file or use inline styles
import profile from '../assets/profile.jpg';

function About() {
  return (
    <>
      <div className="aboutPage">
      	<div className="top">
        <h1 id="heading">About <span>SoftBite</span></h1>
        <p className="about-description">
          SoftBite is your go to platform for affordable, fresh, and fast delivered meals. Whether you’re a student, a professional, or a foodie on the hunt for great taste, we serve high quality food with zero compromises. Built by a team of food lovers, SoftBite is more than a service, it’s a mission to make food fun, fast, and fair.
        </p>
	</div>

        <h2 className="section-title">Founders of SoftBite</h2>
        <div className="founders">
          <div className="founder-card">
            <img src={profile} alt="Aman Sharma" />
            <p className="founder-name">Sarthak Dhar</p>
          </div>
          <div className="founder-card">
            <img src={profile} alt="ARUN JANKAI RAMANK" />
            <p className="founder-name">ARUN JANKAI RAMANK</p>
          </div>
          <div className="founder-card">
            <img src={profile} alt="Kunal Verma" />
            <p className="founder-name">Harish Kumar</p>
          </div>
          <div className="founder-card">
            <img src={profile} alt="Inderjeet Gagan Bhagat" />
            <p className="founder-name">Inderjeet Gagan Bhagat</p>
          </div>
        </div>

	<div className='bottom'>
		<div className='section'>
        		<h2 className="section-title">Contact Us</h2>
        		<div className="contact-info">
        		  	<p>Email: contact@softbite.in</p>
        		  	<p>Phone: +91 98765 43210</p>
        		  	<p>Instagram: @softbite_official</p>
        		</div>
		</div>

		<div className='section'>
       			<h2 className="section-title">Headquarters</h2>
        		<div className="headquarters">
        		  <p>Jammu, Sector 247, J&K  - 184121</p>
        		</div>
		</div>
	</div>

      </div>
    </>
  );
}

export default About;

