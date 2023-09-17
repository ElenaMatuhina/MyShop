import React, { useState, useEffect } from 'react';
import { Wrapper } from '../../../components/atoms/Wrapper';
import { Container } from '../../../components/atoms/Container';
import {
  FooterWrapper,
  FooterTop,
  FooterBottom,
  Ul,
  Li,
  Link,
  LinkWrapper,
  Label,
  Text,
  LabelText,
  LabelTextWrapper,
  LabelTextValue,
  PhonesTextDivide,
  FooterHh,
} from './style';

import { ReactComponent as TimeIcon } from '../../../components/atoms/Icons/footerIcons/time.svg';
import { ReactComponent as TelephoneIcon } from '../../../components/atoms/Icons/footerIcons/telephone.svg';
import { ReactComponent as MailIcon } from '../../../components/atoms/Icons/footerIcons/mail.svg';

export const Footer = () => {
  const [headerFooter, setHeaderFooter] = useState<number>(72);
  
  

  useEffect(() => {
    const header = document?.querySelector('[data-footer]');
    if (header) {
      setHeaderFooter(header.clientHeight);
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <FooterWrapper paddingBottom={headerFooter} id='contacts'>
          {' '}
          <FooterTop>
            <Ul>
              <Li>
                <Link>
                  <TimeIcon width="40px" height="40px" />
                  <Label>Ежедневно</Label>
                  <Text>9:00-21:00</Text>
                </Link>
              </Li>
              <Li>
                <Link>
                  <TelephoneIcon />
                  <Label>Телефон</Label>
                  <LabelTextWrapper>
                    <LabelText href="tel:+79779423045">+7 (977) 942-30-45</LabelText>
                    <PhonesTextDivide>/</PhonesTextDivide>
                    <LabelText href="https://t.me/eeeme4">Telegram</LabelText>
                  </LabelTextWrapper>
                </Link>
              </Li>
              <Li>
                <LinkWrapper href="mailto:e_matyuhina@inbox.ru">
                  <MailIcon />
                  <Label>E-mail</Label>
                  <LabelTextValue>e_matyuhina@inbox.ru</LabelTextValue>
                </LinkWrapper>
              </Li>
              <Li>
                <LinkWrapper
                  href="https://odintsovo.hh.ru/applicant/resumes/view?resume=f4bf6b00ff08dccf350039ed1f787532656a70"
                  target="_blank">
                  <FooterHh>hh</FooterHh>
                  <Label>HeadHunter</Label>
                  <LabelTextValue>Матюхина Елена</LabelTextValue>
                </LinkWrapper>
              </Li>
            </Ul>
          </FooterTop>
          <FooterBottom>C 2020 года It-разработчик</FooterBottom>
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};
