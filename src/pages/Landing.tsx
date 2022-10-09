import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Wrapper>
      <Title>연애 능력치 테스트</Title>
      <Subtitle>나의 연애 성격 유형과 숨겨진 능력은?</Subtitle>
      <WelcomeImage></WelcomeImage>
      <LinkWrapper>
        <Link to="/test">
          <StartButton>테스트 시작</StartButton>
        </Link>
      </LinkWrapper>
    </Wrapper>
  );
};

export default LandingPage;

/*
  @media (max-width: 380px) {
    width: 100%;
  }
  @media (min-width: 380px) and (max-width: 500px) {
  }
  @media (min-width: 500px) and (max-width: 800px) {
  }
*/
const Wrapper = styled.div`
  width: 380px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  min-height: 400px;
  min-width: 240px;
  @media (max-width: 380px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
  @media (max-width: 380px) {
    font-size: 32px;
    margin-top: 20px;
  }
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #000000;
  @media (max-width: 380px) {
    font-size: 15px;
  }
`;

const WelcomeImage = styled.div`
  width: 400px;
  height: 400px;
  background-image: url("https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82");
  background-size: cover;
  background-position: center;
  @media (max-width: 380px) {
    margin-top: auto;
    margin-bottom: auto;
    width: 250px;
    height: 250px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

const StartButton = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #444444;
  }
`;

const LinkWrapper = styled.div`
  width: 300px;
  @media (max-width: 380px) {
    width: 80%;
    margin-top: auto;
    margin-bottom: 20px;
  }
`;
