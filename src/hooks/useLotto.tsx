import useLottoAnswer from './useLottoAnswer';
import useLottoShop from './useLottoShop';

const useLotto = () => {
  const { lottoAnswer, updateLottoAnswer, clearLottoAnswer, errorMessage: lottoAnswerErrorMessage } = useLottoAnswer();
  const { buyLotto, lottos, amount, clearLottoShop, errorMessage: amountErrorMessage } = useLottoShop();

  const clear = () => {
    clearLottoShop();
    clearLottoAnswer();
  };

  return {
    lottoAnswer,
    updateLottoAnswer,
    buyLotto,
    lottos,
    amount,
    clear,
    amountErrorMessage,
    lottoAnswerErrorMessage,
  };
};

export default useLotto;
