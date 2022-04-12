import { WrapperWinModal, PlayAgainBtn, WinTitle } from './WinModal.styles';

type Props = {
  display: boolean;
};

export const WinModal: React.FC<Props> = ({ display }) => {
  return (
    <WrapperWinModal display={display}>
      <h2>🐾 🎉</h2>
      <WinTitle>VICTORY!</WinTitle>
      <PlayAgainBtn onClick={() => window.location.reload()}>
        Play again
      </PlayAgainBtn>
    </WrapperWinModal>
  );
};
