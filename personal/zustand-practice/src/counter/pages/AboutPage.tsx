import { useNavigate } from "react-router";
import { useCounterStore } from "../store/counterStore";

export default function AboutPage() {
  const navigate = useNavigate();
  const { count, incrementCount, decrementCount, history } = useCounterStore();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoCounter = () => {
    navigate("/counter");
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fafafa",
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
        ℹ️ 프로젝트 정보
      </h1>

      {/* 현재 상태 요약 */}
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
        <h2 style={{ marginBottom: "20px", color: "#666" }}>
          📊 현재 상태 요약
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "15px",
            marginBottom: "20px",
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
            <div style={{ fontWeight: "bold", color: "#4CAF50" }}>현재 값</div>
            <div style={{ fontSize: "1.8rem" }}>{count}</div>
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
              backgroundColor: "#FFF3E0",
              padding: "15px",
              borderRadius: "8px",
              border: "2px solid #FF9800",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#FF9800" }}>히스토리</div>
            <div style={{ fontSize: "1.5rem" }}>{history.length}개</div>
          </div>
        </div>
        <p style={{ color: "#666", fontSize: "1rem", margin: "0" }}>
          💡 이 상태는 모든 페이지에서 공유됩니다!
        </p>
      </div>

      {/* 기술 스택 소개 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "700px",
          margin: "0 auto 30px",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#666",
          }}
        >
          🚀 사용된 기술 스택
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <h3
              style={{
                color: "#4CAF50",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              🐻 Zustand
            </h3>
            <ul style={{ color: "#666", lineHeight: "1.6" }}>
              <li>경량 상태 관리 라이브러리</li>
              <li>간단한 API와 TypeScript 지원</li>
              <li>Redux DevTools 호환</li>
              <li>보일러플레이트 코드 최소화</li>
            </ul>
          </div>

          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <h3
              style={{
                color: "#2196F3",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              🛣️ React Router v7
            </h3>
            <ul style={{ color: "#666", lineHeight: "1.6" }}>
              <li>최신 React Router 라이브러리</li>
              <li>Type-safe 네비게이션</li>
              <li>향상된 성능과 DX</li>
              <li>React 19 호환성</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 프로젝트 특징 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#666",
          }}
        >
          ✨ 프로젝트 특징
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#E8F5E8",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🔄</div>
            <h3 style={{ color: "#4CAF50", marginBottom: "10px" }}>
              상태 공유
            </h3>
            <p style={{ color: "#666", margin: "0" }}>
              모든 페이지에서 동일한 상태를 공유하며 실시간으로 업데이트됩니다.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🎯</div>
            <h3 style={{ color: "#2196F3", marginBottom: "10px" }}>
              타입 안전성
            </h3>
            <p style={{ color: "#666", margin: "0" }}>
              TypeScript를 사용하여 컴파일 타임에 오류를 방지합니다.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#FFF3E0",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>📱</div>
            <h3 style={{ color: "#FF9800", marginBottom: "10px" }}>
              반응형 디자인
            </h3>
            <p style={{ color: "#666", margin: "0" }}>
              모든 화면 크기에서 최적화된 사용자 경험을 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 구현된 기능 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "700px",
          margin: "0 auto 30px",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#666",
          }}
        >
          🛠️ 구현된 기능
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <h3 style={{ color: "#4CAF50", marginBottom: "15px" }}>
              🧮 카운터 기능
            </h3>
            <ul style={{ color: "#666", lineHeight: "1.6" }}>
              <li>기본 증가/감소 버튼</li>
              <li>커스텀 수치 증감</li>
              <li>리셋 기능</li>
              <li>통계 표시</li>
              <li>히스토리 추적</li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: "#2196F3", marginBottom: "15px" }}>
              🛣️ 네비게이션
            </h3>
            <ul style={{ color: "#666", lineHeight: "1.6" }}>
              <li>메인 페이지</li>
              <li>카운터 페이지</li>
              <li>정보 페이지</li>
              <li>페이지 간 상태 공유</li>
              <li>버튼 기반 네비게이션</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 학습 포인트 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#666",
          }}
        >
          📚 학습 포인트
        </h2>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "left",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <strong style={{ color: "#4CAF50" }}>1. Zustand Store 패턴</strong>
            <p style={{ color: "#666", margin: "5px 0" }}>
              상태와 액션을 하나의 store에서 관리하는 패턴을 학습
            </p>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <strong style={{ color: "#2196F3" }}>2. 페이지 간 상태 공유</strong>
            <p style={{ color: "#666", margin: "5px 0" }}>
              여러 페이지에서 동일한 상태를 공유하고 동기화하는 방법
            </p>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <strong style={{ color: "#FF9800" }}>
              3. React Router 네비게이션
            </strong>
            <p style={{ color: "#666", margin: "5px 0" }}>
              useNavigate 훅을 사용한 프로그래밍 방식의 네비게이션
            </p>
          </div>

          <div>
            <strong style={{ color: "#9C27B0" }}>
              4. TypeScript 타입 안전성
            </strong>
            <p style={{ color: "#666", margin: "5px 0" }}>
              타입 정의를 통한 안전한 상태 관리와 코드 자동완성
            </p>
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
        }}
      >
        <button
          onClick={handleGoHome}
          style={{
            backgroundColor: "#607D8B",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          🏠 메인으로 돌아가기
        </button>

        <button
          onClick={handleGoCounter}
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
        >
          🧮 카운터 페이지로 이동
        </button>
      </div>
    </div>
  );
}
