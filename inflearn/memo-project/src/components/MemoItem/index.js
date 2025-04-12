import './index.css';

function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem_delete-button" onClick={onClickDelete}>X</button>
    </div>
  );
}

export default MemoItem;
