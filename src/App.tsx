import React, { useState, useEffect } from 'react';
import { createBoard } from './setup';
import { Grid } from './App.styles';
import { CardType } from './setup';
import { shuffleArray } from './utils';
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { WinModal } from './components/WinModal/WinModal';

const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );
  const displayWin = () => {};

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log('game won');
      setGameWon(true);
    }
  }, [matchedPairs]);

  const wait = 800;

  const handleCardClick = (currentCard: CardType) => {
    //flips the clicked card
    setCards((prev) =>
      prev.map((card) => {
        return card.id === currentCard.id
          ? { ...card, flipped: true, clickable: false }
          : card;
      })
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
      <Header></Header>

      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
      <a href="https://www.freepik.com/vectors/pet-illustration">
        Back card image illustration created by catalyststuff and retrieved from
        www.freepik.com
      </a>
      {gameWon ? <WinModal></WinModal> : null}
    </div>
  );
};

export default App;
