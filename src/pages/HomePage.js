// import { AdminModal } from 'components/AdminModal/AdminModal';
import Card from 'components/Card/Card';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import image from './../img/Glow.jpg'

const HomePage = () => {
  return (
    <StyledContainer>
      {/* <AdminModal  ></AdminModal> */}
      <Card img={image}></Card>


    </StyledContainer>
  );
};

export default HomePage;
