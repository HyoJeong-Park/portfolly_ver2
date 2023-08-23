import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import LoginBtn from '../../commons/atoms/buttons/login/LoginBtn';
// import UserImg from '../../commons/atoms/user/UserImg';
// import Search from '@/components/search/Search';
// import { RecuitBtn } from './CHeader.styled';
import { RootState } from '@/store';

import logoVer2 from '@/assets/logoVer2.png';
import { CgProfile } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';

import { HeaderContainer, LogoVer2Image, IconsWrapper } from './Header.styled';

export default function Header() {
  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
  console.log(loginState);

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoVer2Image src={logoVer2} alt='logoImage' />
      </Link>
      <IconsWrapper>
        <CgProfile size={30} />
        <FiMenu size={30} />
      </IconsWrapper>
    </HeaderContainer>
  );
}
