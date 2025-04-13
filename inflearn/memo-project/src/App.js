import { useCallback, useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { getItem, setItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debounceSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem("memo") || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      const newMemos = [...memos];

      newMemos[selectedMemoIndex] = newMemo;
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        debounceSetItem("memo", [...newMemos]);
        return newMemos;
      });
    },
    [selectedMemoIndex]
  );

  const addMemo = useCallback(() => {
    const now = new Date().getTime();

    const newMemo = {
      title: "Untitled",
      content: "",
      createdAt: now,
      updatedAt: now,
    };

    // setMemos([...memos, newMemo]);
    setMemos((memos) => {
      const newMemos = [...memos, newMemo];
      debounceSetItem("memo", [...newMemos]);
      return newMemos;
    });
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debounceSetItem("memo", [...newMemos]);
        return newMemos;
      });

      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
