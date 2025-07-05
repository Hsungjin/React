import { useNavigate } from "react-router";
import { useCounterStore } from "../store/counterStore";
import { useTicTacToeStore } from "../../tic-tac-toc/store/ticTacToeStore";

export default function MainPage() {
  const navigate = useNavigate();
  const { count, incrementCount, decrementCount } = useCounterStore();
  const { xWins, oWins, draws, totalGames } = useTicTacToeStore();

  const handleNavigateToCounter = () => {
    navigate("/counter");
  };

  const handleNavigateToAbout = () => {
    navigate("/about");
  };

  const handleNavigateToTicTacToe = () => {
    navigate("/tic-tac-toe");
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
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
        🏠 메인 페이지
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#666" }}>
          📊 현재 카운터 상태
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              minWidth: "120px",
            }}
          >
            <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              현재 값
            </div>
            <div style={{ fontSize: "2rem" }}>{count}</div>
          </div>
          <div
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              minWidth: "120px",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
              증가 횟수
            </div>
            <div style={{ fontSize: "1.5rem" }}>{incrementCount}</div>
          </div>
          <div
            style={{
              backgroundColor: "#FF9800",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              minWidth: "120px",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
              감소 횟수
            </div>
            <div style={{ fontSize: "1.5rem" }}>{decrementCount}</div>
          </div>
        </div>
      </div>

      {/* 틱택토 게임 상태 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#666" }}>
          🎮 틱택토 게임 상태
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#9C27B0",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              minWidth: "100px",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>X 승리</div>
            <div style={{ fontSize: "1.5rem" }}>{xWins}</div>
          </div>
          <div
            style={{
              backgroundColor: "#E91E63",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              minWidth: "100px",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>O 승리</div>
            <div style={{ fontSize: "1.5rem" }}>{oWins}</div>
          </div>
          <div
            style={{
              backgroundColor: "#FF5722",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              minWidth: "100px",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>무승부</div>
            <div style={{ fontSize: "1.5rem" }}>{draws}</div>
          </div>
          <div
            style={{
              backgroundColor: "#607D8B",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              minWidth: "100px",
            }}
          >
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>총 게임</div>
            <div style={{ fontSize: "1.5rem" }}>{totalGames}</div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleNavigateToCounter}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#45a049")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4CAF50")
          }
        >
          🧮 카운터 페이지로 이동
        </button>

        <button
          onClick={handleNavigateToTicTacToe}
          style={{
            backgroundColor: "#9C27B0",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#7B1FA2")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#9C27B0")
          }
        >
          🎮 틱택토 게임
        </button>

        <button
          onClick={handleNavigateToAbout}
          style={{
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#1976D2")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#2196F3")
          }
        >
          ℹ️ 정보 페이지로 이동
        </button>
      </div>

      <div
        style={{
          marginTop: "40px",
          fontSize: "1rem",
          color: "#666",
        }}
      >
        <p>🚀 Zustand와 React Router v7을 사용한 연습 프로젝트</p>
        <p>카운터와 틱택토 게임을 즐겨보세요!</p>
        <p>각 페이지에서 상태가 공유되는 것을 확인해보세요!</p>
      </div>
    </div>
  );
}
