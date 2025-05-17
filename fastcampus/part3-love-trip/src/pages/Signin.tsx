import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import Button from '@shared/Button'

import useGoogleSignin from '@hooks/useGoogleSignin'

function SigninPage() {
  const { signin } = useGoogleSignin()
  
  return (
    <Flex direction="column" align="center" css={{ padding: '24' }}>
      <Spacing size={100} />
      <img
        src="https://cdn4.iconfinder.com/data/icons/doodle-4/158/send-256.png"
        alt="logo"
        width={120}
      />
      <Spacing size={60} />
      <Button size="medium" onClick={signin}>
        <Flex align="center" justify="center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-64.png"
            alt="google"
            width={20}
            height={20}
          />
          <Spacing direction="horizontal" size={4} />
          <span>Google 로그인</span>
        </Flex>
      </Button>
    </Flex>
  )
}

export default SigninPage
