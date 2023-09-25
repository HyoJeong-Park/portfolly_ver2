import tw from 'twin.macro';
import styled from 'styled-components';
import { ReactNode } from 'react';

import defaultBgimg from '../../../assets/bg2.jpeg';

const BackImgContainer = styled.div`
  ${tw`relative w-screen h-screen `}
`;

export const DefaultImgWrapper = styled.div`
  ${tw`w-screen bg-center bg-no-repeat bg-cover h-fit`}
  background-image: url(${defaultBgimg});
`;

// const BackgroundImage = styled.div`
//   ${tw`absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover `}
//   // background-image: url(${defaultBgimg});
//   pointer-events: none;
// `;

const ContentWrapper = styled.div`
  ${tw`relative z-10 h-full overflow-y-auto `}
`;

export function BackImgControl({ children }: { children: ReactNode }) {
  return (
    <BackImgContainer>
      <ContentWrapper>{children}</ContentWrapper>
    </BackImgContainer>
  );
}
