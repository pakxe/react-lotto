import { useState } from 'react';
import { LottoAnswer, LottoNumber } from '../serviceType';

const useLottoAnswer = () => {
  const [lottoAnswer, setLottoAnswer] = useState<{ numbers: LottoNumber[]; bonusNumber: LottoNumber }>({
    numbers: [],
    bonusNumber: 0,
  });

  const clearLottoAnswer = () => {
    setLottoAnswer({ numbers: [], bonusNumber: 0 });
  };

  const updateLottoAnswer = ({ numbers, bonusNumber }: LottoAnswer) => {
    setLottoAnswer({ numbers, bonusNumber });
  };

  return {
    clearLottoAnswer,
    updateLottoAnswer,
    lottoAnswer,
  };
};

export default useLottoAnswer;
