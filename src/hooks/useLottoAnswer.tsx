import { useState } from 'react';
import { LottoAnswer, LottoNumber } from '../serviceType';
import { LOTTO_NUMBER_COUNT, LOTTO_RANGE } from '../constants/lotto';
import isInRange from '../utils/isInRange';

// 상태 vs 함수 =>
const useLottoAnswer = () => {
  const [lottoAnswer, setLottoAnswer] = useState<{ numbers: LottoNumber[]; bonusNumber: LottoNumber }>({
    numbers: [],
    bonusNumber: 0,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = (message: string): boolean => {
    setErrorMessage(message);
    return false;
  };

  const checkLottoAnswer = ({ numbers, bonusNumber }: LottoAnswer) => {
    if (
      !numbers.every((num) => isInRange(num, LOTTO_RANGE.min, LOTTO_RANGE.max)) ||
      !isInRange(bonusNumber, LOTTO_RANGE.min, LOTTO_RANGE.max)
    ) {
      return handleError(`로또 번호는 ${LOTTO_RANGE.min}부터 ${LOTTO_RANGE.max}까지의 숫자입니다.`);
    }

    if (new Set(numbers).size !== numbers.length) {
      return handleError('로또 번호는 중복되지 않아야 합니다.');
    }

    if (numbers.length !== 6) {
      return handleError(`로또 번호는 ${LOTTO_NUMBER_COUNT}개여야 합니다.`);
    }

    if (numbers.includes(bonusNumber)) {
      return handleError('보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
    }

    return true;
  };

  const clearLottoAnswer = () => {
    setLottoAnswer({ numbers: [], bonusNumber: 0 });
  };

  const updateLottoAnswer = ({ numbers, bonusNumber }: LottoAnswer) => {
    if (!checkLottoAnswer({ numbers, bonusNumber })) {
      return;
    }

    setLottoAnswer({ numbers, bonusNumber });
  };

  return {
    errorMessage,
    clearLottoAnswer,
    updateLottoAnswer,
    lottoAnswer,
  };
};

export default useLottoAnswer;
