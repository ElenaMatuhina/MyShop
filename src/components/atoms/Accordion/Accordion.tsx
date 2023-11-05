import React, { FC, PropsWithChildren } from 'react';

import {
  Container,
  ContainerWrapper,
  WrapperText,
  ArrowToDownWrapper,
  Text,
  ContentOwnerWrapper,
} from './style';

import { ReactComponent as ArrowToDown } from '../../atoms/Icons/commonIcons/arrow-to-down.svg';
import { ReactComponent as CartIcon } from '../../atoms/Icons/headerIcons/shopping-cart.svg';

interface IAccordionProps {
  titleText?: string | JSX.Element;
  isOpenAccordion: boolean;
  setIsOpenAccordion: (value: boolean) => void;
}

export const Accordion: FC<PropsWithChildren<IAccordionProps>> = ({
  titleText,
  isOpenAccordion,
  setIsOpenAccordion,
  children,
}) => (
  <Container>
    <ContainerWrapper onClick={() => setIsOpenAccordion(!isOpenAccordion)}>
      <WrapperText>
        <CartIcon/>
        <Text>{titleText}</Text>
      </WrapperText>
      <ArrowToDownWrapper $isOpen={isOpenAccordion}>
        <ArrowToDown />
      </ArrowToDownWrapper>
    </ContainerWrapper>
    {isOpenAccordion && (
      <ContentOwnerWrapper $opened={isOpenAccordion}>
        {children}
      </ContentOwnerWrapper>
    )}
  </Container>
);

Accordion.defaultProps = {
  titleText: '',
  isOpenAccordion: false,
  setIsOpenAccordion: () => {},
};
