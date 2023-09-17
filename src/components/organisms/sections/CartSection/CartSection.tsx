import React, { useState, useEffect } from 'react';
import { CartButton, Wrapper, TextWrapper, Text } from './style';
import { useAppDispatch, useSelectorTyped } from '../../../../store';




const CartSection = () => {


  return (
    <div>CartSection</div>
    // <>
    //   <Modal
    //     titleText="Корзина"
    //     buttonText={quantity ? 'Оформить' : 'Пополнить корзину'}
    //     openedModal={openedModal}
    //     onCloseModal={() => setOpenedModal(false)}
    //     contentScroll
    //     onApply={notify}
    //   >
    //     <Basket
    //       order={order}
    //       orderDataList={orderDataList}
    //       setOrderDataList={setOrderDataList}
    //     />
    //   </Modal>
    //   <Wrapper>
    //     <CartButton openedModal={openedModal} onClick={handleClick}>
    //       <i className="material-icons">shopping_cart</i>
    //       {quantity ? (
    //         <TextWrapper
    //           data-quantity
    //           minHeight={quantityWidth}
    //           cutQuantity={cutQuantity}
    //         >
    //           <Text cutQuantity={cutQuantity}>{quantity}</Text>
    //         </TextWrapper>
    //       ) : null}
    //     </CartButton>
    //   </Wrapper>
    // </>
  );
};

export {CartSection}
