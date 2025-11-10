import React from "react";
import "../resources/styles/Comment.css"

function Comment (){

  return(
    <div className="main-container">
        <div className="user-pic-wrapper">
          <img className="user-pic" src={require('../resources/images/doge.png')} alt="Sample comment pic" />
        </div>
        <div className="text-container">
          <p className="user">
            xX_MasterOfTheDark_Xx
             - <span className="background">Meme page Owner</span>
          </p>
          <p className="main-content">Pues la verdad que no se que hago aquí pero ya qe estoy por aquí voy a hacer spam de mi página web de memes. Nunca se pueden tener suficientes memes.</p>
        </div>
    </div>
  );
}

export default Comment;