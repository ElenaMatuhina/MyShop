import { Wrapper } from '../../atoms/Wrapper';
import { Container } from '../../atoms/Container';
import { Logo } from '../../atoms/Logo';
import { Contact } from '../../atoms/Contact';
import { SearchInput } from '../../atoms/SearchInput';
import { HeaderTop, HeaderMain, WrapperHeader, HideMobile } from './style';

export const Header = () => {
  return (
    <WrapperHeader data-header>
      <Wrapper>
        <Container padding="10px 20px">
          <HeaderTop>
            <Logo />
            <HeaderMain>
              <HideMobile>
                <SearchInput/>
                <Contact />
              </HideMobile>
            </HeaderMain>
          </HeaderTop>
        </Container>
      </Wrapper>
    </WrapperHeader>
  );
};
