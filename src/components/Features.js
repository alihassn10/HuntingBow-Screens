import React from "react";
import styled from "styled-components";
import { features } from "../data";
const Features = () => {
  return (
    <FeatureContainer>
      {features.map((feature) => (
        <FeatureItem key={feature.id}>
          <FeatureIcon>{feature.icon}</FeatureIcon>
          <div>
            <h3>{feature.heading}</h3>
            <p>{feature.para}</p>
          </div>
        </FeatureItem>
      ))}
    </FeatureContainer>
  );
};
const FeatureContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 7rem;
justify-content: center;
background-color: #f0f0f0;
padding: 1rem;

`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 250px;
  padding: 1rem;
  border-radius: 8px;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
    color: #555;
  }
`;

const FeatureIcon = styled.div`
  svg {
    font-size: 3rem;
    color: #555;
  }
`;

export default Features;
