import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Menu = tw(
  motion.div
)`fixed top-0 left-full h-screen w-48 pt-5 px-5 flex flex-col justify-start items-center bg-gray-500 z-10`;
const MenuButton = styled.input.attrs(() => ({ type: 'button' }))(() => [
  tw`absolute top-5 right-5 px-4 pb-1 text-black border-2 border-black`,
]);
const MenuItem = tw.div`mt-2`;
const CloseButton = styled.input.attrs(() => ({ type: 'button' }))(() => [
  tw`px-4 pb-1 text-black border-2 border-black mb-5`,
]);

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

function Component() {
  const [state, dispatch] = useMachine(MenuMachine, {
    services: { openMenu, closeMenu },
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
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </>
  );
}

export default Component;
