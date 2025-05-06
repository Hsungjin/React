import Apply from '@/components/apply';
import useApplyCardMutation from '@/components/apply/hooks/useApplyCardMutation';
import { useState } from 'react';
import usePollApplyStatus from '@/components/apply/hooks/usePollApplyStatus';
import { updateApplyCard } from '@/remote/apply';
import { APPLY_STATUS } from '@/models/apply';
import useUser from '@/hooks/auth/useUser';
import { useParams, useNavigate } from 'react-router-dom';

function ApplyPage() {
  const user = useUser().user;
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [readyToPoll, setReadyToPoll] = useState(false);

  usePollApplyStatus({
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

  if (readyToPoll || 카드를신청중인가) {
    return <div>카드 신청 완료</div>;
  }

  return <Apply onSubmit={mutate} />;
}

export default ApplyPage;
