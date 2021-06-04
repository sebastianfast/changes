import React from 'react';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import BASlider from '../components/ba/slider';
import { useHistory } from 'react-router-dom';
import BackButton from '../components/button/back';
import MetaTags from 'react-meta-tags';

const Container = tw.div`p-5`;
const MarkdownContainer = tw.article`w-full max-w-full`;
const Markdown = tw(ReactMarkdown)``;
const SliderContainer = tw.div``;
const Toolbar = tw.div`mb-5`;

function Component(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useMountEffect = (fun) => React.useEffect(fun, []);
  const history = useHistory();
  const [baseUrl, setBaseUrl] = React.useState('');
  const [items, setItems] = React.useState([]);
  const url = window.location.href.split('/changes')[0];

  const getMeta = React.useCallback(() => {
    for (const item of items) {
      if (item.type === 'meta') {
        console.log(item);
        return item;
      }
    }
    return {};
  }, [items]);

  useMountEffect(() => {
    const comparsionId = props.match.params.id;
    const _baseUrl = `${process.env.PUBLIC_URL}/comparisons/${comparsionId}`;
    setBaseUrl(_baseUrl);

    fetch(`${_baseUrl}/entry.json`)
      .then((response) => response.text())
      .then(async (textContent) => {
        const _items = JSON.parse(textContent);

        // load markdown
        try {
          let promises = [];
          for (const item of _items) {
            if (item.type === 'md') {
              promises.push(fetch(`${_baseUrl}/${item.file}`));
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
          content={`${url}${baseUrl}/${getMeta().image}`}
        />
        <meta property="og:url" content={url + baseUrl} />
      </MetaTags>

      <Toolbar>
        <BackButton
          onClick={() => {
            history.goBack();
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
                beforeUrl={`${baseUrl}/${item.beforeUrl}`}
                afterUrl={`${baseUrl}/${item.afterUrl}`}
                beforeDescription={item.beforeDescription}
                afterDescription={item.afterDescription}
                centerDescription={item.centerDescription}
              />
            </SliderContainer>
          )}
        </div>
      ))}
    </Container>
  );
}

export default Component;
