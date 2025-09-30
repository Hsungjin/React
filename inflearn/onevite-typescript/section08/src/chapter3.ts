/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fechUser(): User {
  return {
    id: 1,
    name: "황성진",
    age: 28,
  };
}

function updateUser(user: PartialUser) {
  return {
    ...user,
  };
}

updateUser({
  age: 25,
});
