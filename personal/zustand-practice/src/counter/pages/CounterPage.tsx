import { useState } from "react";
import { useNavigate } from "react-router";
import { useCounterStore } from "../store/counterStore";

export default function CounterPage() {
  const navigate = useNavigate();
  const [customAmount, setCustomAmount] = useState<number>(1);

  const {
    count,
    incrementCount,
    decrementCount,
    history,
    increment,
    decrement,
    reset,
    incrementBy,
    decrementBy,
    clearHistory,
  } = useCounterStore();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoAbout = () => {
    navigate("/about");
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        🧮 카운터 페이지
      </h1>

      {/* 현재 카운터 값 표시 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            margin: "0",
            color: count > 0 ? "#4CAF50" : count < 0 ? "#f44336" : "#666",
          }}
        >
          {count}
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#666", margin: "10px 0" }}>
          현재 카운터 값
        </p>
      </div>

      {/* 기본 버튼들 */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={increment}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "15px 25px",
            fontSize: "1.2rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          ➕ 증가
        </button>

        <button
          onClick={decrement}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            padding: "15px 25px",
            fontSize: "1.2rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          ➖ 감소
        </button>

        <button
          onClick={reset}
          style={{
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            padding: "15px 25px",
            fontSize: "1.2rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          🔄 리셋
        </button>
      </div>

      {/* 커스텀 증감 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "400px",
          margin: "0 auto 30px",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#666" }}>🎯 커스텀 증감</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(Number(e.target.value))}
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "2px solid #ddd",
              width: "100px",
              textAlign: "center",
            }}
          />
          <button
            onClick={() => incrementBy(customAmount)}
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              padding: "10px 15px",
              fontSize: "1rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ➕ {customAmount}
          </button>
          <button
            onClick={() => decrementBy(customAmount)}
            style={{
              backgroundColor: "#9C27B0",
              color: "white",
              border: "none",
              padding: "10px 15px",
              fontSize: "1rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ➖ {customAmount}
          </button>
        </div>
      </div>

      {/* 통계 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#666" }}>📊 통계</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "#E8F5E8",
              padding: "15px",
              borderRadius: "8px",
              border: "2px solid #4CAF50",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#4CAF50" }}>
              증가 횟수
            </div>
            <div style={{ fontSize: "1.5rem" }}>{incrementCount}</div>
          </div>
          <div
            style={{
              backgroundColor: "#FFEBEE",
              padding: "15px",
              borderRadius: "8px",
              border: "2px solid #f44336",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#f44336" }}>
              감소 횟수
            </div>
            <div style={{ fontSize: "1.5rem" }}>{decrementCount}</div>
          </div>
          <div
            style={{
              backgroundColor: "#E3F2FD",
              padding: "15px",
              borderRadius: "8px",
              border: "2px solid #2196F3",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2196F3" }}>
              총 조작 횟수
            </div>
            <div style={{ fontSize: "1.5rem" }}>
              {incrementCount + decrementCount}
            </div>
          </div>
        </div>
      </div>

      {/* 히스토리 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <h3 style={{ margin: "0", color: "#666" }}>
            📜 히스토리 ({history.length}개)
          </h3>
          <button
            onClick={clearHistory}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              padding: "8px 12px",
              fontSize: "0.9rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🗑️ 히스토리 지우기
          </button>
        </div>
        <div
          style={{
            maxHeight: "150px",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          {history.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {history.map((value, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor:
                      value > 0 ? "#4CAF50" : value < 0 ? "#f44336" : "#666",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontSize: "0.9rem",
                  }}
                >
                  {value}
                </span>
              ))}
            </div>
          ) : (
            <p style={{ color: "#999", margin: "0", fontStyle: "italic" }}>
              아직 히스토리가 없습니다.
            </p>
          )}
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleGoHome}
          style={{
            backgroundColor: "#607D8B",
            color: "white",
            border: "none",
            padding: "12px 25px",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          🏠 메인으로 돌아가기
        </button>

        <button
          onClick={handleGoAbout}
          style={{
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            padding: "12px 25px",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          ℹ️ 정보 페이지로 이동
        </button>
      </div>
    </div>
  );
}
