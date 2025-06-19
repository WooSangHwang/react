// import { useState } from "react";
// import {useRef} from "react";
import {useState, useRef} from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

    const countRef = useRef(0);
    // console.log(countRef.current);
    const inputRef = useRef();

  const [input, setInput] = useState({
      name : "",
      birth:"",
      country:"",
      bio:""
  });
    // console.log(input);

    // console.log(input);
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        if (input.name === "") {
            //이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }
    }
  //
  // const onChangeName = (e) => {
  //   // console.log(e.target.value);
  //   // setName(e.target.value);
  //   setInput({
  //       ...input,
  //       name : e.target.value
  //   })
  // };
  //
  // const onChangeBirth = (e) => {
  //     setInput({
  //         ...input,
  //         birth : e.target.value
  //     })
  // };
  //
  // const onChangeCountry = (e) => {
  //     setInput({
  //         ...input,
  //         country : e.target.value
  //     })
  // };
  //
  // const onChangeBio = (e) => {
  //     setInput({
  //         ...input,
  //         bio : e.target.value
  //     })
  // };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>
      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={input.bio} />
      </div>
        <button onSubmit={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
