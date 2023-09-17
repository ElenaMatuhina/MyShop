import { useAppDispatch } from '../../store';
import { incQuantity } from '../../reducers/basket-slice';

export const useIncQuan = (id: string) => {
  const dispatch = useAppDispatch();

  const incQuan = () => {
    dispatch(incQuantity(id));
  };
  return [incQuan];
};
