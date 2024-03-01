import styled from "styled-components";

export const Sidebar = styled.section`
  margin: 0 auto;
  gap: 10px;
  display: flex;
  background: ${({ theme }) => theme.colors.backgroundAlternate};
  color: ${({ theme }) => theme.colors.textAlternate};
  padding: 50px;
  border-radius: 40px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
