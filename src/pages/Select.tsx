import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Questions from "../common/api/questionAPI.json";

const SelectPage = () => {
  const navigate = useNavigate();
  const [now, setNow] = useState(1);
  const [max, setMax] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMax(Questions.length);
  }, []);

  const checker = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/result");
    }, 2000);
  };

  const onClickOption = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.id);

    if (now === max) {
      checker();
    } else {
      setNow(now + 1);
    }
  };

  return (
    <Wrapper>
      {!isLoading && (
        <>
          <QNumber>Q{now}</QNumber>
          <Title>{Questions[now - 1].question}</Title>
          <Option id="1" onClick={onClickOption}>
            {Questions[now - 1].answers[0].content}
          </Option>
          <Option id="2" onClick={onClickOption}>
            {Questions[now - 1].answers[1].content}
          </Option>
          <Progress>
            {now}/{max}
          </Progress>
          <ProgressBar value={now} max={max}></ProgressBar>
        </>
      )}
      {isLoading && (
        <>
          <LoadingText>결과 분석 중..</LoadingText>
        </>
      )}
    </Wrapper>
  );
};

export default SelectPage;

const Wrapper = styled.div`
  width: 380px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 420px) {
    width: 90%;
  }
  // safari only
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

const QNumber = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 50px;
  margin-right: auto;

  @media (max-width: 300px) {
    font-size: 21px;
    margin-bottom: 20px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 23px;
    margin-bottom: 30px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: #000000;
  margin-bottom: 30px;
  margin-right: auto;
  white-space: pre-wrap;

  @media (max-width: 300px) {
    font-size: 20px;
    margin-bottom: 25px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 23px;
    margin-bottom: 26px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 28px;
  }
`;

const Option = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  background-color: #dddddd;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  @media (max-width: 300px) {
    width: 100%;
    height: 70px;
    font-size: 13px;
    margin-bottom: 10px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    width: 100%;
    height: 75px;
    font-size: 15px;
    margin-bottom: 15px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    width: 100%;
    height: 90px;
    font-size: 18px;
    margin-bottom: 18px;
  }
`;

const Progress = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #dddddd;
  margin-bottom: 5px;
  margin-top: 20px;

  @media (max-width: 300px) {
    font-size: 10px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 12px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    font-size: 14px;
  }
`;

const LoadingText = styled.div`
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 300px) {
    font-size: 25px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 30px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    font-size: 35px;
  }
`;
