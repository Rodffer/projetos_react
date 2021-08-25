import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  margin-bottom: 16px;
  .Active {
    transform: translate(0, 12px) scale(0.75);
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 26px) scale(1);
`;

export const InputField = styled.input`
  width: 100%;
  height: 56px;
  padding: 14px 16px 0 10px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;

  &:focus {
    border: 2px solid black;
  }

  &:valid + ${InputLabel} {
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }

  &:focus + ${InputLabel} {
    transform: translate(0, 12px) scale(0.75);
  }
`;
