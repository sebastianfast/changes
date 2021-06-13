import React from 'react';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
// import CardGrid from '../cards/grid';

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
  const [loading, setLoading] = React.useState(true);
  const url =
    window.location.href.split('/changes')[0] + process.env.PUBLIC_URL;

  useMountEffect(() => {
    fetch(process.env.PUBLIC_URL + listUrl)
      .then((response) => response.text())
      .then((textContent) => {
        setList(JSON.parse(textContent));
        setLoading(false);
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

      {/* <CardGrid
        url={url}
        prefix={prefix}
        items={list}
        loading={loading}
      ></CardGrid> */}
    </Container>
  );
}

export default Component;
