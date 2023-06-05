import { HeaderContainer, Image, ImageContainer } from './styles';
import logo from '../../assets/Logo.svg';

export function Header() {
    return (
      <HeaderContainer>
        <ImageContainer>
          <Image src={logo} alt="to.do"/>
        </ImageContainer>
      </HeaderContainer>
    )
  }