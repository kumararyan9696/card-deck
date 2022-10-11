import React, { useState } from "react";
import CardComponent from "./CoreComponents/CardComponent";
import CardBack from "./CoreComponents/CardBack";
import {
  populateOriginalDeck,
  shuffleDeck,
  drawfromOriginalDeck,
  sortDeck
} from "./Utility/utility";
import { localeConstants } from "./Constants/localeConstants";

import './index.css'

function App() {

  let [originalDeck, setOriginalDeck] = useState(populateOriginalDeck());
  let [showOriginalDeck, setshowOriginalDeck] = useState(false);
  
  let [drawnDeck, setDrawnDeck] = useState([]);
  let [showdrawnDeck, setshowdrawnDeck] = useState(true);


  const handleDraw = () => {
    const [reducedOriginalDeck, newDrawnDeck] = drawfromOriginalDeck(originalDeck, drawnDeck);
    setOriginalDeck(reducedOriginalDeck);
    setDrawnDeck(newDrawnDeck);
  }

  const handleReset = () => {
    setDrawnDeck([]);
    setOriginalDeck(populateOriginalDeck());
    setshowOriginalDeck(false);
  }

  const getDisable = () => {
    return originalDeck.length === 0
  }
  return (
    <>
      <div id="originalDeckSection">
        <span className="title"> {localeConstants["ORIGINAL_DECK_TITLE"]} </span>
        <div className="carddivCenter">
          {
            originalDeck.length > 0 && <CardBack showOriginalDeck={showOriginalDeck} setshowOriginalDeck={setshowOriginalDeck} />
          }
          <button id="shuffleCardButton" onClick={() => setOriginalDeck(shuffleDeck(originalDeck))} disabled={getDisable()} >{localeConstants["SHUFFLE_DECK_TEXT"]}</button>
          <button id="drawCardButton" data-testid="drawCardButton" onClick={handleDraw} disabled={getDisable()} >{localeConstants["DRAW_CARD_TEXT"]}</button>
        </div>

        <div>
          {
            showOriginalDeck && originalDeck.length > 0 && originalDeck.map((card, index) => { return <CardComponent key={index} cardSuitId={card.cardSuitId} cardSuit={card.cardSuit} cardNumber={card.cardNumber} /> })
          }
        </div>
        <div className="carddivCenter">
          {originalDeck.length === 0 && localeConstants["NO_CARDS_ORIGINAL_DECK_TEXT"]}
        </div>

      </div>



      <div id="drawnDeckSection" >
        <span className="title"> {localeConstants["DRAWN_CARDS_TEXT"]}</span>
        <div className="carddivCenter">
          {drawnDeck.length > 0 && <button id="resetButton" data-testid="resetButton" onClick={handleReset}>{localeConstants["RESET_TEXT"]}</button>}
          {drawnDeck.length > 1 && <button id="sortButton" onClick={() => setDrawnDeck(sortDeck(drawnDeck))}>{localeConstants["SORT_TEXT"]}</button>}
        </div>

        <div data-testid="drawCard-container">
          {showdrawnDeck && drawnDeck.length > 0 && drawnDeck.map((card, index) => { return <CardComponent key={index} cardSuitId={card.cardSuitId} cardSuit={card.cardSuit} cardNumber={card.cardNumber} /> })}
        </div>

        <div className="carddivCenter">
          {drawnDeck.length === 0 && localeConstants["NO_CARDS_DRAWN_DECK_TEXT"]}
        </div>
      </div>
    </>
  );
}

export default App;
