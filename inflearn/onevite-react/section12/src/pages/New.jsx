import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const navigate = useNavigate();

  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    navigate("/", { replace: true });
  };

  usePageTitle("감정 일기장 - 새 일기");

  return (
    <div>
      <Header
        title="새 일기 쓰기"
        leftChild={
          <Button
            text="< 뒤로 가기"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
