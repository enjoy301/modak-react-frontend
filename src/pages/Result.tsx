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
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #000000;
`;

const Image = styled.div`
  width: 400px;
  height: 400px;
  background-image: url("https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82");
  background-size: cover;
  background-position: center;
`;

const Description = styled.div`
  font-size: 15px;
  color: #000000;
`;
