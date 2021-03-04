import PassGen from '../assets/images/Password_Generator.png';
import DPrep from '../assets/images/Project1_Pic.png';
import DayP from '../assets/images/Day__Planner.png';
import P2 from '../assets/images/P2_Screenshot.png';
import FitnT from '../assets/images/fitness_tracker.png';
// import comeS from '../assets/images/Coming SoonA.png';
import burgEat from '../assets/images/burgerEatathon.jpg';
function Portfolio() {
    // Set up as Bootstarp Cards
    return (
        <main className='container'>
            <section className='row justify-content-center'>
                <div>
                    <h1 className="display-3 col align-self-center">Check Out My Work!</h1>
                </div>
            </section>
            <section className='row justify-content-center'>
                <div>
                    <h3 className='col align-self-center'>Here you will find examples of my code projects. Happy Exploring!!! </h3>
                </div>
            </section>
            <section className='row'>
                <div className="col-lg-4 col-sm-4">
                    <div  id= 'portCards' className="card" style={{ width: '18rem' }}>
                        <img src={PassGen} className="card-img-top" alt="Password Generator"></img>
                        <div className="card-body">
                            <h3 className="card-title">Password Generator</h3>
                            <p className="card-text">Generate a Safe Password!</p>
                            <a href=" https://aroseca15.github.io/Password_Generator_HW3/" rel='DeployLink' target="_blank" className="btn btn-success">Click Here</a>
                            <a href="https://github.com/aroseca15/Password_Generator_HW3" target="_blank" className="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div  id= 'portCards' className="card" style={{ width: '18rem' }}>
                        <img src={DPrep} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className="card-title">Disater Preparedness</h3>
                            <p className="card-text">Get all of the information you need for every type of Natural Disater in the USA!</p>
                            <a href="https://aroseca15.github.io/Disaster-Ready/" rel='DeployLink' target="_blank" className="btn btn-success">Click Here</a>
                            <a href="https://github.com/aroseca15/Disaster-Ready" rel='RepoLink' target="_blank" className="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div  id= 'portCards' className="card" style={{ width: '18rem' }}>
                        <img src={DayP} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className="card-title">Day Planner</h3>
                            <p className="card-text">Planning Your Day Just Got Easier!</p>
                            <a href="https://aroseca15.github.io/Work_Day_Planner/" rel='DeployLink' target="_blank" className="btn btn-success">Click Here</a>
                            <a href="https://github.com/aroseca15/Work_Day_Planner" rel='RepoLink' target="_blank" className="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='row'>
                <div className="col-lg-4 col-sm-4">
                    <div id= 'portCards' className="card" style={{ width: '18rem' }}>
                        <img src={P2} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className="card-title">Manageer ERP</h3>
                            <p className="card-text">MVP Employee Management App</p>
                            <a href="https://polar-dawn-89598.herokuapp.com/" rel='DeployLink' target="_blank" className="btn btn-success">Click Here</a>
                            <a href="https://github.com/poserposer13/Demeter-Project" rel='RepoLink' target="_blank" className="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div id='fitCard' className="col-lg-4 col-sm-4">
                    <div  id= 'portCards' className="card" style={{ width: '18rem' }}>
                        <img src={FitnT} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className="card-title">Fitness Tracker</h3>
                            <p className="card-text">Great way to log and develop your fitness routine.</p>
                            <a href="https://amac-fitness-tracker.herokuapp.com/" rel='DeployLink' target="_blank" className="btn btn-success">Click Here</a>
                            <a href='https://github.com/aroseca15/fitness_tracker' rel='RepoLink' target="_blank" className="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div  id= 'portCards' className="card" style={{ width: '18rem' }}>
                        <img src={burgEat} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className="card-title">burger Eatathon</h3>
                            <p className="card-text">Create, Eat, Compost Burger Creations.</p>
                            <a href="http://burgereatathon-env.eba-5cpkybeh.us-east-2.elasticbeanstalk.com/" rel='DeployLink' target="_blank" className="btn btn-success">Click Here</a>
                            <a href="https://github.com/aroseca15/burger_eatathon" rel='RepoLink' target="_blank" className="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Portfolio;