import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수, 언마운트
    return () => {
      console.log("Even 컴포넌트 언마운트");
    };
  }, []);

  return <div>짝수입니다.</div>;
};

export default Even;
