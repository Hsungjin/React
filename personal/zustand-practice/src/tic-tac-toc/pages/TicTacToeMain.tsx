import { useNavigate } from "react-router";
import { useTicTacToeStore } from "../store/ticTacToeStore";

export default function TicTacToeMain() {
  const navigate = useNavigate();
  const { gameStatus, winner, currentPlayer, xWins, oWins, draws, totalGames } =
    useTicTacToeStore();

  const handleNavigateToGame = () => {
    navigate("/tic-tac-toe/game");
  };

  const handleNavigateToStats = () => {
    navigate("/tic-tac-toe/stats");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "30px",
          color: "#2d3748",
        }}
      >
        🎮 틱택토 게임
      </h1>

      {/* 현재 게임 상태 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#4a5568" }}>
          🎯 현재 게임 상태
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: gameStatus === "playing" ? "#48BB78" : "#E2E8F0",
              color: gameStatus === "playing" ? "white" : "#4A5568",
              padding: "20px",
              borderRadius: "10px",
              border:
                gameStatus === "playing"
                  ? "2px solid #38A169"
                  : "2px solid #CBD5E0",
            }}
          >
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              게임 상태
            </div>
            <div style={{ fontSize: "1.3rem", marginTop: "5px" }}>
              {gameStatus === "playing"
                ? "진행 중"
                : gameStatus === "won"
                ? "게임 종료"
                : "무승부"}
            </div>
          </div>

          <div
            style={{
              backgroundColor: gameStatus === "playing" ? "#4299E1" : "#E2E8F0",
              color: gameStatus === "playing" ? "white" : "#4A5568",
              padding: "20px",
              borderRadius: "10px",
              border:
                gameStatus === "playing"
                  ? "2px solid #3182CE"
                  : "2px solid #CBD5E0",
            }}
          >
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              현재 차례
            </div>
            <div style={{ fontSize: "1.8rem", marginTop: "5px" }}>
              {gameStatus === "playing" ? currentPlayer : winner || "-"}
            </div>
          </div>
        </div>

        {gameStatus === "won" && (
          <div
            style={{
              backgroundColor: "#FED7D7",
              color: "#C53030",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            🏆 {winner} 승리!
          </div>
        )}

        {gameStatus === "draw" && (
          <div
            style={{
              backgroundColor: "#FEEBC8",
              color: "#DD6B20",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            🤝 무승부!
          </div>
        )}
      </div>

      {/* 게임 통계 요약 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#4a5568" }}>📊 게임 통계</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "#E6FFFA",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #38B2AC",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2C7A7B" }}>X 승리</div>
            <div style={{ fontSize: "2rem", color: "#2C7A7B" }}>{xWins}</div>
          </div>

          <div
            style={{
              backgroundColor: "#FFF5F5",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #F56565",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#C53030" }}>O 승리</div>
            <div style={{ fontSize: "2rem", color: "#C53030" }}>{oWins}</div>
          </div>

          <div
            style={{
              backgroundColor: "#FFFAF0",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #ED8936",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#DD6B20" }}>무승부</div>
            <div style={{ fontSize: "2rem", color: "#DD6B20" }}>{draws}</div>
          </div>

          <div
            style={{
              backgroundColor: "#EDF2F7",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #4A5568",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2D3748" }}>총 게임</div>
            <div style={{ fontSize: "2rem", color: "#2D3748" }}>
              {totalGames}
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={handleNavigateToGame}
          style={{
            backgroundColor: "#48BB78",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.2rem",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 4px 15px rgba(72,187,120,0.4)",
            fontWeight: "bold",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#38A169")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#48BB78")
          }
        >
          🎮 게임 시작
        </button>

        <button
          onClick={handleNavigateToStats}
          style={{
            backgroundColor: "#4299E1",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.2rem",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 4px 15px rgba(66,153,225,0.4)",
            fontWeight: "bold",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#3182CE")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4299E1")
          }
        >
          📊 상세 통계
        </button>
      </div>

      {/* 홈으로 돌아가기 */}
      <button
        onClick={handleGoHome}
        style={{
          backgroundColor: "#718096",
          color: "white",
          border: "none",
          padding: "12px 25px",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4A5568")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#718096")}
      >
        🏠 메인 페이지로 돌아가기
      </button>

      <div
        style={{
          marginTop: "40px",
          fontSize: "1rem",
          color: "#718096",
        }}
      >
        <p>🎯 Zustand로 상태 관리되는 틱택토 게임</p>
        <p>모든 게임 기록이 저장됩니다!</p>
      </div>
    </div>
  );
}
