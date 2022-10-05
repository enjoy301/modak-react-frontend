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
    }, 1000);
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
        <div>
          <h1>결과 분석 중..</h1>
        </div>
      )}
    </Wrapper>
  );
};

export default SelectPage;

const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const QNumber = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 50px;
  margin-right: auto;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: #000000;
  margin-bottom: 30px;
  margin-right: auto;
  white-space: pre-wrap;
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
`;

const Progress = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #dddddd;
  margin-bottom: 5px;
  margin-top: 20px;
`;

// const ProgressBar = styled.progress`
//   width: 100%;
//   height: 8px;
//   background-color: #dddddd;
//   border-radius: 30px;
// `;
