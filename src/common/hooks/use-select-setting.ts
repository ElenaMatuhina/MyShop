import { useAppDispatch } from '../../store';
import { ISelectOption, setSelectOption } from '../../reducers/sort-slice';

export const useSelectSetting = () => {
  const dispatch = useAppDispatch();

  const selectSetting = (selectOptionSort: ISelectOption | undefined) => {
    dispatch(setSelectOption(selectOptionSort));
  };

  return selectSetting;
};
