import React from 'react';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import BASlider from '../components/ba/slider';
import { useHistory } from 'react-router-dom';
import BackButton from '../components/button/back';
import MetaTags from 'react-meta-tags';
import Gif from '../components/gif/gif';
import Jpg from '../components/jpg/jpg';

const Container = tw.div`p-5`;
const MarkdownContainer = tw.article`w-full max-w-full`;
const Markdown = tw(ReactMarkdown)``;
const SliderContainer = tw.div``;
const Toolbar = tw.div`mb-5`;

function Component(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useMountEffect = (fun) => React.useEffect(fun, []);
  const history = useHistory();
  const [id, setId] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const url =
    window.location.href.split('/changes')[0] + process.env.PUBLIC_URL;

  const getMeta = React.useCallback(() => {
    for (const item of items) {
      if (item.type === 'meta') {
        return item;
      }
    }
    return {};
  }, [items]);

  useMountEffect(() => {
    const _id = props.match.params.id;
    setId(_id);

    fetch(`${url}/ba/${_id}/entry.json`)
      .then((response) => response.text())
      .then(async (textContent) => {
        const _items = JSON.parse(textContent);

        // load markdown
        try {
          let promises = [];
          for (const item of _items) {
            if (item.type === 'md') {
              promises.push(fetch(`${url}/ba/${_id}/${item.file}`));
            }
          }
          const responses = await Promise.all(promises);
          promises = [];
          for (const response of responses) {
            promises.push(response.text());
          }
          const contents = await Promise.all(promises);

          // add markdown to items
          let index = 0;
          for (const content of contents) {
            let i = 0;
            let j = 0;
            for (const item of _items) {
              if (item.type === 'md') {
                if (i === index) {
                  _items[j].markdown = content;
                  break;
                }
                i += 1;
              }
              j += 1;
            }
            index += 1;
          }
        } catch {
          console.error('Could not load markdown');
        }

        // finally set items
        setItems(_items);
      });
  });

  return (
    <Container>
      <MetaTags>
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={getMeta().title} />
        <meta property="og:description" content={getMeta().description} />
        <meta
          property="og:image"
          content={`${url}/ba/${id}/${getMeta().image}`}
        />
        <meta property="og:url" content={`${url}/ba/${id}`} />
      </MetaTags>

      <Toolbar>
        <BackButton
          onClick={() => {
            history.push('/');
          }}
        >
          Back
        </BackButton>
      </Toolbar>

      {items.map((item, index) => (
        <div key={index}>
          {item.type === 'md' && (
            <MarkdownContainer className="prose">
              <Markdown remarkPlugins={[gfm]}>{items[index].markdown}</Markdown>
            </MarkdownContainer>
          )}
          {item.type === 'ba' && (
            <SliderContainer>
              <BASlider
                beforeUrl={`${url}/ba/${id}/${item.beforeUrl}`}
                afterUrl={`${url}/ba/${id}/${item.afterUrl}`}
                beforeDescription={item.beforeDescription}
                afterDescription={item.afterDescription}
                centerDescription={item.centerDescription}
              />
            </SliderContainer>
          )}
          {item.type === 'gif' && (
            <Gif
              url={`${url}/ba/${id}/${item.url}`}
              description={item.description}
            />
          )}
          {item.type === 'jpg' && (
            <Jpg
              url={`${url}/ba/${id}/${item.url}`}
              description={item.description}
            />
          )}
        </div>
      ))}
    </Container>
  );
}

export default Component;
