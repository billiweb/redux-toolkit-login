import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { join } from "../redux/modules/userSlice";

const Join = () => {
  const [userId, setUserId] = useState();
  const [pw, setPw] = useState();
  const [confPw, setConfPw] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Join Page</h2>
      <form
        onSubmit={() => {
          if (pw !== confPw) {
            alert("비밀번호가 일치하지 않습니다.");
            return false;
          }

          dispatch(
            join({
              userId,
              pw,
              name,
            })
          );

          alert("회원가입 완료!");
          navigate("/");
        }}
      >
        <input
          placeholder="아이디"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <input
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <input
          placeholder="확인 비밀번호"
          value={confPw}
          onChange={(e) => {
            setConfPw(e.target.value);
          }}
        />
        <input
          placeholder="고객명"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default Join;
