import React from "react";
import styled from "styled-components";
import { Minifig } from "@/features/LegoMinifigsMysteryBox/types";

interface CardProps {
  minifig: Minifig;
  isSelected: boolean;
  onSelect: () => void;
  onShowDetails?: () => void;
}

const CardContainer = styled.div<{ isSelected: boolean }>`
  box-shadow: ${(props) =>
    props.isSelected ? "0 0 20px 10px #dd853e" : "none"};
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  background-color: ${({ theme }) => theme.colors.backgroundAlternate};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  &:hover {
    box-shadow: ${(props) =>
      props.isSelected ? "0 0 20px 10px #dd853e" : "0 0 10px 3px #dd853e"};
  }
`;

const CardImage = styled.img`
  max-width: 45%;
  height: auto;
  margin-bottom: 1em;
`;

const CardTitle = styled.h3`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.textAlternate};
  flex: 1;
`;

const CardButton = styled.a`
  padding: 0.5em 1em;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textLink};
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Card: React.FC<CardProps> = ({
  minifig,
  isSelected,
  onSelect,
}) => {
  return (
    <CardContainer isSelected={isSelected} onClick={onSelect}>
      <CardImage src={minifig.set_img_url} alt={minifig.name} />
      <CardTitle>{minifig.name}</CardTitle>
      <CardButton
        href={minifig.set_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Show details
      </CardButton>
    </CardContainer>
  );
};
