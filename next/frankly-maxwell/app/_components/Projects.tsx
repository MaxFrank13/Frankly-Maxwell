import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects () {
  return (
    <section className="page" id="projects">
      <h2>projects</h2>
      <section className="projects-content">
        <div className="project">
          <h3>Open edX Core Contributor</h3>
          <a href="https://github.com/openedx" target="_blank" aria-label="link to Open edX Github">
            <FaGithub size="40px"/>
          </a>
          <a href="https://openedx.org/" target="_blank" aria-label="link to Open edX website">
            <Image width={500} height={500} src="/images/Open-edX-logo.jpg" alt="Open edX logo" />
          </a>
          {/* <section className="tech-icons">
            <i className="devicon-handlebars-plain colored"></i>          
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>				
            <i className="devicon-express-original colored"></i>          
            <i className="devicon-sequelize-plain colored"></i>                    
            <i className="devicon-nodejs-plain colored"></i>     
          </section> */}
          <p>
            The Open edX Contributor Program is a structured initiative that encourages individuals and organizations to actively contribute to the Open edX open-source learning platform. It provides recognition, support, and collaboration opportunities for contributors across areas like code, documentation, translations, and community building. 
          </p>
        </div>
        {/* <div className="project">
          <h3>Virtual Bulletin</h3>
          <a href="https://github.com/MaxFrank13/Virtual-Bulletin" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://mysterious-meadow-53370.herokuapp.com/" target="_blank">
            <Image width={500} height={500} src="/images/Virtual-Bulletin.PNG" alt="Virtual Bulletin screenshot" />
          </a>
          <section className="tech-icons">
            <i className="devicon-handlebars-plain colored"></i>          
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>				
            <i className="devicon-express-original colored"></i>          
            <i className="devicon-sequelize-plain colored"></i>                    
            <i className="devicon-nodejs-plain colored"></i>     
          </section>
          <p>Full stack application used to store research materials that you wish to share with a group. Users are given the option to create groups and invite others to join. From there, a user can create bulletins to share with that group, where posts can be made the same way you would in the real world!</p>
        </div> */}
        {/* <div className="project">
          <h3>Frankly Blogging</h3>
          <a href="https://github.com/MaxFrank13/Frankly-Blogging" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://polar-eyrie-98965.herokuapp.com/" target="_blank" >
            <Image width={500} height={500} src="/images/Frankly-Blogging.png" alt="Weather screenshot" />
          </a>
          <section className="tech-icons">					          
            <i className="devicon-handlebars-plain colored"></i>          
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>				
            <i className="devicon-express-original colored"></i>          
            <i className="devicon-sequelize-plain colored"></i>                    
            <i className="devicon-nodejs-plain colored"></i>          
          </section>
          <p>A blog site to hold the ramblings of anything web development related. Full stack application with user authentication. Built using Handlebars for the views, Sequelize as the ORM, and Express for routing.</p>
        </div> */}
        <div className="project">
          <h3>Electric Slide</h3>
          <a href="https://github.com/MaxFrank13/Electric-Slide" target="_blank" aria-label="link to Electric Slide project">
            <FaGithub size="40px"/>
          </a>
          <a href="https://maxfrank13.github.io/Electric-Slide/" target="_blank">
            <Image width={500} height={500} src="/images/Electric-Slide.jpg" alt="Electric Slide screenshot" />
          </a>
          <section className="tech-icons">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>				         
          </section>
          <p>Platformer game created using the Canvas API. Built-in JavaScript animation functions are used to provide an interactive application without the need for third-party APIs.</p>
        </div>
        {/* <div className="project">
          <h3>Gameboy Invaders</h3>
          <a href="https://github.com/MaxFrank13/Space-Invaders" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://drive.google.com/file/d/1sj2ZZykjnb90RZKVueX0BeTUUVrHpNqb/view?usp=sharing" target="_blank">
            <video muted autoPlay loop className="video-container">
              <source src="/video/space-invaders.mp4" type="video/mp4" />
            </video>
          </a>
          <section className="tech-icons">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-threejs-original colored"></i>					
            <i className="devicon-blender-original colored"></i>					
            <i className="devicon-illustrator-plain colored"></i>          
          </section>
          <p>A 3D animation created using Blender and threeJS paired with a Space Invaders game built using HTML Canvas.</p>
        </div> */}
        {/* <div className="project">
          <h3>CarryOn</h3>
          <a href="https://github.com/MaxFrank13/CarryOn" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://maxfrank13.github.io/CarryOn/" target="_blank">
            <Image width={500} height={500} src="/images/CarryOn.png" alt="CarryOn screenshot" />
          </a>
          <section className="tech-icons">					
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>                 
          </section>
          <p>Collaborative project designed to provide users with information on a travel location. Built using the OpenTripMap and Unsplash APIs.</p>
        </div> */}
        <div className="project">
          <h3>Minesweeper</h3>
          <a href="https://github.com/MaxFrank13/Minesweeper-React" target="_blank" aria-label="link to Minesweeper project">
            <FaGithub size="40px"/>
          </a>
          <a href="https://minesweeper-react-three.vercel.app/" target="_blank" >
            <Image width={500} height={500} src="/images/Minesweeper.png" alt="Grid screenshot" />
          </a>
          <section className="tech-icons">					
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original colored"></i>           
          </section>
          <p>Minesweeper game built using React. Watch out for the mines! If you&apos;re unclear on the rules, take a look at the README in github.</p>
        </div>
      </section>
    </section>
  )
}
