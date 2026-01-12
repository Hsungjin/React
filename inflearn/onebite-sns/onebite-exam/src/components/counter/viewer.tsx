import { userCountStore } from "@/store/count";

export default function Viewer() {
  const { count } = userCountStore();

  return <div>{count}</div>;
}
