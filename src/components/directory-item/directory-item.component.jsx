import './directory-item.styles';
import { BackgroundImage, DirectoryItemBody, DirectoryItemContainer } from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  }
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBody>
        <h2>{ title }</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;