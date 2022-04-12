import styled from 'styled-components';

export const WrapperWinModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;
  background-color: #fcfdfe;
  border: 3px solid #1F212B;
  display: flex;
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
  background-color: #d6b105;
  padding: 0.5rem;
  border-radius: 5px;
  color: #1f212b;
`;

export const WinTitle = styled.h1`
  margin: 0 0 25px 0;
`;
