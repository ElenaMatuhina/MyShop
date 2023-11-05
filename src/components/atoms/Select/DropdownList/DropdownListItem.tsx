import React, { useCallback, useEffect, useState } from 'react';

import { ListOption, CheckboxIcon } from './style';
import { ISelectOption } from '../../../../reducers/sort-slice';

type DropdownProps = {
  multiple: boolean;
  selectOption: ISelectOption[] | ISelectOption;
  option: ISelectOption;
  index: number;
  setIsOpen: (value: boolean) => void;
  setHighlightedIndex: (value: number) => void;
  highlightedIndex: number;
  getSelectOption: (value: ISelectOption) => void;
};

export const DropdownListItem = ({
  multiple,
  selectOption,
  option,
  index,
  setIsOpen,
  setHighlightedIndex,
  highlightedIndex,
  getSelectOption,
}: DropdownProps) => {
  const [checkedSelect, setCheckedSelect] = useState(false);

  const isOptionSelected = useCallback(
    (option: ISelectOption) => {
      if (multiple&& Array.isArray(selectOption) ) {
        setCheckedSelect(
          selectOption.map((item: ISelectOption) => item.value)?.includes(option.value)
        );
      } else {
        setCheckedSelect(option === selectOption);
      }
    },
    [selectOption, multiple, setCheckedSelect]
  );

  useEffect(() => {
    isOptionSelected(option);
  }, [option, isOptionSelected]);

  return (
    <ListOption
      onClick={(e) => {
        e.stopPropagation();
        getSelectOption(option);
        setIsOpen(!!multiple);
        isOptionSelected(option);
      }}
      onMouseEnter={() => setHighlightedIndex(index)}
      selected={checkedSelect}
      $highlighted={index === highlightedIndex}
    >
      {multiple ? (
        <CheckboxIcon checked={checkedSelect}>{option.label}</CheckboxIcon>
      ) : (
        option.label
      )}
    </ListOption>
  );
};

DropdownListItem.defaultProps = {
  multiple: false,
};
