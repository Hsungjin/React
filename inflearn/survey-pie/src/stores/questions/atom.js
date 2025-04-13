import { atom } from 'recoil';

const questionsState = atom({
  key: 'questionsState',
  default: [
    {
      title: '질문1 입니다.',
      desc: '질문1 설명 입니다.',
      type: 'text',
      required: false,
      options: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문 2 입니다.',
      desc: '질문 2 설명 입니다.',
      type: 'textarea',
      required: true,
      options: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문 3 입니다.',
      desc: '질문 3 설명 입니다.',
      type: 'select',
      required: true,
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
  ],
});

export default questionsState;
