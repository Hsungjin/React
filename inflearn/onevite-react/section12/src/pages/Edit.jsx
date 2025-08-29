import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const { id } = useParams();
  const currentDiaryItem = useDiary(id);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  usePageTitle(`감정 일기장 - ${Number(id) + 1} 번 일기 수정`);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까? 다시 복구할 수 없습니다.")) {
      onDelete(Number(id));
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정하시겠습니까?")) {
      onUpdate(id, input.createdDate.getTime(), input.emotionId, input.content);
      navigate("/", { replace: true });
    } else {
      window.alert("수정이 취소되었습니다.");
      navigate(-1);
      return;
    }
  };

  return (
    <div>
      <Header
        title="일기수정하기"
        leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
        rightChild={
          <Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
