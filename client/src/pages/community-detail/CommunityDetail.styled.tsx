import tw from 'twin.macro';
import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  ${tw`flex flex-col gap-8 min-h-screen bg-center bg-no-repeat bg-cover mt-10`}
  padding: 0 100px;
`;

export const TitleContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-start
  `}

  h1 {
    font-size: 1.5rem;
  }
`;

export const MainContainer = tw.div`
  flex
  gap-10
`;

export const CmDContainer = tw.div`
  w-full
`;

export const CommentContainer = tw.div`
  w-full
  h-[700px]
`;

export const CommentWrite = tw.div`
  
`;

export const JbWrapper = tw.div`
  flex
  flex-col
  justify-between
  h-full
`;
