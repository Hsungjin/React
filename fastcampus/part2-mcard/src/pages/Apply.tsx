import Apply from '@/components/apply';
import useApplyCardMutation from '@/components/apply/hooks/useApplyCardMutation';
import { useState } from 'react';
import usePollApplyStatus from '@/components/apply/hooks/usePollApplyStatus';
import { updateApplyCard } from '@/remote/apply';
import { APPLY_STATUS } from '@/models/apply';
import useUser from '@/hooks/auth/useUser';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppliedCard } from '@/components/apply/hooks/useApliedCard';
import { useAlertContext } from '@/contexts/AlertContext';
import FullPageLoader from '@/components/shared/FullPageLoader';

const STATUS_MESSAGE = {
  [APPLY_STATUS.READY]: '카드 신청을 진행중입니다.',
  [APPLY_STATUS.PROGRESS]: '카드 신청을 진행중입니다.',
  [APPLY_STATUS.COMPLETE]: '카드 신청이 완료되었습니다.',
};

function ApplyPage() {
  const user = useUser().user;
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [readyToPoll, setReadyToPoll] = useState(false);
  const { open } = useAlertContext();

  const { data } = useAppliedCard({
    userId: user?.uid as string,
    cardId: id,
    options: {
      onSuccess: (applied) => {
        if (applied == null) {
          return;
        }

        if (applied?.status === APPLY_STATUS.COMPLETE) {
          open({
            title: STATUS_MESSAGE[APPLY_STATUS.COMPLETE],
            onButtonClick: () => {
              window.history.back();
            },
          });

          return;
        }

        setReadyToPoll(true);
      },
      onError: () => {},
      suspense: true,
    },
  });

  const { data: status } = usePollApplyStatus({
    onSuccess: async () => {
      await updateApplyCard({
        cardId: id,
        userId: user?.uid as string,
        applyValues: { status: APPLY_STATUS.COMPLETE },
      });
      navigate('/apply/done?success=true', {
        replace: true,
      });
    },
    onError: async () => {
      await updateApplyCard({
        cardId: id,
        userId: user?.uid as string,
        applyValues: { status: APPLY_STATUS.REJECT },
      });
      navigate('/apply/done?success=false', {
        replace: true,
      });
    },
    enabled: readyToPoll,
  });
  const { mutate, isLoading: 카드를신청중인가 } = useApplyCardMutation({
    onSuccess: () => {
      setReadyToPoll(true);
    },
    onError: () => {
      window.history.back();
    },
  });

  if (data != null && data.status === APPLY_STATUS.COMPLETE) {
    return null;
  }

  if (readyToPoll || 카드를신청중인가) {
    return <FullPageLoader message={STATUS_MESSAGE[status ?? 'READY']} />;
  }

  return <Apply onSubmit={mutate} />;
}

export default ApplyPage;
