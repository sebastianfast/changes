import React from 'react';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import BASlider from '../bna/slider';

const Container = tw.div`p-5`;
const MarkdownContainer = tw.article`w-full max-w-full`;
const Markdown = tw(ReactMarkdown)``;
const SliderContainer = tw.div``;

function Component({
  markdownUrl,
  beforeUrl,
  afterUrl,
  beforeDescription,
  afterDescription,
  centerDescription,
}) {
  const [markdown, setMarkdown] = React.useState();
  fetch(markdownUrl)
    .then((response) => response.text())
    .then((textContent) => {
      setMarkdown(textContent);
    });

  return (
    <Container>
      <MarkdownContainer className="prose">
        <Markdown remarkPlugins={[gfm]}>{markdown}</Markdown>
      </MarkdownContainer>
      <SliderContainer>
        <BASlider
          beforeUrl={beforeUrl}
          afterUrl={afterUrl}
          beforeDescription={beforeDescription}
          afterDescription={afterDescription}
          centerDescription={centerDescription}
        />
      </SliderContainer>
    </Container>
  );
}

export default Component;
