import styled from 'styled-components';

const TextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;

  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  width: 100%;
  height: 196px;
  resize: none;
`;

function TextAreaInput({ answer = '', setAnswer, options }) {
  return (
    <TextArea
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder={options?.placeholder}
      { ...(options?.max ? {maxLength: options.max} : null) }
    />
  );
}

export default TextAreaInput;
