import { useAppDispatch } from '../../store';
import { addToBasket } from '../../../src/reducers/basket-slice';
import { ItemType } from '../../types';

export const useAddGoods = (item: ItemType) => {
  const dispatch = useAppDispatch();

  const addGoods = () => {
    dispatch(addToBasket(item));
  };
  return [addGoods];
};
