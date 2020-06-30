import React from "react"
import "./About.css"
import Pdf from "../../resume/WilliamGrundlerResume2020.pdf"



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
                                    William Grundler is a student in UCLA’s full-time full-stack bootcamp. For the last two years William has been a research analyst at public adjusting firm, The Greenspan Company, and is excited to dive further into the field of technology.
                                    </p>
                                    <p>
                                    Having received his Bachelor of Music from Cal State Northridge in 2015, William is a Los Angeles-based tenor, composer, and conductor who serves as Choir Director of Canoga Park Lutheran Church and a chanter at St. Michael Orthodox Church.
                                    </p>
                                    <p>
                                    His compositions, which have been performed in various churches across Southern California, including his a cappella Requiem. His Ignis Overture premiered at a concert featuring film composer Christopher Young. Two of William’s orchestral works have been performed at the recurring “Sounds of Silents” concert.
                                    </p>
                                    <p>
                                    Opera roles performed by William include Arturo in Pacific Opera Project’s Lucia di Lammermoor and Dr. S in Pasadena Opera's The Man Who Mistook His Wife for a Hat. In Autumn 2019 William made his Carnegie Hall debut performing as Il Duca and Nemorino in scenes from Rigoletto and L’elisir d’amore, respectively.
                                    </p>
                                    <p>
                                          William has performed as a soloist with the LA Jewish Symphony and Santa Clarita Master Chorale and has sung choral works with the LA Phil, the LA Master Chorale, and Long Beach Opera.
                                        </p>
                                        <p>
                                        With an extensive background in creativity and professional experience in technology, William is preparing to enter the thrilling field of web development.
                                        </p>  
                                        {/* <p>
                                          <a href={Pdf} target ="_blank" rel="noopener noreferrer">Resume</a>
                                        </p> */}
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