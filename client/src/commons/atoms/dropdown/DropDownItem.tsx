/* 2023.07.05 드롭다운 아이템(펼쳤을 때 나오는 옵션들) - 김다함 */
import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, openCategory, isOpen } from '@/modules/CategorySlice';

interface DropDownItemProps {
  value: string;
}

const DropDownItemContainer = styled.div`
    ${tw`px-3 py-2 text-xs bg-transparent select-none`}
    color: white;
    &:hover {
        background-color: #5e5e5e;
    }
    cursor: pointer;
`;

export default function DropDownItem({ value }: DropDownItemProps) {
  const dispatch = useDispatch();
  const isOpened = useSelector(isOpen);

  const selectCategory = () => {
    dispatch(openCategory(!isOpened));
    dispatch(setCategory(value));
  }

  return (
    <DropDownItemContainer onClick={selectCategory}>
      {value}
    </DropDownItemContainer>
  )
}