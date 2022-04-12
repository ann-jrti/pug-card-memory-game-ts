import React, { useState } from 'react';
import { createBoard } from './setup';
import { Grid } from './App.styles';
import { CardType } from './setup';
import { shuffleArray } from './utils';
import { Card } from './components/Card/Card';

const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );
  const wait = 1000;

  const handleCardClick = (currentCard: CardType) => {
    //flips the clicked card
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    //if is the firs card flipped we keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentCard });
      return;
    }
    // if matchs
    if (clickedCard.matchingCardId === currentCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }
    //if its not match, wait and flip back
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, wait);
    setClickedCard(undefined);
  };

  return (
    <div>
      <a href="https://www.freepik.com/vectors/pet-illustration">
        Pet illustration vector created by catalyststuff - www.freepik.com
      </a>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default App;
