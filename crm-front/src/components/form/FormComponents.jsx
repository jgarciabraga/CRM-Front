import styled from "styled-components";

export const DivForm = styled.div`
  background-color: #f3f3f3;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 90%;
  min-width: 20rem;
  min-height: 30rem;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const DivBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 20%;
`;

export const Input = styled.input`
  border: #ebebeb;
  font-size: 1.5rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  height: 2.5rem;
  width: 80%;
`;

export const DivLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;

export const Label = styled.label`
  color: black;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  background-color: #45b3e0;
  border-radius: 0.35rem;
  border: none;
  color: white;
  height: 2.5rem;
  width: 9rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  &:hover {
    background-color: #3d98bb;
    cursor: pointer;
  }
`;
