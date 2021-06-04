import React from 'react';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { Link } from 'react-router-dom';

const Container = tw.div`p-5`;
const MarkdownContainer = tw.article`w-full max-w-full`;
const Markdown = tw(ReactMarkdown)``;
const ItemLink = tw(Link)``;

function Component({ prefix, listUrl, markdownUrl }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useMountEffect = (fun) => React.useEffect(fun, []);
  const [list, setList] = React.useState([]);
  const [markdown, setMarkdown] = React.useState();

  useMountEffect(() => {
    fetch(process.env.PUBLIC_URL + listUrl)
      .then((response) => response.text())
      .then((textContent) => {
        setList(JSON.parse(textContent));
      });

    fetch(process.env.PUBLIC_URL + markdownUrl)
      .then((response) => response.text())
      .then((textContent) => {
        setMarkdown(textContent);
      });
  });

  return (
    <Container>
      <MarkdownContainer className="prose">
        <Markdown remarkPlugins={[gfm]}>{markdown}</Markdown>
      </MarkdownContainer>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <ItemLink to={`${prefix}/${item.id}`}>{item.title}</ItemLink>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Component;
