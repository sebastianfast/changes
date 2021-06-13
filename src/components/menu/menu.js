import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Menu = tw(
  motion.div
)`fixed top-0 left-full h-screen md:w-96 w-56 pt-5 px-5 flex flex-col justify-start items-center bg-gray-500 z-10`;
const MenuButton = styled.input.attrs(() => ({ type: 'button' }))(() => [
  tw`absolute top-5 right-5 px-4 pb-1 text-black border-2 border-black`,
]);
const CloseButton = styled.input.attrs(() => ({ type: 'button' }))(() => [
  tw`px-4 pb-1 text-black border-2 border-black mb-5`,
]);
const LinkList = tw.ul`relative`;
const ListItem = tw.li`mt-2`;
const ItemLink = tw(Link)``;

export const menuMachineDefinition = {
  initial: 'closed',
  states: {
    closing: {
      invoke: {
        src: 'closeMenu',
        onDone: { target: 'closed' },
      },
      on: {
        OPEN: 'opening',
      },
    },
    closed: {
      on: {
        OPEN: 'opening',
      },
    },
    opening: {
      invoke: {
        src: 'openMenu',
        onDone: { target: 'open' },
      },
      on: {
        CLOSE: 'closing',
      },
    },
    open: {
      on: {
        CLOSE: 'closing',
      },
    },
  },
};

const MenuMachine = Machine(menuMachineDefinition);

const openMenu = async () => {
  return;
};

const closeMenu = async () => {
  return;
};

function Component({ prefix, listUrl }) {
  const [state, dispatch] = useMachine(MenuMachine, {
    services: { openMenu, closeMenu },
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useMountEffect = (fun) => React.useEffect(fun, []);
  const [list, setList] = React.useState([]);

  useMountEffect(() => {
    fetch(process.env.PUBLIC_URL + listUrl)
      .then((response) => response.text())
      .then((textContent) => {
        setList(JSON.parse(textContent));
      });
  });

  return (
    <>
      <MenuButton
        value="Menu"
        data-testid="menu-open"
        onClick={() => {
          dispatch('OPEN');
        }}
      />
      <Menu
        data-testid="menu"
        data-state={state.value}
        animate={{
          right: state.matches('open') ? 0 : 'auto',
          left: state.matches('open') ? 'auto' : '100%',
        }}
        transition={{ type: 'tween' }}
      >
        <CloseButton
          value="close"
          data-testid="menu-close"
          onClick={() => {
            dispatch('CLOSE');
          }}
        />

        <LinkList>
          {list.map((item, index) => (
            <ListItem key={index}>
              <ItemLink to={`${prefix}/${item.id}`}>{item.title}</ItemLink>
            </ListItem>
          ))}
        </LinkList>
      </Menu>
    </>
  );
}

export default Component;
