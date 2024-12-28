import { useEffect } from 'react';
import { useBottomSheetContext } from './useBottomSheet';
import LottoResultBottomSheet from '../components/LottoResultBottomSheet/LottoResultBottomSheet';

const useLottoResultBottomSheet = () => {
  const { enroll, ...rest } = useBottomSheetContext();

  useEffect(() => {
    enroll(LottoResultBottomSheet);
  }, []);

  return {
    ...rest,
  };
};

export default useLottoResultBottomSheet;
