
export const populateOriginalDeck=()=>
{
    let originalDeck = [];
    let suit = "";
    for (let suitCounter=1;suitCounter<=4;suitCounter++)
    {
        switch(suitCounter)
        {
            case 1 : 
            suit = "♣";
            break;

            case 2 : 
            suit = "♠";
            break;

            case 3 : 
            suit = "♥";
            break;

            case 4 : 
            suit = "♦";
            break;

            default : break;

        }
        for (let part=1; part<=13;part++ )
        {
            originalDeck.push(
                {
                    cardSuitId: suitCounter,
                    cardSuit: suit,
                    cardNumber : part 
                });
        }

        suit = "";        
    }
    return originalDeck;
}

export const shuffleDeck = (originalDeck)=>
{
    let shuffeledDeck = [...originalDeck];
    for (let i = 0; i < shuffeledDeck.length; i++)
        {              
            const random = Math.floor(Math.random() * i);
            [shuffeledDeck[i], shuffeledDeck[random]] = [shuffeledDeck[random], shuffeledDeck[i]]              
        }
        return shuffeledDeck;
}

export const drawfromOriginalDeck = (originalDeck, drawnDeck)=>
{
    
        const reducedOriginalDec = [...originalDeck];
        drawnDeck.push(reducedOriginalDec.pop());

    return [reducedOriginalDec, drawnDeck]
}

export const sortDeck=(deck)=>
{
   let sortedDeck 
    =  deck.sort((a,b)=> a.cardSuitId - b.cardSuitId ||a.cardNumber - b.cardNumber);
   return [...sortedDeck];
}