import { useState } from 'react';
import generateLottos from '../utils/generateLottos';
import { LOTTO_PRICE } from '../constants/lotto';
import { Lotto } from '../serviceType';

const useLottoShop = () => {
  const [amount, setAmount] = useState(0);
  const [lottos, setLottos] = useState<Lotto[]>([]);

  const buyLotto = (amount: number) => {
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
    clearLottoShop,
  };
};

export default useLottoShop;
