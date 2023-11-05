import React from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { Container } from '../../atoms/Container';
import { HeaderTop, HeaderMain, WrapperHeader } from './style';

import { SearchInput } from '../../atoms/SearchInput';
import { Contact } from '../../atoms/Contact';

export const FooterNawMobile = () => {
  return (
    <WrapperHeader data-footer>
      <Wrapper>
        <Container $padding="14px 20px">
          <HeaderTop>
            <SearchInput />
            <HeaderMain>
              <Contact />
            </HeaderMain>
          </HeaderTop>
        </Container>
      </Wrapper>
    </WrapperHeader>
  );
};
