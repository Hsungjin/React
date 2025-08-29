import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  usePageTitle(`감정 일기장 - ${Number(id) + 1} 번 일기`);

  const currentDiaryItem = useDiary(id);

  if (!currentDiaryItem) {
    return <div>일기를 찾을 수 없습니다.</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <Header
        title={`${getStringedDate(
          new Date(currentDiaryItem.createdDate)
        )} 기록`}
        leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
        rightChild={<Button text="수정하기" onClick={goEdit} />}
      />
      <Viewer currentDiaryItem={currentDiaryItem} />
    </div>
  );
};

export default Diary;
