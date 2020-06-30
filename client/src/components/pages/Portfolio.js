import React from "react"
import "./Portfolio.css"
import Project from "../Project"

function Portfolio(props){

    return(

        <section className="main-body">
            <div className="portfolio-container">
                <h4>Portfolio</h4>
                <hr/>
                <Project portfolio={props.portfolio} />
            </div>
        </section>
    )
}

export default Portfolio