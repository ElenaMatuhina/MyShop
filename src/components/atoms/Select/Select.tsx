import React, {
  useEffect,
  useRef,
  useState,
  MouseEvent,
  Fragment,
  useCallback,
} from 'react';

import {
  SelectContainer,
  InputText,
  Chips,
  ChipsItem,
  ChipsClose,
  InputDelete,
  Divider,
  Caret,
  DropdownList,
  NotChosen,
} from './style';
import { ISelectOption } from '../../../reducers/sort-slice';
import { DropdownListItem } from './DropdownList';

type MultipleSelectProps = {
  multiple: true;
  selectOption: ISelectOption[];
  onChange: (value: ISelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  selectOption?: ISelectOption;
  onChange: (value: ISelectOption | undefined) => void;
};

type SelectProps = {
  defaultText: string;
  options: ISelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const getInputMultipleText = (
  selectOption: ISelectOption[],
  getSelectOption: (value: ISelectOption) => void,
  defaultText: string
) => {
  const setCounterChip = (index: number) => ' + ' + index;

  if (selectOption.length !== 0) {
    return selectOption.map((item, i: number) => (
      <Fragment key={item.value}>
        <ChipsItem>{setCounterChip(selectOption.length - i)}</ChipsItem>
        <Chips
          onClick={(e) => {
            e.stopPropagation();
            getSelectOption(item);
          }}
          data-is-chip
        >
          {item.label}
          <ChipsClose>&times;</ChipsClose>
        </Chips>
      </Fragment>
    ));
  }
  return <NotChosen>{defaultText}</NotChosen>;
};

const getInputTextSelect = (
  value: ISelectOption | undefined,
  defaultText: string
) => {
  if (value?.label !== undefined) {
    return <NotChosen>{value.label}</NotChosen>;
  }
  return <NotChosen>{defaultText}</NotChosen>;
};

export const Select = ({
  multiple,
  selectOption,
  onChange,
  options,
  defaultText,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const showInputDelete = multiple
    ? selectOption?.length !== 0
    : selectOption?.label !== undefined;

  const clearOptions = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      multiple ? onChange([]) : onChange(undefined);
    },
    [onChange, multiple]
  );

  const getSelectOption = useCallback(
    (option: ISelectOption) => {
      if (multiple) {
        const deleteChips = selectOption
          .map((item: ISelectOption) => item.value)
          ?.includes(option.value);
        if (deleteChips) {
          onChange(selectOption?.filter((o) => o.value !== option.value));
        } else {
          onChange([...selectOption, option]);
        }
      } else {
        if (option.value !== selectOption?.value) onChange(option);
      }
    },
    [onChange, multiple, selectOption]
  );

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRefCurrent) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) getSelectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRefCurrent?.addEventListener('keydown', handler);

    return () => {
      containerRefCurrent?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, options, getSelectOption]);

  return (
    <SelectContainer
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <InputText>
        {multiple
          ? getInputMultipleText(selectOption, getSelectOption, defaultText)
          : getInputTextSelect(selectOption, defaultText)}
      </InputText>
      {showInputDelete && (
        <InputDelete onClick={(e) => clearOptions(e)}>&times;</InputDelete>
      )}
      <Divider />
      <Caret $isOpen={isOpen} />
      <DropdownList $isOpen={isOpen}>
        {options.map((option, index) => (
          <Fragment key={option.value}>
            <DropdownListItem
              multiple={multiple}
              selectOption={selectOption}
              option={option}
              index={index}
              setIsOpen={setIsOpen}
              setHighlightedIndex={setHighlightedIndex}
              highlightedIndex={highlightedIndex}
              getSelectOption={getSelectOption}
            />
          </Fragment>
        ))}
      </DropdownList>
    </SelectContainer>
  );
};
