import {
  AppItemContainer,
  Author,
  Title,
  TitleOverlay,
} from './AppItem.stlyed';
import item from '../../assets/appImg.png';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull } from 'react-icons/bs';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

type AppItemProps = {
  itemCount: number;
};

export default function AppItem({ itemCount }: AppItemProps) {
  const items = Array.from({ length: itemCount }, (_, index) => (
    <AppItemContainer>
      <span>10:30</span>
      <div className="iconsWrap">
        <AiOutlineWifi size={20} />
        <BsBatteryFull size={20} />
      </div>
      <img src={item} alt={`appImg-${index}`} />
      <TitleOverlay>
        <Title>아이템 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </AppItemContainer>
  ));
  return <>{items}</>;
}
