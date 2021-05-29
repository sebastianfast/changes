import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

// import SliderBnA from '../../bna/SliderBnA';
import SliderBnA from 'react-bna';

const Container = tw.div``;
const Slider = styled(SliderBnA)`
  ${tw``}
`;
const DescContainer = tw.div`w-full flex flex-row justify-between px-2 pt-1`;
const Desc = tw.span`text-sm`;

function Component({
  beforeUrl,
  afterUrl,
  beforeDescription,
  afterDescription,
  centerDescription,
}) {
  let state = {
    showControls: true,
    divisorBorder: true,
    before: process.env.PUBLIC_URL + beforeUrl,
    after: process.env.PUBLIC_URL + afterUrl,
    errorImage: 'https://media.giphy.com/media/pyqqSHqdekwVi/giphy.gif',
    alt: 'Before or after image',
    before_error: false,
    after_error: false,
    before_loaded: false,
    after_loaded: false,
    before_image_status: 'loading',
    after_image_status: 'loading',
  };
  const {
    showControls,
    imageHeight,
    divisorBorder,
    after,
    before,
    errorImage,
    alt,
  } = state;

  return (
    <Container>
      <Slider
        before={before}
        after={after}
        showControls={showControls}
        imageHeight={imageHeight}
        divisorBorder={divisorBorder}
        alt={alt}
        errorImage={errorImage}
      />
      <DescContainer>
        <Desc>{beforeDescription}</Desc>
        <Desc>{centerDescription}</Desc>
        <Desc>{afterDescription}</Desc>
      </DescContainer>
    </Container>
  );
}

export default Component;
