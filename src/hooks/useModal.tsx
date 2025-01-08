import { createContext, useContext, useState } from 'react';
import { WithChildren } from '../types/WithChildren';

const ModalContext = createContext<Pick<ReturnType<typeof useModal>, 'close' | 'open' | 'enroll'> | null>(null);

const useModal = () => {
  const [modal, setModal] = useState<React.ComponentType<{ isOpen: boolean; close: () => void }> | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const enroll = (ModalComponent: React.ComponentType<{ isOpen: boolean; close: () => void }>) => {
    setModal(() => ModalComponent);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    Modal: modal,
    open,
    close,
    isOpen,
    enroll,
  };
};

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Cannot find Modal Context');
  }

  return context;
};

const ModalProvider = ({ children }: WithChildren) => {
  const { Modal, isOpen, close, open, enroll } = useModal();

  return (
    <ModalContext.Provider value={{ close, open, enroll }}>
      {children}
      {Modal && <Modal isOpen={isOpen} close={close} />}
    </ModalContext.Provider>
  );
};

export { ModalProvider, useModal, useModalContext };
