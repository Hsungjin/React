import { create } from "zustand";

// State의 타입 정의
type CounterState = {
  count: number;
  incrementCount: number;
  decrementCount: number;
  history: number[];
};

// Actions의 타입 정의
type CounterActions = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (amount: number) => void;
  decrementBy: (amount: number) => void;
  addToHistory: (value: number) => void;
  clearHistory: () => void;
};

// Zustand store 생성
export const useCounterStore = create<CounterState & CounterActions>((set) => ({
  // 초기 상태
  count: 0,
  incrementCount: 0,
  decrementCount: 0,
  history: [],

  // Actions
  increment: () =>
    set((state) => ({
      count: state.count + 1,
      incrementCount: state.incrementCount + 1,
      history: [...state.history, state.count + 1],
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
      decrementCount: state.decrementCount + 1,
      history: [...state.history, state.count - 1],
    })),

  reset: () =>
    set(() => ({
      count: 0,
      incrementCount: 0,
      decrementCount: 0,
      history: [],
    })),

  incrementBy: (amount: number) =>
    set((state) => ({
      count: state.count + amount,
      incrementCount: state.incrementCount + 1,
      history: [...state.history, state.count + amount],
    })),

  decrementBy: (amount: number) =>
    set((state) => ({
      count: state.count - amount,
      decrementCount: state.decrementCount + 1,
      history: [...state.history, state.count - amount],
    })),

  addToHistory: (value: number) =>
    set((state) => ({
      history: [...state.history, value],
    })),

  clearHistory: () =>
    set(() => ({
      history: [],
    })),
}));

// Selector 함수들 (성능 최적화를 위한 선택적 사용)
export const useCount = () => useCounterStore((state) => state.count);
export const useIncrementCount = () =>
  useCounterStore((state) => state.incrementCount);
export const useDecrementCount = () =>
  useCounterStore((state) => state.decrementCount);
export const useHistory = () => useCounterStore((state) => state.history);
export const useCounterActions = () =>
  useCounterStore((state) => ({
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
    incrementBy: state.incrementBy,
    decrementBy: state.decrementBy,
    addToHistory: state.addToHistory,
    clearHistory: state.clearHistory,
  }));
