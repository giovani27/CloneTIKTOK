import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_t5h4JgdyoAtxt10X4wcTMc6jEYwufDrEOweJTwA=s32-c-mo" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
