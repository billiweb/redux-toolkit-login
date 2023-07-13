import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/modules/userSlice";

const Login = () => {
  const [userId, setUserId] = useState();
  const [pw, setPw] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Login Page</h2>
      <form
        onSubmit={() => {
          dispatch(
            login({
              userId: userId,
              pw: pw,
            })
          );
          navigate("/");
        }}
      >
        <input
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          placeholder="아이디"
        />
        <input
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          placeholder="비밀번호"
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default Login;
