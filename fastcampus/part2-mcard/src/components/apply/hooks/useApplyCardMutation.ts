import { useMutation } from 'react-query';
import { applyCard } from '@/remote/apply';
import { ApplyValues } from '@/models/apply';
import { useAlertContext } from '@/contexts/AlertContext';

interface UseApplyCardMutationProps {
  onSuccess: () => void;
  onError: () => void;
}

function useApplyCardMutation({
  onSuccess,
  onError,
}: UseApplyCardMutationProps) {
  const { open } = useAlertContext();

  return useMutation((applyValues: ApplyValues) => applyCard(applyValues), {
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      onError();
      open({
        title: '카드 신청 실패, 나중에 다시 시도해주세요',
        onButtonClick: () => {
          onError();
        },
      });
    },
  });
}

export default useApplyCardMutation;
