import React from "react"


function Project(props){
  console.log(props)
   return( 
        <div className="row row-image">
          {props.portfolio.map(item=>
            <div className="col-md-6 portfolio-text-image">
              
                
                <div className="portfolio-sample">
                  <img className="img-thumbnail portfolio-image"src={item.img} alt={item.appTitle} />
                  <p>{item.description}</p>
                </div>
              <a href={item.appLink} key={item.appLink} target="_blank" rel="noopener noreferrer"><h2 className="card-text">{item.appTitle}</h2> <p></p></a>
              <a href={item.appRepo} target="_blank" rel="noopener noreferrer"><h6 className="card-text">Project Repository</h6></a>
            </div>
          )}
        </div>
   )

}

export default Project