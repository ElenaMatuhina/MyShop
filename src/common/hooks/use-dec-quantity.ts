import { useAppDispatch } from '../../store';
import { decQuantity } from '../../reducers/basket-slice';

export const useDecQuantity = (id: string) => {
  const dispatch = useAppDispatch();
  const decQuan = () => dispatch(decQuantity(id));
  return [decQuan];
};
