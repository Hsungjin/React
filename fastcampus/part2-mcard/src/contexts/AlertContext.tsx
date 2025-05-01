import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import Alert from '@shared/Alert';

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, 'open'>;

interface AlertContextProps {
  open: (options: AlertOptions) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

const defaultValues: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
};

export function AlertContextProvider({ children }: { children: React.ReactNode }) {
  const [alertState, setAlertState] = useState<AlertProps>(defaultValues);
  const $portal_root = document.getElementById('root-portal');

  const close = useCallback(() => {
    setAlertState(defaultValues);
  }, []);

  const open = useCallback(({ onButtonClick, ...options }: AlertOptions) => {
    setAlertState({
      ...options,
      open: true,
      onButtonClick: () => {
        close();
        onButtonClick();
      },
    });
  }, [close]);

  const values = useMemo(() => ({ open }), [open]);

  return (
    <AlertContext.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
      <Alert {...alertState} />
    </AlertContext.Provider>
  );
}

export function useAlertContext() {
  const values = useContext(AlertContext);

    if (values == null) {
        throw new Error('useAlertContext must be used within a AlertContextProvider');
    }

    return values;
}


