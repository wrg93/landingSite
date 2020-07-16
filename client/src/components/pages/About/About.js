import React from "react"
import "./About.css"




function About(){

    return(
      <div>
      <section className="main-body">
      <div className="container">
        <div className="row">
            <div className="card border-dark mb-3">
                
                    <div className="card-header">About Me
                    </div>
                    <div className="card-body text-dark">
                        <div className="row">
                            <div className="col-lg-4 col-xs-12">
                                <img className="img-fluid"   alt="William Grundler headshot" src="../../images/WRGheadshot.jpg"></img>
                            </div>
                            <div className="col-lg-8">
                                <p className="card-text">
                                I am a full stack web developer utilizing my background in opera and research analysis to creatively develop and integrate back-end programming
                                    </p>
                                    <p>
                                    Recently I earned a certificate in full stack development from the University of California, Los Angeles, with newly developed skills in JavaScript, MongoDB, MySQL, Node.js, and React. 
                                    </p>
                                    <p>
                                    Through my work I have demonstrated an ability to create and integrate databases in various libraries.
                                    </p>
                                    <p>
                                    I worked on a team of four to develop a MERN social networking application for dog owners wherein I developed and integrated the back-end and implemented Redux to handle state throughout the app.
                                    </p>
                                    <p>I also worked on a team of three developers using Sequelize in an app which helps parents create personalized stories to read to their children.</p>
                                    <p>
                                          As a musician I have performed as a soloist with the LA Jewish Symphony and Santa Clarita Master Chorale and has sung choral works with the LA Phil, the LA Master Chorale, and Long Beach Opera.
                                        </p>
                                      <p>In the acquisition of my musical achievements I have learned to sing in Italian, French, German, Russian, Spanish, Korean, Hebrew, Greek, and Arabic. </p>
                                        <p>
                                        With a proven aptitude for learning languages and data analysis, I am excited to work with a creative and driven team. 
                                        </p>  
                                  
                            </div>
                        </div>
                    </div>    
            </div>
        </div>
    </div> 
    </section>
    </div>
  )
  }
  
  export default About