import linkedin from '../assets/images/Designbolts-Hand-Stitched-LinkedIn.ico'
import resume from '../assets/Resumes and Other/Web_Resume01192021.pdf'



// Icons that redirect to all needed links and documents
function Footer (){
  return(
<section className='container-fluid' style={ { height: 100 } } id="personalIcons">
        <div className="row justify-content-center align-items-center">
          <div className="col-fluid-12">
            <a href="https://github.com/aroseca15" target="_blank" rel= "noreferrer"><img src="https://img.icons8.com/bubbles/100/000000/github.png" alt="aroseca15" /></a>

            <a href="https://twitter.com/Amanda43372444" target="_blank" rel= "noreferrer"><img
                src="https://img.icons8.com/fluent/60/000000/twitter.png" alt= "aroseca15Twitter" /></a>

            <a href="mailto:aroseca15@gmail.com" target="_blank" rel= "noreferrer"><img src="https://img.icons8.com/nolan/64/send.png" alt="aroseca15Email" /></a>
            
            <a href={resume} target="_blank" rel= "noreferrer" ><img
                src="https://img.icons8.com/officel/60/000000/set-as-resume.png" alt="aroseca15Resume" /></a>

            <a href="https://www.linkedin.com/in/amanda-macdonald-/" target="_blank" rel= "noreferrer"><img
                src={linkedin} height="50px" width="auto" alt="aroseca15Linkedin" /></a>
          </div>
        </div>
      </section>
)
}


export default Footer;