import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { PageWrapper } from '../PageWrapper';
import { StyleConstants } from 'styles/StyleConstants';

export function NavBar() {
  return (
    <Wrapper style={{ backgroundColor: '#183380', color: 'white' }}>
      <PageWrapper
        style={{
          display: 'flex',
          paddingTop: '11px',
          paddingBottom: '11px',
          width: '100%',
        }}
      >
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif;
  font-size: 16px;

  ${PageWrapper} {
    display: flex;
    align-items: center;
  }
`;
