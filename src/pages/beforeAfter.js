import React from 'react';
import tw from 'twin.macro';
import BASlider from '../components/ba/slider';
import { useHistory } from 'react-router-dom';
import BackButton from '../components/button/back';

const Container = tw.div`p-5`;
const SliderContainer = tw.div``;
const Toolbar = tw.div`mb-5`;

function Component(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useMountEffect = (fun) => React.useEffect(fun, []);
  const history = useHistory();
  const [id, setId] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const url =
    window.location.href.split('/changes')[0] + process.env.PUBLIC_URL;

  useMountEffect(() => {
    const _id = props.match.params.id;
    const _name = props.match.params.name;
    setId(_id);
    setName(_name);

    fetch(`${url}/ba/${_id}/entry.json`)
      .then((response) => response.text())
      .then(async (textContent) => {
        const _items = JSON.parse(textContent);
        setItems(_items);
      });
  });

  return (
    <Container>
      <Toolbar>
        <BackButton
          onClick={() => {
            history.push(`/ba/${id}`);
          }}
        >
          Back
        </BackButton>
      </Toolbar>

      {items.map((item, index) => (
        <div key={index}>
          {item.type === 'ba' && item.name === name && (
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
        </div>
      ))}
    </Container>
  );
}

export default Component;
