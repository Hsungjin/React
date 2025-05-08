import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors } from '@/styles/colorPalette';

import Flex from '@shared/Flex';
import Button from '@shared/Button';
import Text from '@shared/Text';
import useUser from '@hooks/auth/useUser';
import { useCallback } from 'react';
import MyImage from '@components/my/MyImage';

function Navbar() {
  const location = useLocation();
  const user = useUser().user;
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false;

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="/my">
          <MyImage />
        </Link>
      );
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button size="small">로그인/회원가입</Button>
        </Link>
      );
    }

    return null;
  }, [user, showSignButton]);

  return (
    <Flex align="center" justify="space-between" css={navbarContainerStyles}>
      <Link to="/">
        <Text typography="t5">홈</Text>
      </Link>
      {renderButton()}
    </Flex>
  );
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: var(--navbar-z-index);
  border-bottom: 1px solid ${colors.gray[200]};
`;

export default Navbar;
