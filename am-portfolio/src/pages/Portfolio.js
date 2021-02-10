import PassGen from '../assets/images/Password_Generator.png';
import DPrep from '../assets/images/Project1_Pic.png';
import DayP from '../assets/images/Day__Planner.png';
import P2 from '../assets/images/P2_Screenshot.png';
import FitnT from '../assets/images/fitness_tracker.png';
import comeS from '../assets/images/Coming SoonA.png';
function Portfolio() {
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
                <div class="col-lg-4 col-sm-4">
                    <div  id= 'portCards' class="card" style={{ width: '18rem' }}>
                        <img src={PassGen} class="card-img-top" alt="Password Generator"></img>
                        <div class="card-body">
                            <h5 class="card-title">Password_Generator</h5>
                            <p class="card-text">Generate a Safe Password!</p>
                            <a href=" https://aroseca15.github.io/Password_Generator_HW3/" rel='DeployLink' target="_blank" class="btn btn-success">Click Here</a>
                            <a href="https://github.com/aroseca15/Password_Generator_HW3" target="_blank" class="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <div  id= 'portCards' class="card" style={{ width: '18rem' }}>
                        <img src={DPrep} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Disater Preparedness</h5>
                            <p class="card-text">Get all of the information you need for every type of Natural Disater in the USA!</p>
                            <a href="https://aroseca15.github.io/Disaster-Ready/" rel='DeployLink' target="_blank" class="btn btn-success">Click Here</a>
                            <a href="https://github.com/aroseca15/Disaster-Ready" rel='RepoLink' target="_blank" class="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <div  id= 'portCards' class="card" style={{ width: '18rem' }}>
                        <img src={DayP} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Day Planner</h5>
                            <p class="card-text">Planning Your Day Just Got Easier!</p>
                            <a href="https://aroseca15.github.io/Work_Day_Planner/" rel='DeployLink' target="_blank" class="btn btn-success">Click Here</a>
                            <a href="https://github.com/aroseca15/Work_Day_Planner" rel='RepoLink' target="_blank" class="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='row'>
                <div class="col-lg-4 col-sm-4">
                    <div id= 'portCards' class="card" style={{ width: '18rem' }}>
                        <img src={P2} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Manageer ERP</h5>
                            <p class="card-text">MVP Employee Management App</p>
                            <a href="https://polar-dawn-89598.herokuapp.com/" rel='DeployLink' target="_blank" class="btn btn-success">Click Here</a>
                            <a href="https://github.com/poserposer13/Demeter-Project" rel='RepoLink' target="_blank" class="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <div  id= 'portCards' class="card" style={{ width: '18rem' }}>
                        <img src={FitnT} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Fitness Tracker</h5>
                            <p class="card-text">Great way to log and develop your fitness routine.</p>
                            <a href="https://amac-fitness-tracker.herokuapp.com/" rel='DeployLink' target="_blank" class="btn btn-success">Click Here</a>
                            <a href='https://github.com/aroseca15/fitness_tracker' rel='RepoLink' target="_blank" class="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <div  id= 'portCards' class="card" style={{ width: '18rem' }}>
                        <img src={comeS} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Coming Soon!</h5>
                            <p class="card-text">Space for future accomplishments.</p>
                            <a href="#" rel='DeployLink' target="_blank" class="btn btn-success">Click Here</a>
                            <a href="#" rel='RepoLink' target="_blank" class="btn btn-primary">Git Hub</a>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Portfolio;