import styled from "styled-components";

interface GridProps {
  columns?: number;
  gap?: string;
}

export const Grid = styled.section<GridProps>`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: ${(props) => props.gap || "30px"};
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
`;
