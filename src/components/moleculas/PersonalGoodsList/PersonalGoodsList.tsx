import React, { FC } from 'react';
import { Card } from '../Card';
import { ItemType } from '../../../types';
import { GoodListTitle, GridContainer } from './style';

interface IPersonalGoodsListProps {
  title?: string;
  dataList: ItemType[];
  basket?: boolean;
}

const PersonalGoodsList: FC<IPersonalGoodsListProps> = ({
  title,
  dataList,
  basket = false }) => {
  return (
    <>
      {title && <GoodListTitle>{title}</GoodListTitle>}
      <GridContainer>
        {dataList.map((item) => (
          <Card key={item.id + item.price} {...item} basket={basket} />
        ))}
      </GridContainer>
    </>
    
  );
};

export { PersonalGoodsList };
