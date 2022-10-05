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
  ::-webkit-progress-bar {
    background-color: #dddddd;
    border-radius: 10px;
  }
  ::-webkit-progress-value {
    background-color: #000000;
    border-radius: 10px;
  }
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;
