import React from "react";
import '../index.css';

const CardComponent = ({cardSuitId,cardSuit,cardNumber}) =>
{
    const getClassListForCard  = (cardSuitId) => 
    {
        let classes= "card";
        switch (cardSuitId)
        {
            case 1 : 
             return classes +=  " club";
            case 2 : 
                return classes += " spade";
            case 3 : 
                return classes += " heart";
            case 4 : 
                return classes += " diamond";
            default : 
                return classes 
        } 
    }

    const getTextForCardDisplay  = (cardNumber) => 
    {
        switch (cardNumber)
        {
            case 1 : 
                return "A";
            case 11 : 
                return "J" ;
            case 12 : 
                return "Q";
            case 13 : 
                return "K";           
            default : 
                return cardNumber;
        }    
    } 
    return (
        <div className= {getClassListForCard(cardSuitId)}>
            <span>{getTextForCardDisplay(cardNumber)}</span>
                <div className="center">{cardSuit}</div>
        </div>
    )
}

export default React.memo(CardComponent)