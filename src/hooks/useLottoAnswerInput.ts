import { ChangeEvent, useState } from 'react';
import isInRange from '../utils/isInRange';
import { LOTTO_NUMBER_COUNT, LOTTO_RANGE } from '../constants/lotto';

const isValidRange = (numbers: string[], bonusNumber: string) => {
  return (
    !numbers.every((number) => isInRange(Number(number), LOTTO_RANGE.MIN, LOTTO_RANGE.MAX)) ||
    !isInRange(Number(bonusNumber), LOTTO_RANGE.MIN, LOTTO_RANGE.MAX)
  );
};

const useLottoAnswerInput = () => {
  const [lottoAnswer, setLottoAnswer] = useState<{ numbers: string[]; bonusNumber: string }>({
    numbers: new Array(LOTTO_NUMBER_COUNT).fill(''),
    bonusNumber: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const checkErrorMessage = (value: string) => {
    if (Number.isNaN(Number(value))) {
      return '숫자만 입력해주세요.';
    }

    return '';
  };

  const handleNumbers = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    const errorMessage = checkErrorMessage(newValue);

    if (errorMessage !== '') {
      setErrorMessage(errorMessage);
      return;
    }

    setErrorMessage('');
    setLottoAnswer((prev) => ({
      ...prev,
      numbers: prev.numbers.map((num, i) => (i === index ? newValue : num)),
    }));
  };

  const handleBonusNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const errorMessage = checkErrorMessage(newValue);

    if (errorMessage !== '') {
      setErrorMessage(errorMessage);
      return;
    }

    setLottoAnswer((prev) => ({
      ...prev,
      bonusNumber: newValue,
    }));
  };

  const isValidLottoAnswer = (lottoAnswer: { numbers: string[]; bonusNumber: string }) => {
    const { numbers, bonusNumber } = lottoAnswer;

    if (isValidRange(numbers, bonusNumber)) {
      setErrorMessage(`로또 번호는 ${LOTTO_RANGE.MIN}~${LOTTO_RANGE.MAX} 사이의 숫자입니다.`);
      return false;
    }

    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      setErrorMessage(`로또 번호는 ${LOTTO_NUMBER_COUNT}개를 입력해주세요.`);
      return false;
    }

    if (new Set(numbers).size !== numbers.length || numbers.includes(bonusNumber)) {
      setErrorMessage('로또 번호는 중복되지 않아야 합니다.');
      return false;
    }

    return true;
  };

  const clear = () => {
    setLottoAnswer({ numbers: new Array(LOTTO_NUMBER_COUNT).fill(''), bonusNumber: '' });
    setErrorMessage('');
  };

  return {
    handleNumbers,
    handleBonusNumber,
    isValidLottoAnswer,
    errorMessage,
    lottoAnswer,
    clear,
  };
};

export default useLottoAnswerInput;
