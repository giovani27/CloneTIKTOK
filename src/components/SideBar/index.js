import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from "./styles";

import User from '../user'

function SideBar() {
  return (
    <Container>
      <MenuItem active >
        <img src="/images/homeIcon.svg"></img>
        <span  >Para voce</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg" ></img>
        <span >Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User
          user={{
            name: "will Smith",
            username: "will Smith",
            avatar:
              "https://p77-sign-sg.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1615057200&x-signature=DXATkb%2FzXyAFoBwWsGaGMBdJR9Y%3D",
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Inicio</a>
          <a>Sobre</a>
          <a>Sala de Imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin >
          <a>c 2020 tiktok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default SideBar;
