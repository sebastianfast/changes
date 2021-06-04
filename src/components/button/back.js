import React from 'react';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = tw.div``;
const BackButtonText = tw.span`ml-1`;

function Component({ onClick, children }) {
  return (
    <BackButton onClick={onClick}>
      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      <BackButtonText>{children}</BackButtonText>
    </BackButton>
  );
}

export default Component;
