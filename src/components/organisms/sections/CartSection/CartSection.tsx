import React, { useEffect, useState } from 'react';
import { CartButton, Wrapper, TextWrapper, Text } from './style';
import { Modal } from '../../../atoms/Modal';
import { Basket } from '../../../moleculas/Basket';
import { useSelectorTyped } from '../../../../store';
import { useToastNotify } from '../../../../common/hooks/use-toast-notify';
import useOrderDataList from '../../../../common/hooks/use-order-data';
import { ItemType } from '../../../../types';
import { ReactComponent as CartIcon } from '../../../atoms/Icons/headerIcons/shopping-cart.svg';

export const CartSection = () => {
  const [openedModal, setOpenedModal] = useState<boolean>(false);
  const [quantityWidth, setQuantityWidth] = useState<number>(0);
  const [cutQuantity, setCutQuantity] = useState<boolean>(false);
  const { order } = useSelectorTyped(({ basket }) => basket);
  const orderDataListValue = useOrderDataList();
  const [orderDataList, setOrderDataList] = useState<ItemType[]>(orderDataListValue);

  const toastNotify = useToastNotify();

  const quantity = order.reduce((sum, el) => {
    if (el.quantity) {
      return sum + el.quantity;
    }
    return 0;
  }, 0);

  const handleClick = () => {
    setOpenedModal(true);
  };

  useEffect(() => {
    const dataQuantity = document?.querySelector('[data-quantity]');
    if (dataQuantity) {
      setQuantityWidth(dataQuantity.clientWidth);
    }
    setCutQuantity(quantity > 99);

    localStorage.setItem('basketOrderDataList', JSON.stringify(order));
  }, [quantity, order]);

  const notify = () => {
    if (quantity) {
      toastNotify({ title: 'Корзина оформлена', type: 'success' });
    }
    localStorage.setItem('basketOrderDataList', JSON.stringify(orderDataList));
    setOpenedModal(false);
  };

  return (
    <>
      <Modal
        titleText="Корзина"
        buttonText={quantity ? 'Оформить' : 'Пополнить корзину'}
        openedModal={openedModal}
        onCloseModal={() => setOpenedModal(false)}
        contentScroll
        onApply={notify}>
        <Basket order={order} orderDataList={orderDataList} setOrderDataList={setOrderDataList} />
      </Modal>
      <Wrapper>
        <CartButton $openedModal={openedModal} onClick={handleClick}>
          <CartIcon />
          {quantity ? (
            <TextWrapper data-quantity $minHeight={quantityWidth} $cutQuantity={cutQuantity}>
              <Text $cutQuantity={cutQuantity}>{quantity}</Text>
            </TextWrapper>
          ) : null}
        </CartButton>
      </Wrapper>
    </>
  );
};
