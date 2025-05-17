import { Link, useLocation } from 'react-router-dom'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'

import Flex from '@shared/Flex'
import Button from '@shared/Button'
import Text from '@shared/Text'
import { useCallback } from 'react'
import { useUserStore } from '@store/atom/user'

function Navbar() {
  const location = useLocation()

  const user = useUserStore((state) => state.getUser())
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="/my">
          <img
            src={
              user.photoURL ??
              'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-256.png'
            }
            alt="userProfile"
            width={40}
            height={40}
            style={{ borderRadius: '100%' }}
          />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button size="small">로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex align="center" justify="space-between" css={navbarContainerStyles}>
      <Link to="/">
        <Text typography="t4" bold>Love Trip</Text>
      </Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: var(--navbar-z-index);
  border-bottom: 1px solid ${colors.gray[200]};
`

export default Navbar
