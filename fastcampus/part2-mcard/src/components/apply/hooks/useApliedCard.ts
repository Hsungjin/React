import { useQuery, UseQueryOptions } from 'react-query';

import { getAppliedCard } from '@/remote/apply';
import { ApplyValues } from '@/models/apply';

export function useAppliedCard({
  userId,
  cardId,
  options,
}: {
  userId: string;
  cardId: string;
  options?: Pick<
    UseQueryOptions<ApplyValues | null>,
    'onSuccess' | 'onError' | 'suspense'
  >;
}) {
  return useQuery(
    ['appliedCard', userId, cardId],
    () => getAppliedCard({ userId, cardId }),
    options
  );
}
