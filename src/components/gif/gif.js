import React from 'react';
import tw from 'twin.macro';

const Container = tw.div``;
const DescContainer = tw.div`w-full flex flex-row justify-center px-2 pt-1`;
const Desc = tw.span`text-sm`;
const DescCenterContainer = tw.div`flex flex-col justify-center items-center`;
const Gif = tw.img`w-full`;

function Component({ url, description }) {
  return (
    <Container>
      <Gif src={url} />
      <DescContainer>
        <DescCenterContainer>
          {description.split('|').map((item, index) => (
            <Desc key={index}>{item}</Desc>
          ))}
        </DescCenterContainer>
      </DescContainer>
    </Container>
  );
}

export default Component;
