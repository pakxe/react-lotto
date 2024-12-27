import { createContext, useContext, useState } from 'react';
import { Lotto, LottoNumber } from '../serviceType';
import generateLottos from '../utils/generateLottos';
import { LOTTO_PRICE, LOTTO_REWARDS } from '../constants/lotto';
import { WithChildren } from '../types/WithChildren';

const LottoContext = createContext<ReturnType<typeof useLotto> | null>(null);

const useLotto = () => {
  const [lottos, setLottos] = useState<Lotto[]>([]);
  const [lottoAnswer, setLottoAnswer] = useState<{ numbers: LottoNumber[]; bonusNumber: LottoNumber } | null>(null);

  const buyLotto = (amount: number) => {
    const lottos = generateLottos(Math.trunc(amount / LOTTO_PRICE));

    setLottos(
      lottos.map((numbers, index) => ({
        id: index,
        numbers,
      })),
    );
  };

  const restart = () => {
    setLottos([]);
    setLottoAnswer(null);
  };

  const getMatchCountResult = ({ numbers, bonusNumber }: { numbers: LottoNumber[]; bonusNumber: LottoNumber }) => {
    const result = new Array(5).fill(0); // 0 = 3 |  1 = 4 | 2 = 5 | 3 = 5+ | 4 = 6

    lottos.forEach(({ numbers: lottoNumbers }) => {
      const matchCount = lottoNumbers.filter((number) => numbers.includes(number)).length;
      const isBonusNumberMatch = lottoNumbers.includes(bonusNumber);

      if (matchCount === 5 && isBonusNumberMatch) {
        result[result.length - 2] += 1;
      } else if (matchCount === 6) {
        result[result.length - 1] += 1;
      } else {
        result[matchCount - 3] += 1;
      }
    });

    return result;
  };

  // TODO: 함수로 만들기 vs state로 만들기에 대한 고민
  const getTotalReward = ({ numbers, bonusNumber }: { numbers: LottoNumber[]; bonusNumber: LottoNumber }) => {
    const matchCountResult = getMatchCountResult({ numbers, bonusNumber });

    return matchCountResult.reduce((acc, count, index) => {
      return acc + count * LOTTO_REWARDS[index + 3];
    }, 0);
  };

  const updateLottoAnswer = ({ numbers, bonusNumber }: { numbers: LottoNumber[]; bonusNumber: LottoNumber }) => {
    setLottoAnswer({ numbers, bonusNumber });
  };

  return {
    buyLotto,
    restart,
    lottos,
    getMatchCountResult,
    getTotalReward,
    updateLottoAnswer,
  };
};

const LottoProvider = ({ children }: WithChildren) => {
  const lotto = useLotto();

  return <LottoContext.Provider value={lotto}>{children}</LottoContext.Provider>;
};

const useLottoContext = () => {
  const context = useContext(LottoContext);

  if (context === null) {
    throw new Error('useLottoContext must be used within a LottoProvider');
  }

  return context;
};

export { useLotto, LottoContext, LottoProvider, useLottoContext };
