import { useState, useEffect } from 'react';
import { 
  useNavigate,
  // useSearchParams
} from 'react-router-dom';
import { RootState } from '@/store';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Search from '@/components/search/Search';
import CommunityItem from '@/components/communityItem/CommunityItem';

import { CommuProps } from '@/types';

import {
  CommunityItemWrapper,
  CommunityWrapper,
  SearchContainer,
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
import Loading from '@/components/loading/Loading';

export default function CommunityMain() {
  const [data, setData] = useState<CommuProps[]>([]);
  const [filteredData, setFilteredData] = useState<CommuProps[]>([]);
  const [division, setDivision] = useState('COOPERATION');
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  //인기순 필터 적용 및 베스트 게시굴에서 사용.
  const sortedData = [...data].sort((acc:CommuProps, cur:CommuProps) => cur.view - acc.view);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSearch, setCurrentSearch] = useState('');
  const [timeUpdate, setTime] = useState(() => {
    const currentTime = new Date(new Date().getTime());
    const hour = currentTime.getHours();
    const divisionPeriod = hour > 12 ? '오후' : '오전';
    const changedHour = hour > 12 ? hour - 12 : hour;
    const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
    return updatedTimeSet;
  });
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
          setIsLoading(false);
        });
    };

    showWholeCommu();
  }, [division]);

  //업데이트 시간 세팅
  const handleTime = () => {
    const currentTime = new Date(new Date().getTime());
    const hour = currentTime.getHours();
    const divisionPeriod = hour > 12 ? '오후' : '오전';
    const changedHour = hour > 12 ? hour - 12 : hour;
    const updatedTimeSet = `${divisionPeriod} ${changedHour}시`;
    setTime( updatedTimeSet );
  };

  useEffect(() => {
    const handleInterval = setInterval(() => {
      handleTime();
      console.log('인터벌 함수 실행', timeUpdate);
    }, 21600000);

    return () => {
      clearInterval(handleInterval)
    };

  }, [timeUpdate]);

  useEffect(() => {
    setFilteredData(data);
  }, [data])

  const [ isClicked, setIsClicked ]  = useState({
    division: false,
    filter: false,
  });

  const handleDivisionClick = () => {
    setIsClicked((prevState) => ({
      ...prevState,
      division: !prevState.division,
    }));
  };

  const handleFilterClick = () => {
    setIsClicked((prevState) => ({
      ...prevState,
      filter: !prevState.filter,
    }));
  };

  const FilterData = (filterType:string) => {
    if(filterType === 'recent'){
      setFilteredData(data);
      handleFilterClick();
    }
    if(filterType === 'popular'){
      setFilteredData(sortedData);
      handleFilterClick();
    }
  }

  const handleDivision = (divisionType:string) => {
    if(divisionType === 'recrutiment'){
      setDivision('RECRUITMENT');
      handleDivisionClick();
    }
    if( divisionType === 'cooperation'){
      setDivision('COOPERATION');
      handleDivisionClick();
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



  return (
    <>{isLoading ? (
      <Loading/> 
    ):(
    <CommunityWrapper>
    <CommunityMainWrapper>
      <TitleSectionCommu/>
      <WritingButton onClick={() => handleNavigate(currentLoginState)}>
        새글 등록하기
      </WritingButton>
      {
        openAlert && (
          <AlertModal type={"etc"} onCancel={handleAlert} title={"잠깐!"} content={"로그인한 사용자만 사용할 수 있습니다!"} clicked={"닫기"}/>
        )
      }
      <SearchContainer>
        <Search
          setSearchValue={setCurrentSearch}
          currentSearch={currentSearch}
          data={data}
          setSearchs={setFilteredData}
        />
      </SearchContainer>
      
      <DivisionWrapper>
        <DivisionBox>
          <DivisionTitle onClick={() => handleDivision('recrutiment')} className={isClicked.division ? 'clicked' : ''}>Recruitment</DivisionTitle>
          <DivisionTitle onClick={() => handleDivision('cooperation')} className={isClicked.division ? '' : 'clicked'}>Cooperation</DivisionTitle>
        </DivisionBox>

        <DivisionBox>
          <DivisionFilter onClick={() => FilterData("recent")} className={isClicked.filter ? 'clicked' : ''}>최신순</DivisionFilter>
          <DivisionFilter onClick={() => FilterData("popular")} className={isClicked.filter ? '' : 'clicked'}>인기순</DivisionFilter>
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
        <RankingTitle title={"베스트 게시글"} date={timeUpdate} />
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
    )}
    </>
  );
}
