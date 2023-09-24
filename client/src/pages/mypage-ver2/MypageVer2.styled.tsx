import { styled } from 'styled-components';
import tw from 'twin.macro';

export const MypageWrapper = styled.div`
  ${tw` flex flex-row`}
`;

export const ProfileWrapper = styled.div`
  ${tw` relative `}
  width: 33%;
  height: 100vh;
  padding: 30px;
  border-right: 2px solid #ddd;

  > img {
    width: 130px;
  }
`;

export const ProfileUser = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    flex-col
    relative
  `}

  img {
    border-radius: 100%;
    width: 100px;
    height: 100px;
    border: 1px solid #333;
  }

  p {
    font-size: 1.3rem;
    margin-top: 10px;
    font-weight: 700;
  }

  .editButton {
    ${tw` bg-BASIC_PURPLE rounded-full p-1 text-white absolute bottom-11 `}
    right: 150px;
    border: 2px solid #fff;

    &:hover {
      ${tw` cursor-pointer `}
    }
  }
`;

export const RequestAlarm = styled.div`
  ${tw` flex items-center relative shadow-md my-10 `}

  background-color: #FFD9E0;
  color: #8580E1;
  border-radius: 10px;
  padding: 10px 20px;

  > p {
    ${tw`pl-2`}
  }

  > span {
    ${tw` absolute right-3`}
    font-size: 0.8rem;
  }

  &:hover {
    ${tw` cursor-pointer `}
  }
`;

export const CategoryList = styled.ul`
  li {
    ${tw` text-xl `}
    line-height: 60px;
    &:hover {
      ${tw` cursor-pointer `}
    }
  }

  .clicked {
    ${tw` underline underline-offset-8 font-bold`}    
  }
`;

export const LogoutButton = styled.button`
  ${tw` bg-transparent border-0 absolute bottom-0 left-1/2 `}
  transform: translate(-50%, -50%);
`;

export const ProfileManageWrapper = styled.div`
  ${tw` p-10 `}
  width: 900px;
  height: 100vh;
`;

export const ManageTitle = styled.h1`
  ${tw` border-b border-BASIC_LINE pb-3`}
  font-size: 2rem;
`

export const IntroductionContents = styled.div`
  ${tw` rounded-lg p-8 border-BASIC_BORDER border my-10 shadow-md`}
  width: 800px;

  h3 {
    ${tw` mb-3 `}
    color: #999;
  }

  li {
    ${tw`font-bold`}
    line-height: 40px;
    color: #999;
  }

  .skillList {
    width: 100%;
    height: 200px;
    background-color: rgb(217,217,217,0.2);
  }
`;

export const ManageWrapper = styled.div`
  ${tw` p-10 `}
  width: 65%;
  
`;

export const MypageItemWrapper = styled.div`
  ${tw` flex flex-row justify-between flex-wrap`}
`;

export const MypageItem = styled.div`
  ${tw` rounded-md p-5 my-5 `}
  border: 1px solid #888;
  width: 250px;
  height: 310px;

  > h3 {
    ${tw` text-BASIC_TEXT font-bold text-base mb-1`}
  }

  > p {
    ${tw` text-POINT_COLOR text-xs `}
  }
`;

export const MypageItemImage = styled.img`
  ${tw` rounded-md mb-3 `}
  width: 100%;
  height: 160px;
`;

export const MypageItemViews = styled.div`
  ${tw` pt-2 mt-4 border-BASIC_BORDER border-t border-solid flex items-center `}

  .viewIcon path {
    ${tw` text-BASIC_BORDER `}
  }

  > span {
    ${tw` px-2 text-POINT_COLOR text-xs `}
  }
`;