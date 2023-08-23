import { AgreeBoxItem, AgreePageWrapper, BigTitleText, CheckBox, ContentBox, ContentText, LogoV2Img, MiddleTitleText, PointTitle, TitleWrapper } from "./signup.styled";
import LogoV2 from '@/assets/logoVer2.png';

export default function SignupAgree () {
    return(
        <AgreePageWrapper>
            <LogoV2Img src={LogoV2}/>
            <AgreeBoxItem>
                <TitleWrapper>
                    <CheckBox type="checkbox"/>
                    <BigTitleText>전체 동의하기</BigTitleText>
                </TitleWrapper>
                <ContentText>실명 인증된 아이디로 가입, 위치기반 서비스 이용약관(선택), 이벤트 혜택 정보 수신(선택) 동의를 포합합니다.</ContentText>
            </AgreeBoxItem>

            <AgreeBoxItem>
                <TitleWrapper>
                    <CheckBox type="checkbox"/>
                    <MiddleTitleText> <PointTitle point="point">[필수]</PointTitle> Portfolly 이용약관 {">"} </MiddleTitleText>
                </TitleWrapper>
                <ContentBox>네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와
                     이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                    <br/><br/>
                    네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                    <br/><br/>
                    네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 
                    여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
                </ContentBox>
            </AgreeBoxItem>

            <AgreeBoxItem>
                <TitleWrapper>
                    <CheckBox type="checkbox"/>
                    <MiddleTitleText> <PointTitle>[선택]</PointTitle> 실명 인증된 아이디로 가입 {">"}</MiddleTitleText>
                </TitleWrapper>
                <ContentBox>실명 인증된 아이디로 가입, 위치기반 서비스 이용약관(선택), 이벤트 혜택 정보 수신(선택) 동의를 포합합니다.</ContentBox>
            </AgreeBoxItem>
        </AgreePageWrapper>
    )
}