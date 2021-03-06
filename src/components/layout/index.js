import Header from '../Header/index'
import SideBar from '../SideBar/index'
import {Container,SideBarContent,ContentContainer} from '../layout/styles'
function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>
        <SideBarContent>
          <SideBar></SideBar>
        </SideBarContent>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}

export default Layout;
