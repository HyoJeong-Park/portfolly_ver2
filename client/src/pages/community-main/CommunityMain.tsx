import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Search from '@/components/search/Search';
import CommunityItem from '@/components/communityItem/CommunityItem';
// import { call } from '@/utils/apiService';

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
import axios from 'axios';
import { useSelector } from 'react-redux';
import { NodataImage } from '../main/Main.styled';
import datano from '@/assets/datano.png';

export default function CommunityMain() {
  const [data, setData] = useState<CommuProps[]>([]);
  const [filteredData, setFilteredData] = useState<CommuProps[]>([]);
  const [division, setDivision] = useState('COOPERATION');
  //인기순 필터 적용 및 베스트 게시굴에서 사용.
  const sortedData = [...data].sort((acc:CommuProps, cur:CommuProps) => cur.view - acc.view);
  // const [searchParams] = useSearchParams();
  // const division = searchParams.get('division');
  const page = 1;
  const size = 30;

  // const state: any = useSelector((state) => state);
  // const currentLoginState = state.loginSlice.isLogin;

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
      <WritingButton>새글 등록하기</WritingButton>
      
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
        {/* {Array.from({length:5} ,(_, index)=> {
          return <RankingCommuItem key={index} num={index+1} title={"프론트 구합니다. 삼성전자 앱 제작"} likes={122}/>
        })} */}
        {filteredData.length > 0 ? (
          <>
          {sortedData.slice(0,5).map((communityItem: CommuProps, index: number) => {
            const rank = index+1;
            return <RankingCommuItem num={rank} title={communityItem.title} likes={communityItem.view}/>
          })}
          </>
        ): null}
      </SideBoxWrapper>
    </RightSideWrapper>

    </CommunityWrapper>
  );
}
