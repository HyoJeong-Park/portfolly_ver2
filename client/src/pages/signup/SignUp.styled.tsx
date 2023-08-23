import tw from 'twin.macro';
import styled from 'styled-components';

export const AgreePageWrapper = tw.div`
    w-[744px]
    h-full
    mx-auto
    items-start
    bg-pink-50
    overflow-y-scroll
`;

export const LogoV2Img = tw.img`
    h-20
    w-32
    p-3
`;

//체크박스 
export const CheckBox = tw.input``;

export const AgreeBoxItem = tw.div`
    flex
    flex-col
`;

export const TitleWrapper = tw.div`
    flex
    flex-row
`;

export const BigTitleText = tw.div`
    text-xl
    font-semibold
    ml-2
`;

export const PointTitle = styled.span<{point?: string}>`
    color: ${(props) => (props.point === 'point') ? '#8580E1' : '#555555'};
    ${tw`
        text-sm
        font-bold
    `}
`;

export const MiddleTitleText = tw.div`
    ml-2
`;

export const ContentText = tw.div`
    text-sm
    text-BASIC_GRAY
`;

export const ContentBox = tw.div`
    border
    border-BASIC_BORDER
    text-BASIC_GRAY
    rounded-md
    px-2
    text-sm
    overflow-y-scroll
    h-40
`;

export const SubmitButton = styled.input`
    ${tw`
    w-full
    h-12
    rounded-lg
    bg-BASIC_PURPLE
    `}

    &:hover{
        background-color: #9999;
    }
`;

