import { ChangeEvent, useState } from 'react';
import { LOTTO_PRICE } from '../constants/lotto';

const useLottoAmount = () => {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const checkErrorMessage = (amount: number) => {
    if (Number.isNaN(amount)) {
      return '숫자만 입력해주세요.';
    }

    return '';
  };

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    const errorMessage = checkErrorMessage(Number(newValue));

    if (errorMessage !== '') {
      setErrorMessage(errorMessage);
      return;
    }

    setAmount(newValue);
    setErrorMessage('');
  };

  const clear = () => {
    setAmount('');
    setErrorMessage('');
  };

  const isValidAmount = (amount: number) => {
    if (amount < LOTTO_PRICE || amount % LOTTO_PRICE !== 0) {
      setErrorMessage('로또 한 장의 가격은 1000원입니다.');
      return false;
    }

    return true;
  };

  return {
    handleAmount,
    errorMessage,
    amount,
    clear,
    isValidAmount,
  };
};

export default useLottoAmount;
