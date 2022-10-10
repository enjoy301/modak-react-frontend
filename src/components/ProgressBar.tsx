import React from "react";
import styled from "styled-components";

interface IProps {
  value: number;
  max: number;
}

const ProgressBar = (props: IProps) => {
  return <Progress value={props.value} max={props.max} />;
};

export default ProgressBar;

const Progress = styled.progress`
  width: 100%;
  height: 20px;
  appearance: none;
  margin-bottom: 70px;
  ::-webkit-progress-bar {
    background-color: #dddddd;
    border-radius: 10px;
  }
  ::-webkit-progress-value {
    background-color: #000000;
    border-radius: 10px;
  }

  @media (max-width: 300px) {
    height: 12px;
    margin-bottom: 20px;
  }
  @media (min-width: 300px) and (max-width: 380px) {
    height: 15px;
    margin-bottom: 40px;
  }
  @media (min-width: 380px) and (max-width: 500px) {
    height: 18px;
    margin-bottom: 60px;
  }
`;
