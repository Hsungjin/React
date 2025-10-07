/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 반드시 있어야 하는
 * -> 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const draft2: Required<Post> = {
  title: "제목 나중에 짓자",
  tags: ["javascript", "typescript"],
  content: "초안...",
  thumbnailUrl: "https://...",
};

/**
 * Readonly<T>
 * -> 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const draft3: Readonly<Post> = {
  title: "제목 나중에 짓자",
  tags: ["javascript", "typescript"],
  content: "초안...",
  thumbnailUrl: "https://...",
};

// draft3.title = "제목 수정";