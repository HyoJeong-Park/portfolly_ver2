import { styled } from 'styled-components';
import tw from 'twin.macro';

export const ProfileWrapper = styled.div`
  ${tw` relative `}
  width: 450px;
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
    ${tw` bg-BASIC_PURPLE rounded-full p-1 text-white absolute bottom-12 `}
    right: 140px;
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
