import { selector } from 'recoil';

import testState from './atom';

const testWithComma = selector({
  key: 'testWithComma',
  get: ({ get }) => {
    const test = get(testState);
    return test.join(',');
  },
});

export default testWithComma;
