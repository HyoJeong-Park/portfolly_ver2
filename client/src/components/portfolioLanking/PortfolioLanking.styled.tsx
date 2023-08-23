import styled from 'styled-components';
import tw from 'twin.macro';

export const PortfolioLankingWrapper = styled.div`
  
  height: 400px;
  background-color: rgb(255, 192, 203, 0.1);
  h1 {
    padding: 10px 100px;
    font-size: 2.5rem;
  }
`;

export const ProlfolioLankingItemWrapper = styled.div`
  ${tw`
  flex
  items-center
  justify-around
  `}
`;

export const PortfolioLankingItem = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  margin: 0 30px;
  border-radius: 20px;
  padding: 10px;
  display: inline-block;
  
`;