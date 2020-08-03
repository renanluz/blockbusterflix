import React from 'react';

import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 5px;
    padding-left: 10%;
    padding-right: 10%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll}
    `}
`;

export default function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}
