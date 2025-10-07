/**
 * Pick<T, K>
 * -> 특정 객체 타입에서 특정 프로퍼티만 선택하여 타입을 정의하는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailUrl'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 콘텐츠",
  // tags: [],
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 특정 객체 타입에서 특정 프로퍼티만 제외하여 타입을 정의하는 타입
 */

type Omit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

const noTitlePost: Omit<Post, "title"> = {
  tags: ["javascript", "typescript"],
  content: "초안...",
  thumbnailUrl: "https://...",
};

/**
 * Record<K, V>
 * -> 특정 타입으로 구성된 객체 타입을 정의하는 타입
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

const thumbnail: Thumbnail = {
  large: { url: "https://...", size: 100 },
  medium: { url: "https://...", size: 50 },
  small: { url: "https://...", size: 30 },
  watch: { url: "https://...", size: 20 },
};
