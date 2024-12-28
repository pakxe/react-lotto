import { createContext, useContext, useState } from 'react';
import { WithChildren } from '../types/WithChildren';

const BottomSheetContext = createContext<Pick<ReturnType<typeof useBottomSheet>, 'close' | 'open' | 'enroll'> | null>(
  null,
);

const useBottomSheet = () => {
  const [BottomSheet, setBottomSheet] = useState<React.ComponentType<{ isOpen: boolean; close: () => void }> | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);

  const enroll = (BottomSheetComponent: React.ComponentType<{ isOpen: boolean; close: () => void }>) => {
    setBottomSheet(() => BottomSheetComponent);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    BottomSheet,
    open,
    close,
    isOpen,
    enroll,
  };
};

const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);

  if (!context) {
    throw new Error('Cannot find BottomSheetContext');
  }

  return context;
};

const BottomSheetProvider = ({ children }: WithChildren) => {
  const { BottomSheet, isOpen, close, open, enroll } = useBottomSheet();

  return (
    <BottomSheetContext.Provider value={{ close, open, enroll }}>
      {children}
      {BottomSheet && <BottomSheet isOpen={isOpen} close={close} />}
    </BottomSheetContext.Provider>
  );
};

export { BottomSheetProvider, useBottomSheet, useBottomSheetContext };
