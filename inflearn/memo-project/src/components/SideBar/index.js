import { memo } from "react";
import MemoList from "../MemoList";
import SideBarHeader from "../SideBarHeader";
import SideBarFooter from "../SideBarFooter";
import "./index.css";

function SideBar({ memos, addMemo, deleteMemo, setSelectedMemoIndex, selectedMemoIndex}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList memos={memos} setSelectedMemoIndex={setSelectedMemoIndex} selectedMemoIndex={selectedMemoIndex} deleteMemo={deleteMemo} />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
