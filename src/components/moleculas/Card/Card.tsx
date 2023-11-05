import React, { useEffect, useState } from 'react';
import { ItemType } from '../../../types';
import { IconResult } from '../../atoms/IconResult';
import { useAddGoods } from '../../../common/hooks/use-add-goods';
import { Spinner } from '../../atoms/Spinner';


import {
  CardWrapper,
  WrapperButton,
  WrapperText,
  TextTitle,
  Text,
  TextPrice,
  ButtonShopping,
  ButtonShoppingWrapper,
  SpinnerWrapper,
} from './style';
import { useToastNotify } from '../../../common/hooks/use-toast-notify';
import { useRemoveBasket } from '../../../common/hooks/use-remove-basket';
import { useGoods } from '../../../common/hooks/use-loading-goods';

const Card = ({
  id,
  name,
  description,
  price,
  full_background,
  quantity,
  basket = false,
}: ItemType) => {
  const [addGoods] = useAddGoods({
    id,
    name,
    price,
    quantity,
    description,
    full_background,
    basket,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [iconError, setIconError] = useState<boolean>(false);
  const [cardWidth, setCardWidth] = useState<number>(0);
  const [removeItem] = useRemoveBasket(id);
  const [goodsDataList, basketDataList] = useGoods();

  const toastNotify = useToastNotify();

  const notify = (basket: boolean) => {
    const titleText = basket ? 'Удалено из карзины' : 'Добавлено в карзину';
    toastNotify({ title: titleText, text: name, type: 'success' });
  };

  const getImage = async (full_background: string) => {
    const img = document.createElement('img');
    img.src = full_background;

    setLoading(true);
    img.onload = await function () {
      setLoading(false);
    };

    img.onerror = await function () {
      setIconError(true);
      setLoading(false);
    };
  };

  const card = document?.querySelector('[data-card]');

  useEffect(() => {
    if (card) {
      setCardWidth(card.clientWidth);
    }
    getImage(full_background);
  }, [full_background, card]);

  if (!name) {
    return null;
  }

  const goodsListWithoutBasket =
    basketDataList.length !== 0
      ? goodsDataList.filter(
          (item) => !basketDataList.map((itemF) => itemF.id).includes(item.id)
        )
      : goodsDataList;
  const buyGoods = goodsListWithoutBasket.map((item) => item.id).includes(id);
  const textValue = buyGoods ? 'Купить' : 'В корзине';
  const priceValue = price || 0;

  return (
    <CardWrapper loading={loading ? loading.toString() : undefined} data-card>
      {loading ? (
        <SpinnerWrapper $minHeight={cardWidth}>
          <Spinner size="medium" />
        </SpinnerWrapper>
      ) : (
        <IconResult
          fullBackground={full_background}
          name={name}
          minHeight={cardWidth}
          iconError={iconError}
        />
      )}
      <WrapperText>
        <TextTitle>{name}</TextTitle>
        <Text>{description}</Text>
      </WrapperText>
      <WrapperButton>
        <ButtonShoppingWrapper onClick={() => notify(basket)}>
          <ButtonShopping
            $selectedProduct={!basket && !buyGoods}
            onClick={basket ? removeItem : addGoods}
          >
            <svg
              width="120px"
              height="40px"
              viewBox="0 0 120 40"
         
            >
              <polyline
                points="119,1 119,39 1,39 1,1 119,1"
              
              />
              <polyline
                points="119,1 119,39 1,39 1,1 119,1"
               
              />
            </svg>
            <span>{basket ? 'Удалить' : textValue}</span>
          </ButtonShopping>
        </ButtonShoppingWrapper>
        <TextPrice>{priceValue} ₽</TextPrice>
      </WrapperButton>
    </CardWrapper>
  );
};


export { Card };
