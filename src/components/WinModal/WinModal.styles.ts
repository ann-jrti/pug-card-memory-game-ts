import styled from 'styled-components';

type Props = {
  display: boolean;
};

export const WrapperWinModal = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 30%;
  background-color: #fcfdfe;
  border: 3px solid #1F212B;
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: -webkit-box-shadow: -3px 2px 5px 0px rgba(0,0,0,0.42);
  -moz-box-shadow: -3px 2px 5px 0px rgba(0,0,0,0.42);
  box-shadow: -3px 2px 5px 0px rgba(0,0,0,0.42);
`;

export const PlayAgainBtn = styled.button`
  border: none;
  background-color: #e9d266;
  padding: 0.8rem;
  border-radius: 5px;
  color: #1f212b;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const WinTitle = styled.h1`
  margin: 0 0 25px 0;
`;
