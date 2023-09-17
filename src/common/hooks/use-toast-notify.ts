import { useAppDispatch, useSelectorTyped } from '../../store';
import { setToastList } from '../../reducers/toast-slice';
import { Person } from '../../components/atoms/Toast/Toast';
import { getToastDataList } from '../utils';

export interface IToastNotifyProps {
  title?: string;
  text?: string;
  type?: 'info' | 'success' | 'error';
}

export const useToastNotify = () => {
  const { toastList } = useSelectorTyped(({ toast }) => toast);
  const dispatch = useAppDispatch();

  const toastNotify = ({
    title = '',
    text = '',
    type = 'success',
  }: IToastNotifyProps) => {
    if (toastList) {
      const toastDataList: Person[] = getToastDataList({
        text: text,
        id: toastList.length + 1,
        title: title,
      });
      const toastDataListValue: Person | undefined = toastDataList.find(
        (item) => item.type === type
      );

      if (toastDataListValue) {
        dispatch(setToastList([...toastList, toastDataListValue]));
      }
    }
  };

  return toastNotify;
};
