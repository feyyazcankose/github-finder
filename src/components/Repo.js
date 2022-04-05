import React from "react";

function Repo(props) {
  return (
    <>
      <div className="card mb-5">
          <a href={props.repo.html_url}>
          <div className="card-header">{props.repo.name}</div>
          </a>
        <div className="card-body">
            {
                props.repo.description ?
                <div>{props.repo.description }</div> :
                null
            } 
            Clone Adresi : {props.repo.clone_url}</div>
        <div className="card-footer">
          <a href={props.repo.html_url} className="btn btn-success">
              Repoya Git
          </a>
        </div>
      </div>
    </>
  );
}

export default Repo;
