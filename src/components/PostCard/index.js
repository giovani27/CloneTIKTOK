import { useRef, useState } from "react";

import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Autor,
  Description,
  Content,
  Song,
  Tag,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  Actions,
  Action,
  ButtonContainer,
} from "./styles";

import Button from "../button";

function PostCard({ post }) {
  const videoRef = useRef();
  const [running, setRunning] = useState(false);

  const toggleAction = () => {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play();
      else videoRef.current.pause();

      setRunning(!running);
    }
  };
  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.autor.avatar}></Avatar>
          <Info>
            <Autor>
              {post?.autor?.username}
              <span> {post?.autor?.name} </span>
            </Autor>
            <Description>
              <span> {post?.description} </span>
              {post.tags.map((tag, index) => (
                <Tag key={index}>{tag.title}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontsize={14} outlined>
            Seguir
          </Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song> ♫ {post.songName} </Song>
        <VideoContainer>
          <Video
            ref={videoRef}
            src={post?.videoUrl}
            webkit-playsinline="true"
            playsinline=""
            loop="true"
            preload="metadata"
          >
            {" "}
          </Video>
          <ActionsContainer onClick={toggleAction}>
            <PlayerIcon
              src={running ? "/images/pauseIcon.svg" : "/images/playIcon.svg"}
            ></PlayerIcon>
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src="/images/heartIcon.svg"></img>
          <a> {post.likes} </a>
        </Action>
        <Action>
          <img src="/images/bubbleIcon.svg"></img>
          <a> {post.comments} </a>
        </Action>
        <Action>
          <img src="/images/arrowIcon.svg"></img>
          <a> {post.replace} </a>
        </Action>
      </Actions>
    </Container>
  );
}

export default PostCard;
