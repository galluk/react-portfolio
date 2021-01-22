import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">   
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
        <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
          <li>
            {props.blurb}
          </li>
          <li>
            {props.appText}<a href={props.appLink}>here</a>.
          </li>
          <li>
            {props.gitText}<a href={props.gitLink}> github page</a>.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
