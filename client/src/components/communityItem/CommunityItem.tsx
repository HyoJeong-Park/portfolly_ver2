import { CommunityItemContainer } from './CommunityItem.styled';
import Views from '../views/Views';
import MemberProfile from '@/commons/molecules/MemberProfile';
import { useNavigate } from 'react-router-dom';
import { CommuProps } from '@/types';

export default function CommunityItem(datas: any) {
  const navigate = useNavigate();
  const eachData = datas.datas

  const HandleClick = (e: CommuProps) => {
    navigate(`/boards/${e.board_id}`, { state: e });
  }

  return (
    <CommunityItemContainer onClick={() => { HandleClick(eachData) }}>
      <MemberProfile type={'board'} member={{ memberId: eachData.member_id, name: eachData.name, picture: 'https://picsum.photos/200/300' }} />
      <h2>{eachData.title}</h2>
      <p>{eachData.content}</p>
      <Views view={eachData.view} />
    </CommunityItemContainer>
  );
}
