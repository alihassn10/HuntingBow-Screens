import React from 'react';
import styled from 'styled-components';

const Announcements = () => {
    return (
      <AnnouncementContainer>
        <AnnouncementText>
          We will be closed on Tuesday, July 4th in observation of the Independence Day and will resume normal business hours on Wednesday, July 5th.
        </AnnouncementText>
      </AnnouncementContainer>
    );
  };
  
  const AnnouncementContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnnouncementText = styled.h4`
  color: white;
  font-size: 0.9rem;

`;

  

export default Announcements