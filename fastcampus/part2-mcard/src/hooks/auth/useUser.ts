import { useStore } from 'zustand';
import useUserStore from '@stores/user';

function useUser() {
  const { user } = useStore(useUserStore);
  return { user };
}

export default useUser;
