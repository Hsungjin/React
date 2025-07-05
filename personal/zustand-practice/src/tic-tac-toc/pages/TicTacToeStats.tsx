import { useNavigate } from "react-router";
import { useTicTacToeStore } from "../store/ticTacToeStore";

export default function TicTacToeStats() {
  const navigate = useNavigate();
  const {
    xWins,
    oWins,
    draws,
    totalGames,
    gameStatus,
    winner,
    currentPlayer,
    moveHistory,
    resetStats,
  } = useTicTacToeStore();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoTicTacToeMain = () => {
    navigate("/tic-tac-toe");
  };

  const handleGoGame = () => {
    navigate("/tic-tac-toe/game");
  };

  const handleResetStats = () => {
    if (confirm("정말로 모든 통계를 초기화하시겠습니까?")) {
      resetStats();
    }
  };

  const getWinRate = (wins: number) => {
    if (totalGames === 0) return 0;
    return Math.round((wins / totalGames) * 100);
  };

  const getDrawRate = () => {
    if (totalGames === 0) return 0;
    return Math.round((draws / totalGames) * 100);
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fafc",
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
        📊 틱택토 게임 통계
      </h1>

      {/* 현재 게임 상태 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#4a5568" }}>
          🎮 현재 게임 상태
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: gameStatus === "playing" ? "#E6FFFA" : "#F7FAFC",
              padding: "20px",
              borderRadius: "10px",
              border: `2px solid ${
                gameStatus === "playing" ? "#38B2AC" : "#E2E8F0"
              }`,
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2D3748" }}>
              게임 상태
            </div>
            <div
              style={{ fontSize: "1.2rem", color: "#4A5568", marginTop: "5px" }}
            >
              {gameStatus === "playing"
                ? "진행 중"
                : gameStatus === "won"
                ? "완료"
                : "무승부"}
            </div>
          </div>

          <div
            style={{
              backgroundColor: gameStatus === "playing" ? "#EBF8FF" : "#F7FAFC",
              padding: "20px",
              borderRadius: "10px",
              border: `2px solid ${
                gameStatus === "playing" ? "#4299E1" : "#E2E8F0"
              }`,
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2D3748" }}>
              현재 플레이어
            </div>
            <div
              style={{ fontSize: "1.5rem", color: "#4A5568", marginTop: "5px" }}
            >
              {gameStatus === "playing" ? currentPlayer : winner || "-"}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#F0F4F8",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #CBD5E0",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2D3748" }}>
              현재 게임 수
            </div>
            <div
              style={{ fontSize: "1.5rem", color: "#4A5568", marginTop: "5px" }}
            >
              {moveHistory.length}
            </div>
          </div>
        </div>
      </div>

      {/* 전체 게임 통계 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "800px",
          margin: "0 auto 30px",
        }}
      >
        <h2 style={{ marginBottom: "25px", color: "#4a5568" }}>
          🏆 전체 게임 통계
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#E6FFFA",
              padding: "25px",
              borderRadius: "12px",
              border: "3px solid #38B2AC",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🎯</div>
            <div
              style={{
                fontWeight: "bold",
                color: "#2C7A7B",
                fontSize: "1.1rem",
              }}
            >
              X 승리
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                color: "#2C7A7B",
                fontWeight: "bold",
              }}
            >
              {xWins}
            </div>
            <div
              style={{ fontSize: "1rem", color: "#4A5568", marginTop: "5px" }}
            >
              {getWinRate(xWins)}% 승률
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FFF5F5",
              padding: "25px",
              borderRadius: "12px",
              border: "3px solid #F56565",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>⭕</div>
            <div
              style={{
                fontWeight: "bold",
                color: "#C53030",
                fontSize: "1.1rem",
              }}
            >
              O 승리
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                color: "#C53030",
                fontWeight: "bold",
              }}
            >
              {oWins}
            </div>
            <div
              style={{ fontSize: "1rem", color: "#4A5568", marginTop: "5px" }}
            >
              {getWinRate(oWins)}% 승률
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FFFAF0",
              padding: "25px",
              borderRadius: "12px",
              border: "3px solid #ED8936",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🤝</div>
            <div
              style={{
                fontWeight: "bold",
                color: "#DD6B20",
                fontSize: "1.1rem",
              }}
            >
              무승부
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                color: "#DD6B20",
                fontWeight: "bold",
              }}
            >
              {draws}
            </div>
            <div
              style={{ fontSize: "1rem", color: "#4A5568", marginTop: "5px" }}
            >
              {getDrawRate()}% 비율
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#EDF2F7",
              padding: "25px",
              borderRadius: "12px",
              border: "3px solid #4A5568",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🎮</div>
            <div
              style={{
                fontWeight: "bold",
                color: "#2D3748",
                fontSize: "1.1rem",
              }}
            >
              총 게임
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                color: "#2D3748",
                fontWeight: "bold",
              }}
            >
              {totalGames}
            </div>
            <div
              style={{ fontSize: "1rem", color: "#4A5568", marginTop: "5px" }}
            >
              총 플레이 횟수
            </div>
          </div>
        </div>

        {/* 승률 분석 */}
        {totalGames > 0 && (
          <div
            style={{
              backgroundColor: "#F7FAFC",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#4A5568" }}>
              📈 승률 분석
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "15px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: "bold", color: "#2C7A7B" }}>
                  X 플레이어가 더 우세
                </div>
                <div style={{ fontSize: "1.2rem", color: "#4A5568" }}>
                  {xWins > oWins ? "✅" : "❌"}
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: "bold", color: "#C53030" }}>
                  O 플레이어가 더 우세
                </div>
                <div style={{ fontSize: "1.2rem", color: "#4A5568" }}>
                  {oWins > xWins ? "✅" : "❌"}
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: "bold", color: "#DD6B20" }}>
                  무승부가 많음
                </div>
                <div style={{ fontSize: "1.2rem", color: "#4A5568" }}>
                  {draws > Math.max(xWins, oWins) ? "✅" : "❌"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 게임 기록이 없을 때 */}
      {totalGames === 0 && (
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            marginBottom: "30px",
            maxWidth: "500px",
            margin: "0 auto 30px",
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎯</div>
          <h2 style={{ color: "#4A5568", marginBottom: "15px" }}>
            아직 게임 기록이 없습니다
          </h2>
          <p
            style={{ color: "#718096", fontSize: "1.1rem", lineHeight: "1.6" }}
          >
            첫 게임을 시작해서 통계를 쌓아보세요!
            <br />매 게임마다 결과가 자동으로 기록됩니다.
          </p>
        </div>
      )}

      {/* 액션 버튼 */}
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
          onClick={handleGoGame}
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

        {totalGames > 0 && (
          <button
            onClick={handleResetStats}
            style={{
              backgroundColor: "#F56565",
              color: "white",
              border: "none",
              padding: "15px 30px",
              fontSize: "1.2rem",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 4px 15px rgba(245,101,101,0.4)",
              fontWeight: "bold",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#E53E3E")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#F56565")
            }
          >
            🗑️ 통계 초기화
          </button>
        )}
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

      <div
        style={{
          marginTop: "40px",
          fontSize: "1rem",
          color: "#718096",
        }}
      >
        <p>📊 Zustand로 관리되는 실시간 게임 통계</p>
        <p>모든 게임 결과가 자동으로 저장됩니다!</p>
      </div>
    </div>
  );
}
