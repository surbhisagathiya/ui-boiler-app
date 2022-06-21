import * as React from 'react';
import styled from 'styled-components/macro';
import { Img } from '@chakra-ui/react';
import logo from '../../../images/logo.png';

export function Logo() {
  return (
    <Wrapper>
      <Img src={logo} alt="Logo" w="70px" ml={5} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  margin-left: 50px;
`;

// const Title = styled.div`
//   font-size: 1.25rem;
//   color: ${p => p.theme.text};
//   font-weight: bold;
//   margin-right: 1rem;
// `;

// const Description = styled.div`
//   font-size: 0.875rem;
//   color: ${p => p.theme.textSecondary};
//   font-weight: normal;
// `;
