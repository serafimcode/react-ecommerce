import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 38px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryContainer = styled.h2`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
