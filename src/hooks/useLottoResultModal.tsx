import { useEffect } from 'react';
import LottoResultModal from '../components/LottoResultModal/LottoResultModal';
import { useModalContext } from './useModal';

const useLottoResultModal = () => {
  const { enroll, ...rest } = useModalContext();

  useEffect(() => {
    enroll(LottoResultModal);
  }, []);

  return {
    ...rest,
  };
};

export default useLottoResultModal;
