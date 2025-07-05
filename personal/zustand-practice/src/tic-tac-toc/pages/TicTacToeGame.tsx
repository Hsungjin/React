import { useNavigate } from "react-router";
import { useTicTacToeStore } from "../store/ticTacToeStore";

export default function TicTacToeGame() {
  const navigate = useNavigate();
  const {
    board,
    currentPlayer,
    gameStatus,
    winner,
    moveHistory,
    makeMove,
    resetGame,
    undoMove,
  } = useTicTacToeStore();

  const handleCellClick = (index: number) => {
    makeMove(index);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoTicTacToeMain = () => {
    navigate("/tic-tac-toe");
  };

  const handleGoStats = () => {
    navigate("/tic-tac-toe/stats");
  };

  const getWinnerMessage = () => {
    if (gameStatus === "won") {
      return `🎉 ${winner} 플레이어 승리!`;
    } else if (gameStatus === "draw") {
      return "🤝 무승부!";
    }
    return "";
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7fafc",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#2d3748",
        }}
      >
        🎮 틱택토 게임
      </h1>

      {/* 게임 상태 표시 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        {gameStatus === "playing" ? (
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#4299E1",
            }}
          >
            {currentPlayer} 차례입니다
          </div>
        ) : (
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: gameStatus === "won" ? "#48BB78" : "#ED8936",
            }}
          >
            {getWinnerMessage()}
          </div>
        )}
      </div>

      {/* 게임 보드 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          maxWidth: "320px",
          margin: "0 auto 30px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
        }}
      >
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleCellClick(index)}
            disabled={cell !== null || gameStatus !== "playing"}
            style={{
              width: "90px",
              height: "90px",
              fontSize: "2.5rem",
              fontWeight: "bold",
              backgroundColor: cell ? "#f0f4f8" : "white",
              border: "3px solid #e2e8f0",
              borderRadius: "12px",
              cursor:
                gameStatus === "playing" && !cell ? "pointer" : "not-allowed",
              transition: "all 0.2s",
              color:
                cell === "X" ? "#e53e3e" : cell === "O" ? "#3182ce" : "#a0aec0",
              boxShadow: cell
                ? "inset 0 2px 4px rgba(0,0,0,0.1)"
                : "0 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseOver={(e) => {
              if (gameStatus === "playing" && !cell) {
                e.currentTarget.style.backgroundColor = "#edf2f7";
                e.currentTarget.style.borderColor = "#cbd5e0";
              }
            }}
            onMouseOut={(e) => {
              if (gameStatus === "playing" && !cell) {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }
            }}
          >
            {cell || ""}
          </button>
        ))}
      </div>

      {/* 게임 컨트롤 버튼 */}
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
          onClick={resetGame}
          style={{
            backgroundColor: "#48BB78",
            color: "white",
            border: "none",
            padding: "12px 24px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 3px 10px rgba(72,187,120,0.4)",
            fontWeight: "bold",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#38A169")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#48BB78")
          }
        >
          🔄 새 게임
        </button>

        <button
          onClick={undoMove}
          disabled={moveHistory.length === 0}
          style={{
            backgroundColor: moveHistory.length > 0 ? "#4299E1" : "#E2E8F0",
            color: moveHistory.length > 0 ? "white" : "#A0AEC0",
            border: "none",
            padding: "12px 24px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: moveHistory.length > 0 ? "pointer" : "not-allowed",
            transition: "all 0.3s",
            boxShadow:
              moveHistory.length > 0
                ? "0 3px 10px rgba(66,153,225,0.4)"
                : "none",
            fontWeight: "bold",
          }}
          onMouseOver={(e) => {
            if (moveHistory.length > 0) {
              e.currentTarget.style.backgroundColor = "#3182CE";
            }
          }}
          onMouseOut={(e) => {
            if (moveHistory.length > 0) {
              e.currentTarget.style.backgroundColor = "#4299E1";
            }
          }}
        >
          ⏪ 되돌리기
        </button>
      </div>

      {/* 게임 정보 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "400px",
          margin: "0 auto 30px",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#4a5568" }}>📊 게임 정보</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f0f4f8",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#4a5568" }}>
              움직임 수
            </div>
            <div style={{ fontSize: "1.5rem", color: "#2d3748" }}>
              {moveHistory.length}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f0f4f8",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#4a5568" }}>
              게임 상태
            </div>
            <div style={{ fontSize: "1.2rem", color: "#2d3748" }}>
              {gameStatus === "playing"
                ? "진행 중"
                : gameStatus === "won"
                ? "완료"
                : "무승부"}
            </div>
          </div>
        </div>
      </div>

      {/* 게임 팁 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#4a5568" }}>💡 게임 팁</h3>

        <div
          style={{
            textAlign: "left",
            color: "#718096",
            lineHeight: "1.6",
          }}
        >
          <p style={{ margin: "5px 0" }}>
            • 가로, 세로, 대각선으로 3개를 연속으로 놓으면 승리
          </p>
          <p style={{ margin: "5px 0" }}>
            • 상대방의 승리를 막는 것도 중요한 전략
          </p>
          <p style={{ margin: "5px 0" }}>
            • 모든 칸이 찰 때까지 승부가 나지 않으면 무승부
          </p>
          <p style={{ margin: "5px 0" }}>
            • 되돌리기 버튼으로 마지막 수를 취소할 수 있습니다
          </p>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleGoTicTacToeMain}
          style={{
            backgroundColor: "#9F7AEA",
            color: "white",
            border: "none",
            padding: "12px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#805AD5")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#9F7AEA")
          }
        >
          🎮 틱택토 메인
        </button>

        <button
          onClick={handleGoStats}
          style={{
            backgroundColor: "#4299E1",
            color: "white",
            border: "none",
            padding: "12px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#3182CE")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4299E1")
          }
        >
          📊 통계 보기
        </button>

        <button
          onClick={handleGoHome}
          style={{
            backgroundColor: "#718096",
            color: "white",
            border: "none",
            padding: "12px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4A5568")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#718096")
          }
        >
          🏠 홈으로
        </button>
      </div>
    </div>
  );
}
