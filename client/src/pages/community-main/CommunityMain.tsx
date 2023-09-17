import { useState, useEffect } from 'react';
import { 
  useNavigate,
  // useSearchParams
} from 'react-router-dom';
import { RootState } from '@/store';
import axios from 'axios';
import { useSelector } from 'react-redux';

// import Search from '@/components/search/Search';
import CommunityItem from '@/components/communityItem/CommunityItem';

import { CommuProps } from '@/types';

import {
  CommunityItemWrapper,
  CommunityWrapper,
  // SearchContainer,
  CommunityMainWrapper,
  TitleSectionCommu,
  DivisionTitle,
  DivisionFilter,
  DivisionBox,
  DivisionWrapper,
  RightSideWrapper,
  SideBoxWrapper,
  NoticeItems,
  RankingTitle,
  RankingCommuItem,
  WritingButton,
} from './CommunityMain.styled';
import { NodataImage } from '../main/Main.styled';
import datano from '@/assets/datano.png';

import AlertModal from '@/components/modal/AlertModal';

export default function CommunityMain() {
  const [data, setData] = useState<CommuProps[]>([]);
  const [filteredData, setFilteredData] = useState<CommuProps[]>([]);
  const [division, setDivision] = useState('COOPERATION');
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  //인기순 필터 적용 및 베스트 게시굴에서 사용.
  const sortedData = [...data].sort((acc:CommuProps, cur:CommuProps) => cur.view - acc.view);
  // const [searchParams] = useSearchParams();
  // const division = searchParams.get('division');
  const page = 1;
  const size = 30;

  const currentLoginState = useSelector((state: RootState) => state.loginSlice.isLogin);

  useEffect(() => {
    const showWholeCommu = async () => {
      await axios
        .get(`https://api.portfolly.site/boards/pages?division=${division}&page=${page}&size=${size}`)
        .then((res) => {
          //console.log(res.data.data);
          setData(res.data.data);
        });
    };

    showWholeCommu();
  }, [division]);


  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {

  }, [filteredData, division])

  const FilterData = (filterType:string) => {
    if(filterType === 'recent'){
      setFilteredData(data);
    }
    if(filterType === 'popular'){

      setFilteredData(sortedData);   
    }
  }

  const handleDivision = (divisionType:string) => {
    if(divisionType === 'recrutiment'){
      setDivision('RECRUITMENT');
    }
    if( divisionType === 'cooperation'){
      setDivision('COOPERATION');
    }
  }

  const handleAlert = () => {
    setOpenAlert(!openAlert);
  }

  const handleNavigate = (loginState: boolean) => {
    if(loginState === true){
      navigate('/boards/edit')
    }
    setOpenAlert(true);
  }

  

  // 검색 - 07.11 효정
  // const [currentSearch, setCurrentSearch] = useState('');
  // const [searchs, setSearchs] = useState([] as any);

  // useEffect(() => {
  //   setSearchs(data);
  // }, [data]);

  return (
    <CommunityWrapper>
    <CommunityMainWrapper>
      {/* <SearchContainer>
        <Search
          setSearchValue={setCurrentSearch}
          currentSearch={currentSearch}
          data={data}
          setSearchs={setSearchs}
        />
      </SearchContainer> */}
      <TitleSectionCommu/>
      <WritingButton onClick={() => handleNavigate(currentLoginState)}>
        새글 등록하기
      </WritingButton>
      {
        openAlert && (
          <AlertModal type={"etc"} onCancel={handleAlert} title={"잠깐!"} content={"로그인한 사용자만 사용할 수 있습니다!"} clicked={"닫기"}/>
        )
      }
      
        <DivisionWrapper>
          <DivisionBox>
            <DivisionTitle onClick={() => handleDivision('recrutiment')}>Recruitment</DivisionTitle>
            <DivisionTitle onClick={() => handleDivision('cooperation')}>Cooperation</DivisionTitle>
          </DivisionBox>

          <DivisionBox>
            <DivisionFilter onClick={() => FilterData("recent")}>최신순</DivisionFilter>
            <DivisionFilter onClick={() => FilterData("popular")}>인기순</DivisionFilter>
          </DivisionBox>
        </DivisionWrapper>

        <CommunityItemWrapper>
        {filteredData.length > 0 ? 
        (
          filteredData.map((communityItem: CommuProps) => {
            return <CommunityItem key={communityItem.id} communityItem={communityItem}/>
          })
        ) : (
          <NodataImage src={datano} alt="noData"/>
        )
        }
        </CommunityItemWrapper>
    </CommunityMainWrapper>

    <RightSideWrapper>
      <SideBoxWrapper>
        <NoticeItems/>
      </SideBoxWrapper>

      <SideBoxWrapper type="ranking">
        <RankingTitle title={"베스트 게시글"} date={"오후 6시"} />
        {filteredData.length > 0 ? (
          <>
          {sortedData.slice(0,5).map((communityItem: CommuProps, index: number) => {
            const rank = index+1;
            return <RankingCommuItem num={rank} title={communityItem.title} likes={communityItem.view} communityId={communityItem.id}/>
          })}
          </>
        ): null}
      </SideBoxWrapper>
    </RightSideWrapper>

    </CommunityWrapper>
  );
}
