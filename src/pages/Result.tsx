import styled from "styled-components";

const ResultPage = () => {
  return (
    <Wrapper>
      <Subtitle>나의 연애 유형은</Subtitle>
      <Title>연애 성공률 1% 나르시스트</Title>
      <Image></Image>
      <Description>
        기존의 연애 방식을 거부하고 나만의 연애를 만들어 가는 스타일이에요! 늘
        새로운 아이디어가 넘치고 나만의 연애를 끊임없이 탐구하기 때문에
        유니크하고 특별한 연애를 하는 경우가 많아요.
      </Description>
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  width: 380px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #000000;
  @media (max-width: 380px) {
    width: 100%;
  }
  // safari only
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 300px) {
    font-size: 24px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 27px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.div`
  font-size: 22px;

  @media (max-width: 300px) {
    font-size: 14px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 16px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    font-size: 18px;
  }
`;

const Image = styled.div`
  width: 380px;
  height: 380px;
  background-image: url("https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82");
  background-size: cover;
  background-position: center;

  @media (max-width: 300px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    width: 350px;
    height: 350px;
  }
`;

const Description = styled.div`
  font-size: 18px;

  @media (max-width: 300px) {
    font-size: 13px;
    margin: 0 20px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 15px;
    margin: 0 24px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    font-size: 16px;
    margin: 0 22px;
  }
`;
