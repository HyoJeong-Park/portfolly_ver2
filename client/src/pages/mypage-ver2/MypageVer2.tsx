import { useState } from 'react';

import logoVer2 from '@/assets/logoVer2.png';
import userImage from '@/assets/userImg.jpg';
import { BiBell } from 'react-icons/bi';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

import {
  MypageWrapper,
  ProfileWrapper,
  ProfileUser,
  RequestAlarm,
  CategoryList,
  LogoutButton,
  ProfileManageWrapper,
  IntroductionContents,
  ManageWrapper,
  MypageItem,
  MypageItemImage,
  MypageItemViews,
  ManageTitle,
  MypageItemWrapper,
} from './MypageVer2.styled';

export default function MypageVer2 () {
  const [clickedCategory, setClickedCategory] = useState('profile');
  // 선택된 카테고리에 따른 조건부 렌더링으로 클래스 다르게 주기

  const clickCategory = (category: string): void => {
    setClickedCategory(category);
  };
  return (
    <MypageWrapper>
      <ProfileWrapper>
        <img src={logoVer2} alt='logoImage' />
        <ProfileUser>
          <div className='editButton'><BsFillPencilFill size={12} /></div>
          <img src={userImage} alt='userimage' />
          <p>킹요덩</p>
        </ProfileUser>
        <RequestAlarm>
          <BiBell />
          <p>[의뢰요청] "emma" 님의 의뢰입니다.</p>
          <span>+10 &gt; </span>
        </RequestAlarm>
        <CategoryList>
          <li className={clickedCategory === 'profile' ? 'clicked' : ''} onClick={() => clickCategory('profile')}>프로필 관리</li>
          <li className={clickedCategory === 'portfolio' ? 'clicked' : ''} onClick={() => clickCategory('portfolio')}>포트폴리오 관리</li>
          <li className={clickedCategory === 'bookmark' ? 'clicked' : ''} onClick={() => clickCategory('bookmark')}>북마크 관리</li>
          <li className={clickedCategory === 'article' ? 'clicked' : ''} onClick={() => clickCategory('article')}>게시글 관리</li>
        </CategoryList>
        <LogoutButton>로그아웃</LogoutButton>
      </ProfileWrapper>
      {(clickedCategory === 'profile') ? 
        <ManageWrapper>
          <ManageTitle>Profile</ManageTitle>
          <IntroductionContents>
            <h3>기본정보</h3>
            <ul>
              <li>Email : hyojeong@yodeong.com </li>
              <li>Job : Frontend Developer </li>
              <li>Etc : Cat Zipsa </li>
            </ul>
          </IntroductionContents>
          <IntroductionContents>
            <h3>Skill</h3>
            <div className='skillList'></div>
          </IntroductionContents>
        </ManageWrapper>
      : (clickedCategory === 'portfolio') ? 
          <ManageWrapper>
            <ManageTitle>My Portfolio</ManageTitle>
            <MypageItemWrapper>
              {/* 아이템 컴포넌트로 빼기 */}
              <MypageItem>
                <MypageItemImage src={userImage} alt='임시이미지' />
                <h3>Web UI Design</h3>
                <p>Web UI Design width React x TypeScript Project HOihHOO ..</p>
                <MypageItemViews>
                  <AiOutlineEye className='viewIcon' size={18} />
                  <span>300</span>
                </MypageItemViews>
              </MypageItem>
              <MypageItem>
                <MypageItemImage src={userImage} alt='임시이미지' />
                <h3>Web UI Design</h3>
                <p>Web UI Design width React x TypeScript Project HOihHOO ..</p>
                <MypageItemViews>
                  <AiOutlineEye className='viewIcon' size={18} />
                  <span>300</span>
                </MypageItemViews>
              </MypageItem>
              <MypageItem>
                <MypageItemImage src={userImage} alt='임시이미지' />
                <h3>Web UI Design</h3>
                <p>Web UI Design width React x TypeScript Project HOihHOO ..</p>
                <MypageItemViews>
                  <AiOutlineEye className='viewIcon' size={18} />
                  <span>300</span>
                </MypageItemViews>
              </MypageItem>
              <MypageItem>
                <MypageItemImage src={userImage} alt='임시이미지' />
                <h3>Web UI Design</h3>
                <p>Web UI Design width React x TypeScript Project HOihHOO ..</p>
                <MypageItemViews>
                  <AiOutlineEye className='viewIcon' size={18} />
                  <span>300</span>
                </MypageItemViews>
              </MypageItem>
            </MypageItemWrapper>
          </ManageWrapper>
        : ''
      }
    </MypageWrapper>
  )
};