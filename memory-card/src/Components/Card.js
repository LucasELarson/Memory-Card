import React from "react";

function Card(props) {
   const{
      card: {src, title, backgroundColor, borderStyle},
      shuffle,
   } = props;

   const cardStyle = {
      backgroundColor:  backgroundColor,
      border: borderStyle,
   };
   return(
      <button
         className="card"
         style={cardStyle}
         onClick={shuffle.bind(this, title)}
      >
         <figure>
            <img src={src} alt={title}/>
            <figcaption>{title}</figcaption>
         </figure>
      </button>
   )
}

export default Card