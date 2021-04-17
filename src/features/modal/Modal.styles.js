import styled from 'styled-components';

export const ModalContainer = styled.div(
  () => `
  display: flex;
  flex-flow: column;

.close-button {
   padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  background: #131325;
  border: 1px solid white;
  color: white;
  float: right;
}
`
);

export const ModalBodyContainer = styled.div(
  () => `
    margin-top: 20px;
    color: #000000;
`
);

export const ButtonContainer = styled.div(
  () => `
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;

    & button {
        width: 100px;
        height: 35px;
        padding: 10px;
        border-radius: 6px;
        margin-right: 10px;
        cursor: pointer;
        border: 1px solid 131325;
        color: 131325;
    }
`
);
