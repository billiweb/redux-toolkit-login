import { useLocation } from "react-router-dom";

const Edit = () => {
  const location = useLocation();

  console.log("location >>", location);

  return (
    <div>
      <h2>Edit Page</h2>
      <input placeholder="Title" />
      <input placeholder="Contents" />
      <button>저장하기</button>
    </div>
  );
};

export default Edit;
