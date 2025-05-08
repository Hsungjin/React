import Flex from '@shared/Flex';
import Text from '@shared/Text';

import useUser from '@hooks/auth/useUser';
import Button from '@shared/Button';
import { auth } from '@/remote/firebase';
import { signOut } from 'firebase/auth';
import { useCallback } from 'react';
import MyImage from '@/components/my/MyImage';
import Spacing from '@shared/Spacing';

function MyPage() {
  const user = useUser().user;

  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center">
      <Spacing size={40} />
      <MyImage size={100} mode="upload" />
      <Spacing size={20} />
      <Text typography="t4" bold>
        {user?.displayName}
      </Text>
      <Spacing size={20} />
      <Button size="medium" onClick={handleSignOut}>
        로그아웃
      </Button>
    </Flex>
  );
}

export default MyPage;
