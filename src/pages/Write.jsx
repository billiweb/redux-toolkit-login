import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addPost } from "../redux/modules/boardSlice";

const Write = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const location = useLocation();

  const writerId = location.state.userId;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={() => {
          dispatch(
            addPost({
              title,
              contents,
              writerId,
            })
          );
          navigate("/");
        }}
      >
        <h2>글작성 페이지</h2>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button>작성하기</button>
      </form>
    </div>
  );
};

export default Write;
