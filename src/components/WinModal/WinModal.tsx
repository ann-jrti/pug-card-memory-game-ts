import { WrapperWinModal, PlayAgainBtn, WinTitle } from './WinModal.styles';

export const WinModal = () => {
  return (
    <WrapperWinModal>
      <h2>🐾 🎉</h2>
      <WinTitle>VICTORY!</WinTitle>
      <PlayAgainBtn onClick={() => window.location.reload()}>
        Play again
      </PlayAgainBtn>
    </WrapperWinModal>
  );
};
