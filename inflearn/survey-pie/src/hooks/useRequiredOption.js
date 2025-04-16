import useCurrentQuestion from './useCurrentQuestion';

function useRequiredOption() {
  const question = useCurrentQuestion();
  const requiredOption = question?.required ?? false;
  return requiredOption;
}

export default useRequiredOption;
