import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  margin: 0.2rem;
  padding: 0.5rem;
  display: grid;
  background-color: #1f212b;
  grid-template-columns: repeat(4, 150px);
  grid-gap: 0.5rem;
`;

export const Attribution = styled.a`
  text-decoration: none;
  color: black;
  margin: 1rem;
`;
