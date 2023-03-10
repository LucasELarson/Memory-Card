import React, { useState, useEffect } from "react";
import Card from "./Card";
import boba from "../images/boba.jpg"
import chickenRice from "../images/chicken-rice.png"
import crawfish from "../images/crawfish.png"
import curry from "../images/curry.jpg"
import dimsum from "../images/dimsum.jpg"
import hotpot from "../images/hotpot.jpg"
import matcha from "../images/matcha.jpg"
import ramen from "../images/ramen.jpg"
import steak from "../images/steak.png"
import sushi from "../images/sushi.png"
import takoyaki from "../images/takoyaki.jpg"
import zongzi from "../images/zongzi.jpg"

function CardData(props) {
   const { shuffle, score, highScore } = props;

   let images = [
      {
         title: 'Boba',
         src: boba,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Chicken',
         src: chickenRice,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Crawfish',
         src: crawfish,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Curry',
         src: curry,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Dimsum',
         src: dimsum,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Hotpot',
         src: hotpot,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Matcha',
         src: matcha,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Ramen',
         src: ramen,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Steak',
         src: steak,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Sushi',
         src: sushi,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Takoyaki',
         src: takoyaki,
         borderStyle: '1px solid rgb(54, 54, 54)',
      },
      {
         title: 'Zongzi',
         src: zongzi,
         borderStyle: '1px solid rgb(54, 54, 54)',
      }
   ];

   const [cards, setNewCards] = useState(images);

   const mix = (newCards) => {
      for(let i = newCards.length - 1; i >0; i--){
         let randomized = Math.floor(Math.random() * i);
         [newCards[randomized], newCards[i]] = [newCards[i], newCards[randomized]];
      }
   };

   useEffect(() => {
      const newCards = [...cards];
      mix(newCards);
      setNewCards(newCards);
   }, [score, highScore]);

   return(
      <>
         {cards.map((card) => (
            <Card card={card} key={card.title} shuffle={shuffle}/>
         ))}
      </>
   )
}

export default CardData