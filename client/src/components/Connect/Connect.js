  
import React from "react";
import "./Connect.css"
import PDF from "../resume/WRGrundlerResume2020.pdf"

function Connect(){

    return(

        <span>
              <a href="https://www.linkedin.com/in/william-grundler-249154156/" id="linkedin" target="_blank" title="Linkedin Profile" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
              <a href="https://github.com/wrg93" target="_blank" id="github" title="Github" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x"></i></a>
              <a href={PDF} target="_blank" title="resume"rel="noopener noreferrer"><i className="fa fa-file fa-3x"></i></a>
                
        </span>
    )



}

export default Connect