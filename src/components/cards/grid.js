import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = tw(
  motion.div
)`flex flex-row flex-wrap mx-auto bg-gray-200 rounded`;
const Card = styled.div`
  ${tw`p-2.5 pl-0 pr-5 w-full sm:w-1/2 lg:w-1/3 select-none`}
`;
const CardImageAndTags = tw.div`relative`;

const CardImageHolder = tw.div`relative w-full`;
const CardImageCheat = styled.div(() => [
  css`
    padding-bottom: 56.25%;
  `,
]);
const CardImage = tw.img`absolute top-0 left-0 object-cover`;
const CardPlaceholder = tw.div`absolute w-full h-full top-0 left-0 bg-gray-50`;

const CardContent = tw.div`px-2 py-2 bg-gray-50`;
const CardTitle = styled.h5(({ loading }) => [
  tw`font-semibold text-gray-900`,
  loading && tw`text-gray-300 tracking-tight`,
]);
const NoResults = tw.div`w-full py-5 text-center`;

const LinkOrDummy = ({ loading, to, children }) => {
  return (
    <>
      {loading === 1 && <div>{children}</div>}
      {loading === 0 && <Link to={to}>{children}</Link>}
    </>
  );
};

const PLACEHOLDER_CARD = {
  src: '',
  title: '███████████',
};
const PLACEHOLDER_CARDS = [
  PLACEHOLDER_CARD,
  PLACEHOLDER_CARD,
  PLACEHOLDER_CARD,
  PLACEHOLDER_CARD,
];

const Component = ({ url, prefix, items = [], loading }) => {
  console.log(loading, items);
  let itemsToRender = loading ? PLACEHOLDER_CARDS : items;
  return (
    <Container>
      {itemsToRender.map((item, index) => {
        return (
          <Card key={index}>
            <LinkOrDummy to={`${prefix}/${item.id}`} loading={loading}>
              <CardImageAndTags>
                <CardImageHolder>
                  <CardImageCheat>
                    <CardPlaceholder></CardPlaceholder>
                    <CardImage
                      src={`${url}/${prefix}/${item.id}/preview.jpg`}
                    />
                  </CardImageCheat>
                </CardImageHolder>
              </CardImageAndTags>

              <CardContent>
                <CardTitle loading={loading}>{item.title}</CardTitle>
              </CardContent>
            </LinkOrDummy>
          </Card>
        );
      })}

      {itemsToRender.length === 0 && <NoResults>No items found.</NoResults>}
    </Container>
  );
};

export default Component;
