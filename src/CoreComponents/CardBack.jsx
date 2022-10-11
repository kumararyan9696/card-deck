import React from "react";
import { localeConstants } from "../Constants/localeConstants";
import '../index.css';

const CardBack = ({showOriginalDeck, setshowOriginalDeck}) =>
{
   const toggleDisplay = ()=>
   {
    showOriginalDeck? setshowOriginalDeck(false):setshowOriginalDeck(true);
   }
    return (
        
    <button id="cardBackButton" onClick={toggleDisplay}>
        <img className="cardbutton" alt= "CardBack" src={process.env.PUBLIC_URL+"card-back.png"}></img>
        <div> {showOriginalDeck? (localeConstants["PLAYING_CARD_TEXT"]).replace("show","hide"): localeConstants["PLAYING_CARD_TEXT"]}</div>
    </button>
        
    )
}

export default React.memo(CardBack)