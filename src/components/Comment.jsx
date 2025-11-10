import React from "react";
import "../resources/styles/Comment.css"

function Comment (props){

  return(
    <div className="main-container">
        <div className="user-pic-wrapper">
          <img className="user-pic" src={require('../resources/images/'+props.data.pic)} alt="Sample comment pic" />
        </div>
        <div className="text-container">
          <p className="user">
            {props.data.user}
             - <span className="background">{props.data.background}</span>
          </p>
          <p className="main-content">{props.data.comment}</p>
        </div>
    </div>
  );
}

export default Comment;