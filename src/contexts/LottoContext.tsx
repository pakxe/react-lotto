import { createContext, useContext } from 'react';
import useLottoShop from '../hooks/useLottoShop';
import useLottoAnswer from '../hooks/useLottoAnswer';
import { WithChildren } from '../types/WithChildren';
import useLotto from '../hooks/useLotto';

const LottoContext = createContext<ReturnType<typeof useLotto> | null>(null);

const useLottoContext = () => {
  const context = useContext(LottoContext);

  if (context === null) {
    throw new Error('useLottoContext must be used within a LottoProvider');
  }

  return context;
};

const LottoProvider = ({ children }: WithChildren) => {
  const lottoValue = useLotto();

  return <LottoContext.Provider value={lottoValue}>{children}</LottoContext.Provider>;
};

export { useLottoContext, LottoProvider };
