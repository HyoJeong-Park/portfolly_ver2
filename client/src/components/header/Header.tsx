import { Link } from 'react-router-dom';
import { HeaderContainer, LogoVer2Image, IconsWrapper, MenuTextContainer, MenuBigText } from './Header.styled';
// import LoginBtn from '../../commons/atoms/buttons/login/LoginBtn';
// import UserImg from '../../commons/atoms/user/UserImg';
import logoVer2 from '@/assets/logoVer2.png';
// import Search from '@/components/search/Search';
// import { RecuitBtn } from './CHeader.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { CgProfile } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import Dropwdown from '../dropdown/Dropdown';

export default function Header() {
  const [ open, setOpen ] = useState(false);
  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);

  const handleModal = () => {
    setOpen(!open);
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoVer2Image src={logoVer2} alt='logoImage' />
      </Link>
      <MenuTextContainer>
        <MenuBigText><Link to="/main">Home</Link></MenuBigText>
        <MenuBigText><Link to="/boards">Community</Link></MenuBigText>
        {loginState ? (
          <MenuBigText><Link to="/members/:id">MyPage</Link></MenuBigText>
        ):(
          <MenuBigText><Link to="/login">LogIn</Link></MenuBigText>
        )}

      </MenuTextContainer>
      <IconsWrapper>
        <Link to={`/members/:id`}><CgProfile size={30} /></Link>
        <FiMenu size={30} onClick={handleModal} />
      </IconsWrapper>
      {open && (
              <Dropwdown isOpen={open} loginState={loginState}/>
            )}
    </HeaderContainer>
  );
}
