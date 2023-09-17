import { useAppDispatch } from '../../store';
import { removeFromBasket } from '../../reducers/basket-slice';

export const useRemoveBasket = (id: string) => {
  const dispatch = useAppDispatch();
  const removeItem = () => dispatch(removeFromBasket(id));

  return [removeItem];
};
