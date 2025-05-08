import Flex from '@shared/Flex';
import Text from '@shared/Text';
import Spacing from '@shared/Spacing';

function FullPageLoader({ message }: { message?: string }) {
  return (
    <>
      <Flex
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        justify="center"
        align="center"
      >
        <Flex direction="column" align="center">
          <img
            src="https://cdn.pixabay.com/photo/2024/02/19/21/11/rocket-8584128_1280.png"
            alt="rocket"
            style={{ width: 300, height: 450 }}
          />
          {message && (
            <>
              <Spacing size={120} />
              <Text bold typography="t4">
                {message}
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default FullPageLoader;
