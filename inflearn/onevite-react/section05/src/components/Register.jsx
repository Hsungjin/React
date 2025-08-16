// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
// 5. 제출 버튼

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birthday: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (input.name === "") {
      alert("이름을 입력해주세요");
      inputRef.current.focus();
      return;
    }
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="이름"
          name="name"
          ref={inputRef}
          value={input.name}
          onChange={onChange}
        />
        <input
          type="date"
          placeholder="생년월일"
          name="birthday"
          value={input.birthday}
          onChange={onChange}
        />
        <select
          placeholder="국적"
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value="">국적을 선택해주세요</option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="JP">일본</option>
          <option value="CN">중국</option>
        </select>
        <textarea
          placeholder="자기소개"
          name="bio"
          value={input.bio}
          onChange={onChange}
          rows={10}
          style={{ width: "100%", resize: "none" }}
        />
        <button onClick={onSubmit}>제출</button>
      </div>
    </>
  );
};

export default Register;
