import useLottoAnswer from './useLottoAnswer';
import useLottoShop from './useLottoShop';

const useLotto = () => {
  const { lottoAnswer, updateLottoAnswer, clearLottoAnswer } = useLottoAnswer();
  const { buyLotto, lottos, clearLottoShop, amount } = useLottoShop();

  const clear = () => {
    clearLottoShop();
    clearLottoAnswer();
  };

  return {
    lottoAnswer,
    updateLottoAnswer,
    buyLotto,
    lottos,
    clear,
    amount,
  };
};

export default useLotto;
