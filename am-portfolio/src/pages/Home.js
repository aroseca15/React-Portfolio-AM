import React from 'react';
// import SanFran from '../assets/images/Aquarium.jpg';
const SanFran = require('../assets/images/Aquarium.jpg')
// Background photo for home: Photo by: Sarah Pflug
// Teamwork Pic: Photo by fauxels from Pexels
function Home() {
    return (
        <main className='container-fluid home'>
            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row justify-content-center'>
                <h1 id='introHome' className="display-4">Welcome!! I am Amanda and I am a Full-Stack web developer.</h1>
            </section>

            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row'>
                <div className='card'>
                    <image src='https://www.clker.com/cliparts/D/U/c/C/P/i/team-work-hi.png'></image>
                    <div className='card-bodi'>
                        <p className='card-text'>I have a passion for learning new things and problem solving. Coding is a perfect blend of those two passions. Although I am capable of thriving on an individual basis, I feel the best ideas and work are from the efforts of a team.</p>
                        <a href="/portfolio" id='jumpTo' class="btn btn-info">Jump Right To My Work</a>
                    </div>
                </div>
            </section>

            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>
        </main>
    )
};

export default Home;