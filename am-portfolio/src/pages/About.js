import React from 'react';
import profilePic from '../assets/images/Profile Pic.jpg';
// Used <br /> for a temporary CSS fix to maintain structure. Without complicating the style.css file
function About() {
    return (

        <div className="container-fluid about">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>About Me</h1>
                    <br />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-sm-12 text-center">
                    <img className="img-fluid" src= {profilePic} alt="about me" width="250px" />
                </div>

                <div className="col-lg-9 col-sm-12">
                    <p id="aboutmetext">
                        I was formally a passionate preschool teacher was searching for original ways to make learning fun for my students. The same passion has transferred into my new career of Web Development. I love to find innovative yet simple solutions to complex problems and I am always ready to learn. I work well both in a team and individual setting. I am very  familiar with CSS, HTML, and JavaScript. Currently enrolled in a coding boot-camp hosted be the University of Arizona. In my spare time I take independent online courses to keep my coding and problem solving skills sharp. Most of all I am interested and eager to becoming an asset to every team I am part of.
                    </p>
                </div>
            </div>
        </div>







    )
};



export default About;











