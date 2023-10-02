import React, { useCallback, useEffect, useState } from 'react';

import { SettingIconWrapper, SettingWrapper, Wrapper } from './style';

import { ReactComponent as SettingIcon } from '../../../atoms/Icons/commonIcons/setting.svg';
import { Modal } from '../../../atoms/Modal';
import { SelectSection } from '../../../moleculas/SelectSection';
import {
  SELECT_GOODS_LIST,
  SELECT_PRICE,
} from '../../../../common/constants/settings';
import { useSelectSetting } from '../../../../common/hooks/use-select-setting';
import { useToastNotify } from '../../../../common/hooks/use-toast-notify';
import { useSelectorTyped } from '../../../../store';
import { useMultipleSelect } from '../../../../common/hooks/use-multiple-select';
import { ISelectOption } from '../../../../reducers/sort-slice';

export const SettingSection = () => {
  const { multipleSelectOption, selectOption } = useSelectorTyped(
    ({ sort }) => sort
  );
  const [selectOptionMultiple, setSelectOptionMultiple] = useState<
    ISelectOption[]
  >([]);
  const [selectOptionSort, setSelectOptionSort] = useState<
    ISelectOption | undefined
  >(undefined);

  const [openedModal, setOpenedModal] = useState(false);
  const selectSetting = useSelectSetting();
  const multipleSelect = useMultipleSelect();
  const toastNotify = useToastNotify();

  const localStorageSelectOptionMultiple = localStorage.getItem(
    'selectOptionMultiple'
  );
  const localStorageSelectOptionSort = localStorage.getItem('selectOptionSort');

  useEffect(() => {
    if (localStorageSelectOptionMultiple) {
      const localStorageSelectOptionMultipleValue = JSON.parse(
        localStorageSelectOptionMultiple
      );
      multipleSelect(localStorageSelectOptionMultipleValue);
      setSelectOptionMultiple(localStorageSelectOptionMultipleValue);
    } else {
      multipleSelect(multipleSelectOption);
      setSelectOptionMultiple(multipleSelectOption);
    }

    if (
      localStorageSelectOptionSort &&
      localStorageSelectOptionSort !== 'undefined'
    ) {
      const localStorageSelectOptionSortValue = JSON.parse(
        localStorageSelectOptionSort
      );
      selectSetting(localStorageSelectOptionSortValue);
      setSelectOptionSort(localStorageSelectOptionSortValue);
    } else {
      selectSetting(selectOption);
      setSelectOptionSort(selectOption);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = useCallback(() => {
    toastNotify({ title: 'Конфигурации применились', type: 'success' });
    setOpenedModal(false);
    selectSetting(selectOptionSort);
    multipleSelect(selectOptionMultiple);
    localStorage.setItem(
      'selectOptionMultiple',
      JSON.stringify(selectOptionMultiple)
    );
    localStorage.setItem('selectOptionSort', JSON.stringify(selectOptionSort));
  }, [
    selectOptionSort,
    selectOptionMultiple,
    setOpenedModal,
    selectSetting,
    multipleSelect,
    toastNotify,
  ]);

  return (
    <>
      <Modal
        titleText="Конфигурации"
        buttonText="Применить"
        openedModal={openedModal}
        onCloseModal={() => setOpenedModal(false)}
        onApply={handleClick}
      >
        <SelectSection
          setSelectOptionMultiple={setSelectOptionMultiple}
          selectOptionMultiple={selectOptionMultiple}
          setSelectOptionSort={setSelectOptionSort}
          selectOptionSort={selectOptionSort}
          optionsGoodsList={SELECT_GOODS_LIST}
          optionsPrice={SELECT_PRICE}
        />
      </Modal>
      <Wrapper>
        <SettingWrapper
          openedModal={openedModal}
          onClick={() => setOpenedModal(true)}
        >
          <SettingIconWrapper openedModal={openedModal}>
            <SettingIcon fill="white" />
          </SettingIconWrapper>
        </SettingWrapper>
      </Wrapper>
    </>
  );
};
