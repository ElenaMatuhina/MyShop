import { WrapperContact, CartButton } from './style';
import { ReactComponent as PhoneIcon } from '../../../components/atoms/Icons/headerIcons/phone.svg';

export const Contact = () => (
  <WrapperContact>
    <CartButton href="#contacts">
      <PhoneIcon/>
    </CartButton>
  </WrapperContact>
);
