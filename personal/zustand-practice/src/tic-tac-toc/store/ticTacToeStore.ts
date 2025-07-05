import { create } from "zustand";

// 플레이어 타입
export type Player = "X" | "O";

// 게임 상태
export type GameStatus = "playing" | "won" | "draw";

// 보드 셀 타입
export type Cell = Player | null;

// 게임 상태 타입
type GameState = {
  board: Cell[];
  currentPlayer: Player;
  gameStatus: GameStatus;
  winner: Player | null;
  moveHistory: number[];
  xWins: number;
  oWins: number;
  draws: number;
  totalGames: number;
};

// 액션 타입
type GameActions = {
  makeMove: (index: number) => void;
  resetGame: () => void;
  resetStats: () => void;
  undoMove: () => void;
  setDifficulty: (difficulty: "easy" | "medium" | "hard") => void;
};

// 승리 조건 체크
const checkWinner = (board: Cell[]): Player | null => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // 가로
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // 세로
    [0, 4, 8],
    [2, 4, 6], // 대각선
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

// 보드가 꽉 찼는지 체크
const isBoardFull = (board: Cell[]): boolean => {
  return board.every((cell) => cell !== null);
};

// Zustand store 생성
export const useTicTacToeStore = create<GameState & GameActions>(
  (set, get) => ({
    // 초기 상태
    board: Array(9).fill(null),
    currentPlayer: "X",
    gameStatus: "playing",
    winner: null,
    moveHistory: [],
    xWins: 0,
    oWins: 0,
    draws: 0,
    totalGames: 0,

    // 게임 액션들
    makeMove: (index: number) => {
      const { board, currentPlayer, gameStatus } = get();

      // 게임이 끝났거나 해당 위치에 이미 말이 있으면 무효
      if (gameStatus !== "playing" || board[index] !== null) {
        return;
      }

      // 새로운 보드 상태
      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      // 승리자 체크
      const winner = checkWinner(newBoard);
      let newGameStatus: GameStatus = "playing";
      let newXWins = get().xWins;
      let newOWins = get().oWins;
      let newDraws = get().draws;
      let newTotalGames = get().totalGames;

      if (winner) {
        newGameStatus = "won";
        newTotalGames += 1;
        if (winner === "X") {
          newXWins += 1;
        } else {
          newOWins += 1;
        }
      } else if (isBoardFull(newBoard)) {
        newGameStatus = "draw";
        newDraws += 1;
        newTotalGames += 1;
      }

      set({
        board: newBoard,
        currentPlayer: currentPlayer === "X" ? "O" : "X",
        gameStatus: newGameStatus,
        winner,
        moveHistory: [...get().moveHistory, index],
        xWins: newXWins,
        oWins: newOWins,
        draws: newDraws,
        totalGames: newTotalGames,
      });
    },

    resetGame: () => {
      set({
        board: Array(9).fill(null),
        currentPlayer: "X",
        gameStatus: "playing",
        winner: null,
        moveHistory: [],
      });
    },

    resetStats: () => {
      set({
        board: Array(9).fill(null),
        currentPlayer: "X",
        gameStatus: "playing",
        winner: null,
        moveHistory: [],
        xWins: 0,
        oWins: 0,
        draws: 0,
        totalGames: 0,
      });
    },

    undoMove: () => {
      const { moveHistory, board, currentPlayer } = get();

      if (moveHistory.length === 0) return;

      const lastMoveIndex = moveHistory[moveHistory.length - 1];
      const newBoard = [...board];
      newBoard[lastMoveIndex] = null;

      const newMoveHistory = moveHistory.slice(0, -1);
      const newCurrentPlayer = currentPlayer === "X" ? "O" : "X";

      set({
        board: newBoard,
        currentPlayer: newCurrentPlayer,
        gameStatus: "playing",
        winner: null,
        moveHistory: newMoveHistory,
      });
    },

    setDifficulty: (difficulty: "easy" | "medium" | "hard") => {
      // 나중에 AI 플레이어 구현시 사용
      console.log(`Difficulty set to: ${difficulty}`);
    },
  })
);

// 선택적 selector 함수들
export const useGameBoard = () => useTicTacToeStore((state) => state.board);
export const useCurrentPlayer = () =>
  useTicTacToeStore((state) => state.currentPlayer);
export const useGameStatus = () =>
  useTicTacToeStore((state) => state.gameStatus);
export const useWinner = () => useTicTacToeStore((state) => state.winner);
export const useGameStats = () =>
  useTicTacToeStore((state) => ({
    xWins: state.xWins,
    oWins: state.oWins,
    draws: state.draws,
    totalGames: state.totalGames,
  }));
export const useGameActions = () =>
  useTicTacToeStore((state) => ({
    makeMove: state.makeMove,
    resetGame: state.resetGame,
    resetStats: state.resetStats,
    undoMove: state.undoMove,
    setDifficulty: state.setDifficulty,
  }));
