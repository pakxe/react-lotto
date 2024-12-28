import { useTheme } from '@emotion/react';
import Text from '../Text/Text';
import { lottoShopContainerStyle } from './LottoShop.style';
import Button from '../Button/Button';
import LottoList from '../LottoList/LottoList';
import LottoAnswerInput from '../LottoAnswerInput/LottoAnswerInput';
import LottoPurchaseInput from '../LottoPurchaseInput/LottoPurchaseInput';
import { useState } from 'react';
import useLottoResultBottomSheet from '../../hooks/useLottoResultBottomSheet';
import { useLottoContext } from '../../contexts/LottoContext';

const LottoShop = () => {
  const { open } = useLottoResultBottomSheet();
  const theme = useTheme();
  const { updateLottoAnswer, lottos, buyLotto, amount, lottoAnswer, lottoAnswerErrorMessage, amountErrorMessage } =
    useLottoContext();

  const [lottoAnswerInput, setLottoAnswerInput] = useState<{ numbers: string[]; bonusNumber: string }>({
    numbers: new Array(6).fill(''),
    bonusNumber: '',
  });

  const checkResult = () => {
    if (lottoAnswerErrorMessage !== '') {
      alert(lottoAnswerErrorMessage);
      return;
    }

    open();
    updateLottoAnswer({ numbers: lottoAnswer.numbers, bonusNumber: lottoAnswer.bonusNumber });
  };

  return (
    <section css={lottoShopContainerStyle({ theme })}>
      <Text type='title' textAlign='center'>
        내 번호 당첨 확인
      </Text>

      <LottoPurchaseInput buyLotto={buyLotto} amount={amount} errorMessage={amountErrorMessage} />

      {lottos.length !== 0 && (
        <>
          <LottoList />

          <LottoAnswerInput
            setLottoAnswer={setLottoAnswerInput}
            lottoAnswer={lottoAnswerInput}
            lottoAnswerDefault={lottoAnswer}
          />
          <Button onClick={checkResult} fullWidth>
            결과 확인하기
          </Button>
        </>
      )}
    </section>
  );
};

export default LottoShop;
