import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/modules/userSlice";
import { deletePost } from "../redux/modules/boardSlice";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const boardList = useSelector(function (state) {
    return state.boardSlice;
  });

  const userList = useSelector(function (state) {
    return state.userSlice;
  });

  const loginUser = userList.find((user) => user.isLogin === true);

  console.log("loginUser", loginUser);

  console.log(boardList);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            onClick={() => {
              navigate("login");
            }}
          >
            로그인
          </button>
          <button
            onClick={() => {
              navigate("join");
            }}
          >
            회원가입
          </button>
          <button
            onClick={() => {
              if (loginUser) {
                navigate("/write", {
                  state: { writerId: loginUser.id },
                });
              } else {
                alert("로그인이 필요합니다.");
                return false;
              }
            }}
          >
            글 작성
          </button>
        </div>

        {loginUser ? (
          <div>
            {loginUser.userId} 님{" "}
            <button
              onClick={() => {
                const isConfirmed = window.confirm("로그아웃 하시겠습니까?");
                if (isConfirmed) {
                }
                dispatch(logout(loginUser.id));
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {boardList
          .filter((board) => {
            return board.isDeleted === false;
          })
          .map((board) => {
            return (
              <div
                key={board.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                }}
              >
                <p>{board.title}</p>
                <p>{board.contents}</p>
                <button
                  onClick={() => {
                    if (window.confirm("삭제하시겠습니까?")) {
                      dispatch(deletePost(board.id));
                    } else {
                      return false;
                    }
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    navigate("edit", {});
                  }}
                >
                  수정
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
