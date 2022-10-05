import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Wrapper>
      <Title>연애 능력치 테스트</Title>
      <Subtitle>나의 연애 성격 유형과 숨겨진 능력은?</Subtitle>
      <WelcomeImage></WelcomeImage>
      <Link to="/test">
        <StartButton>테스트 시작</StartButton>
      </Link>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #000000;
`;

const WelcomeImage = styled.div`
  width: 400px;
  height: 400px;
  background-image: url("https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82");
  background-size: cover;
  background-position: center;
`;

const StartButton = styled.div`
  width: 250px;
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
