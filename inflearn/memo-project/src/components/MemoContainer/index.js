import './index.css';

function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div className="MemoContainer">
        <h1>메모가 없습니다.</h1>
        <h2>새로운 메모를 추가해 주세요.</h2>
      </div>
    );
  }

  return (
    <div className="MemoConatiner">
      <div>
        <input
          type="text"
          className="MemoContainer_title"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
      <div>
        <textarea
          type="text"
          className="MemoContainer_content"
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;
