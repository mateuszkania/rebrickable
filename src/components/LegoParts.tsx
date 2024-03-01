import React from "react";
import styled from "styled-components";

interface PartProps {
  partImgUrl: string;
  partName: string;
  partId: number | string;
  alt: string;
}

const PartContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PartImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const PartDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const LegoParts: React.FC<PartProps> = ({
  partImgUrl,
  partName,
  partId,
  alt,
}) => {
  return (
    <PartContainer>
      <PartImage src={partImgUrl} alt={alt} />
      <PartDetails>
        <div>{partName}</div>
        <div>ID: {partId}</div>
      </PartDetails>
    </PartContainer>
  );
};

export default LegoParts;
