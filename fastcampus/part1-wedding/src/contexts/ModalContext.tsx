import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import Modal from "../components/shared/Modal";
import { createPortal } from "react-dom";

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, "open">;

interface ModalContextType {
  open: (options: ModalOptions) => void;
  close: () => void;
}

const Context = createContext<ModalContextType | undefined>(undefined);

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
};

export function ModalContext({ children }: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues);

  const $portal_root = document.getElementById("root-portal");

  const open = useCallback((options: ModalOptions) => {
    setModalState({
      ...options,
      open: true,
    });
  }, []);

  const close = useCallback(() => {
    setModalState(defaultValues);
  }, []);

  const values = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </Context.Provider>
  );
}

export function useModalContext() {
  const values = useContext(Context);

  if (values == null) {
    throw new Error("ModalContext 내부에서 사용해야 합니다.");
  }

  return values;
}
