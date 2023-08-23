import { Link } from 'react-router-dom';

import {
  LoginInputWrapper,
  LoginSubmitButton,
  LoginWrapper, LogoV2Img, TopRoundInput, BottomRoundInput, LoginLinkText, LinkTextWrapper, SmallInfoText, SmallPointInfoText, TextWrapper,
} from './Login.styled';
import LogoVer2 from '@/assets/logoVer2.png';




export default function Login() {

  return (
    <LoginWrapper>
      <LogoV2Img src={LogoVer2} alt={"Portfolly"}/>
      <LoginInputWrapper>
        <TopRoundInput />
        <BottomRoundInput />
        <LoginSubmitButton type="submit" value="로그인"/>
      </LoginInputWrapper>
      <LinkTextWrapper>
        <LoginLinkText>비밀번호 찾기</LoginLinkText>
        <LoginLinkText>아이디 찾기</LoginLinkText>
        <Link to="/signup/agree"><LoginLinkText>회원가입</LoginLinkText></Link>
      </LinkTextWrapper>
      <TextWrapper>
        <SmallInfoText>Design by 박효정 조혜진</SmallInfoText>
        <SmallInfoText><SmallPointInfoText>Portfolly </SmallPointInfoText>
          Copyright ⓒ Portfolly Corp. All Rights Reserved.
        </SmallInfoText>
      </TextWrapper>
    </LoginWrapper>
  );
}
