import { useAppDispatch, useSelectorTyped } from '../../store';
import { setToastList } from '../../reducers/toast-slice';

export const useToastListItem = () => {
  const { toastList } = useSelectorTyped(({ toast }) => toast);
  const dispatch = useAppDispatch();

  const deleteToast = (id: number) => {
    const toastListItem = toastList.filter((e) => e.id !== id);
    dispatch(setToastList(toastListItem));
  };

  return deleteToast;
};
