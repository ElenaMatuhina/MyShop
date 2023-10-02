import { useAppDispatch } from '../../store';
import {
  ISelectOption,
  setMultipleSelectOption,
} from '../../reducers/sort-slice';

export const useMultipleSelect = () => {
  const dispatch = useAppDispatch();

  const multipleSelect = (selectOptionMultiple: ISelectOption[]) => {
    dispatch(setMultipleSelectOption(selectOptionMultiple));
  };

  return multipleSelect;
};
