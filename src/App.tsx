import React, { useState, useEffect } from 'react';
import { createBoard, CardType } from './setup';
import { Grid, Attribution, GridContainer } from './App.styles';
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

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
    }
  }, [matchedPairs]);

  const wait = 1000;

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
      <GridContainer>
        <Grid>
          {cards.map((card) => (
            <Card key={card.id} card={card} callback={handleCardClick} />
          ))}
        </Grid>
      </GridContainer>
      <Attribution
        target="_blank"
        href="https://www.freepik.com/vectors/pet-illustration"
      >
        Back card image illustration created by catalyststuff - www.freepik.com
      </Attribution>
      <WinModal display={gameWon} />
    </div>
  );
};

export default App;
