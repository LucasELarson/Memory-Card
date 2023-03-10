import React from "react";

function Header(props){
   const { score, highScore } = props;

   return(
      <header className="header">
         <h1 className="title">Memory Game</h1>
         <div className="scoreBoard">
            <p className="current">Score: {score}</p>
            <p className="max">High Score: {highScore}</p>
         </div>
      </header>
   )
}

export default Header;