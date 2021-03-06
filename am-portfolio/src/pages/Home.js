import React from 'react';
// import SanFran from '../assets/images/Aquarium.jpg';

// Background photo for home: Photo by: Sarah Pflug
// Teamwork Pic: Photo by fauxels from Pexels
function Home() {
    return (
        <main className='container-fluid home'>
            <section className='row'>
                <div>
                    <h1></h1>
                </div>
            </section>

            <section id='row1' className='row justify-content-center'>
                <h1 id='introHome' className="display-5">Welcome!! I am Amanda and I am a Full-Stack web developer.</h1>
            </section>

            <section className='row'>
                <h1></h1>
            </section>

            <section className='row'>
                <div id='homeCard' className='card'>
                    <div id='homeCard' className='card-bodi'>
                        <p className='card-text'>I have a passion for learning new things and problem solving. Coding is a perfect blend of those two passions. Although I am capable of thriving on an individual basis, I feel the best ideas and work are from the efforts of a team.</p>
                        <a href="/portfolio" id='jumpTo' class="btn btn-info">Jump Right To My Work</a>
                    </div>
                </div>
            </section>
            
            {/* Below is needed to maintain CSS. This is a temporary fix. */}
            <section className='row'>
                <h1></h1>
            </section>

            <section className='row'>
                <h1></h1>
            </section>

            <section className='row'>
                <h1></h1>
            </section>

            <section className='row'>
                <h1></h1>
            </section>
        </main>
    )
};

export default Home;