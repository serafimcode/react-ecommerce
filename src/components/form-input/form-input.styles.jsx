import styled from 'styled-components';
import { css } from 'styled-components';

const SUB_COLOR = 'grey';
const MAIN_COLOR = 'black';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${MAIN_COLOR};
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
  
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormGroupInput = styled.input`
  background: none;
  background-color: white;
  color: ${SUB_COLOR};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${SUB_COLOR};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${ shrinkLabel };
  }
`;

export const FormInputLabel = styled.label`
  color: ${ SUB_COLOR };
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${ ({ shrink }) => shrink && shrinkLabel };
`;