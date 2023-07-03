import CategoryButton from '@/commons/atoms/buttons/CategoryButton';
import { FlexContainer } from '@/commons/styles/Containers.styled';


export default function CategoryNavBar(){
    const Categories = [
        "웹",
        "앱",
        "3D/애니메이션",
        "그래픽디자인",
        "사진/영상",
    ];

    return (
        <FlexContainer gap={20}>
            {
                Categories.map((category)=>{
                    return <CategoryButton category={category}/>
                })
            }
        </FlexContainer>
    )
}