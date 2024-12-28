import { useState } from 'react';
import generateLottos from '../utils/generateLottos';
import { LOTTO_PRICE } from '../constants/lotto';
import { Lotto } from '../serviceType';

const useLottoShop = () => {
  const [amount, setAmount] = useState(0);
  const [lottos, setLottos] = useState<Lotto[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = (message: string): boolean => {
    setErrorMessage(message);
    return false;
  };

  const checkAmount = (amount: number): boolean => {
    if (Number.isNaN(amount)) {
      return handleError('숫자만 입력해주세요.');
    }

    if (amount < LOTTO_PRICE) {
      return handleError('로또 한 장의 가격은 1000원입니다.');
    }

    if (amount % LOTTO_PRICE !== 0) {
      return handleError('1000원 단위로 입력해주세요.');
    }

    setAmount(amount);
    setErrorMessage('');
    return true;
  };

  const buyLotto = (amount: number) => {
    if (!checkAmount(amount)) {
      return;
    }

    const lottos = generateLottos(Math.trunc(amount / LOTTO_PRICE));

    setLottos(
      lottos.map((numbers, index) => ({
        id: index,
        numbers,
      })),
    );

    setAmount(amount - (amount % LOTTO_PRICE));
  };

  const clearLottoShop = () => {
    setLottos([]);
    setAmount(0);
  };

  return {
    buyLotto,
    lottos,
    amount,
    errorMessage,
    clearLottoShop,
  };
};

export default useLottoShop;
