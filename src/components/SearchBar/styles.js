import styled from 'styled-components';

export const Container = styled.div``;

export const SearchBox = styled.div`
  background-color: transparent;
  width: 500px;
  padding: 15px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  input {
    background-color: transparent;
    height: 100%;
    width: 80%;
    border: 0;
    font-size: 20px;
    color: #000;
    outline: none;
    margin-right: 8px;
    box-sizing: border-box;
    &::placeholder {
      color: gray;
    }
  }
  .buttonSearch {
    background-color: transparent;
    margin-left: 10px;
    border: 0;
    cursor: pointer;
    animation: transform 0.5s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
