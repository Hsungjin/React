import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type countStore = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

export const userCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increase: () => {
                // set((state) => ({
                //   count: state.count + 1,
                // }));
                set((state) => {
                  state.count += 1;
                });
              },
              decrease: () => {
                // set((state) => ({
                //   count: state.count - 1,
                // }));
                set((state) => {
                  state.count -= 1;
                });
              },
            },
          })),
        ),
      ),
      {
        name: "countStore",
        partialize: (state) => ({
          count: state.count,
        }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "countStore",
    },
  ),
);

userCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // Listner
    console.log(count, prevCount);

    const store = userCountStore.getState();
    userCountStore.setState((store) => {});
  },
);

// export const userCountStore = create<countStore>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = userCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = userCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = userCountStore((store) => store.actions.decrease);
  return decrease;
};
