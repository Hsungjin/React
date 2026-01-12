import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "@/components/ui/button";

export default function Controller() {
  // const { increase, decrease } = userCountStore();
  // const increase = userCountStore((store) => store.increase);
  // const decrease = userCountStore((store) => store.decrease);
  // const { increase, decrease } = userCountStore((store) => store.actions);
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
}
