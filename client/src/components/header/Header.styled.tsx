import { styled } from 'styled-components';
import tw from 'twin.macro';

export const HeaderContainer = styled.div`
  ${tw`flex items-center justify-between w-full px-8 mb-2 shadow-md md:w-auto`}
`;

export const LogoVer2Image = styled.img`
  ${tw`w-10 `} // 모바일 화면에서 이미지 크기 조정

  @media (min-width: 640px) { // md 사이즈 이상에서는 원래 크기로 유지
    ${tw`w-40 h-24`}
  }
`;

export const IconsWrapper = styled.div`
  ${tw`flex flex-row items-center gap-4 pr-3 md:hidden`}
  width: 80px;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuTextContainer = styled.div`
  ${tw`flex-row flex-1 hidden gap-10 mx-10 md:flex`}

`;

export const MenuBigText = styled.div`
  ${tw`text-lg font-semibold `}


  &:hover,:active, :focus{
    color: #8580E1;
    border-bottom: 1px solid #8580e1;
  }
`;