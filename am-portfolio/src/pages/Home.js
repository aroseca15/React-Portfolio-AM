import React from 'react';
// import SanFran from '../assets/images/Aquarium.jpg';
const SanFran = require('../assets/images/Aquarium.jpg')
// Background photo for home: Photo by: Sarah Pflug
function Home() {
    return (
        <main className='container-fluid home'>
            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row'>
                <h1>Hi, this is the start of my professional portfolio.</h1>
            </section>

            <section className='row'>
                <div className='card'>
                    <h1>Welcome to my site! I am Amanda and I am a web developer.</h1>
                    <image src={SanFran}></image>
                </div>

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