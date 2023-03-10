import React, {useState} from "react";
import CardData from "./CardData";
import Header from "./Header";

function Logic(){
   const[score, setScore] = useState(0);
   const[highScore, setHighScore] = useState(0);
   const[cardArr, addCard] =  useState([]);

   const handleScore = () => {
      setScore((prevScore) => prevScore + 1)
      if(score === 11){
         showWin()
      }
   };

   const showWin = () => {
      document.getElementById('winner').style.display = "flex"
      document.getElementById('results').style.zIndex = "1"
   }

   const showLoss = () => {
      document.getElementById('loser').style.display = "flex"
      document.getElementById('results').style.zIndex = "1"
   }

   const clearResult = () => {
      document.getElementById('onboard').style.display = "none"
      document.getElementById('loser').style.display = "none"
      document.getElementById('winner').style.display = "none"
      document.getElementById('results').style.zIndex = "-1"
   }

   const handleHighScore = () => {
      setHighScore(score)
   };

   const handleCard = (cardName) => {
      addCard((prevArr) => [...prevArr, cardName])
   };

   const reset = () => {
      
      clearResult()
      setScore(0)
      addCard([])
   };

   const shuffle = (cardName) => {
         if(!cardArr.includes(cardName)) {
            handleCard(cardName);
            handleScore();
                        
         } else {
            handleHighScore();
            showLoss()
         }
   };

   return(
      <>
         <div id="results">
            <div id="winner" className="result">YOU WIN
               <div id="resultoption">
                  <button id="replay" onClick={reset}>Play Again</button>
               </div>
            </div>
            <div id="onboard">
               <div>
               <p>Click each picture</p>
               <p>without repitition</p>
               </div>
               <div id="resultoption">
                  <button id="replay" onClick={reset}>Play</button>

               </div>
            </div>
            <div id="loser" className="result">YOU LOSE
               <p className="lossScore">Score: {score}</p>
               <div id="resultoption">
                  <button id="replay" onClick={reset}>Play Again</button>
               </div>
            </div>  
         </div>
         <Header score={score} highScore={highScore} />
         <div className="cardContainer" id="cardContainer">
            <CardData
               shuffle={shuffle}
               score={score}
               highScore={highScore}
            />
         </div>
      </>
   )
}

export default Logic