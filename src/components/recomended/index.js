import { Container, Avatar, Info } from "./styles";

export default function Recomended({ recomended }) {
  return (
    <Container>
      <Avatar src={recomended.avatar}></Avatar>
      <Info>
        <a>{recomended.title}</a>
        <span>{recomended.views}</span>
      </Info>
    </Container>
  );
}
