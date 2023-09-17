/* 2023-07-03 유저 프로필 컴포넌트 - 김다함 */
import { Member } from '@/types';

import { ColumnWrapper, MemberProfileWrapper } from '@/commons/molecules/profile/MemberProfile.styled';
import { SmallText } from '@/commons/atoms/text/Typography';
import Image from '@/commons/atoms/image/Image';
import Label from '@/commons/atoms/text/Label';
import circleNoImg from '@/assets/circleNoImg.png';

interface MemberProfile {
  type: 'board' | 'comment' | 'portfolio' | 'blackboard';
  member: Member;
  date?: string;
}

const ImageSizes: any = {
  board: 65,
  comment: 70,
  portfolio: 100,
  blackboard: 65,
};

const MemberProfile = ({ type, member, date }: MemberProfile) => {
  const itemPic = member.imageUrl === null ? circleNoImg : member.imageUrl;
  const src = typeof itemPic === 'string' ? itemPic : undefined;
  return (
    <MemberProfileWrapper>
      <h3>짱구님</h3>
      <Image src={src} url={`/members/${member.id}`} shape="circle" size={ImageSizes[type]} />
      {type === 'portfolio' && <Label text={member.name} type={type} url={`/members/${member.id}`} />}
      {type !== 'portfolio' && (
        <ColumnWrapper>
          <Label text={member.name} type={type} url={`/members/${member.id}`} />
          <SmallText color={type === 'blackboard' ? 'white' : ''}>{date}</SmallText>
        </ColumnWrapper>
      )}
    </MemberProfileWrapper>
  );
};

export default MemberProfile;
