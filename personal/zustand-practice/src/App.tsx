import { createBrowserRouter, RouterProvider } from "react-router";
import MainPage from "./counter/pages/MainPage";
import CounterPage from "./counter/pages/CounterPage";
import AboutPage from "./counter/pages/AboutPage";
import TicTacToeMain from "./tic-tac-toc/pages/TicTacToeMain";
import TicTacToeGame from "./tic-tac-toc/pages/TicTacToeGame";
import TicTacToeStats from "./tic-tac-toc/pages/TicTacToeStats";
import "./App.css";

// React Router v7 방식으로 라우터 생성
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/counter",
    element: <CounterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToeMain />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tic-tac-toe/game",
    element: <TicTacToeGame />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tic-tac-toe/stats",
    element: <TicTacToeStats />,
    errorElement: <ErrorPage />,
  },
]);

// 에러 페이지 컴포넌트
function ErrorPage() {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffebee",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "30px",
          color: "#d32f2f",
        }}
      >
        ❌ 오류가 발생했습니다
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
          🔍 페이지를 찾을 수 없습니다
        </h2>
        <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: "1.6" }}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
      </div>

      <button
        onClick={() => (window.location.href = "/")}
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
        🏠 메인 페이지로 돌아가기
      </button>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
