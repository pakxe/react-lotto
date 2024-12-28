import { useTheme } from '@emotion/react';
import Text from '../Text/Text';
import { lottoShopContainerStyle } from './LottoShop.style';
import LottoList from '../LottoList/LottoList';
import LottoAnswerInputSection from '../LottoAnswerInput/LottoAnswerInput';
import LottoPurchaseInputSection from '../LottoPurchaseInput/LottoPurchaseInput';
import useLottoResultBottomSheet from '../../hooks/useLottoResultBottomSheet';
import { useLottoContext } from '../../contexts/LottoContext';
import { LottoAnswer } from '../../serviceType';

const LottoShop = () => {
  const { open } = useLottoResultBottomSheet();
  const theme = useTheme();
  const { updateLottoAnswer, lottos, buyLotto, lottoAnswer, amount } = useLottoContext();

  const checkResult = (lottoAnswer: LottoAnswer) => {
    open();
    updateLottoAnswer({ numbers: lottoAnswer.numbers, bonusNumber: lottoAnswer.bonusNumber });
  };

  return (
    <section css={lottoShopContainerStyle({ theme })}>
      <Text type='title' textAlign='center'>
        내 번호 당첨 확인
      </Text>

      <LottoPurchaseInputSection buyLotto={buyLotto} defaultAmount={amount} />

      {lottos.length !== 0 && (
        <>
          <LottoList />

          <LottoAnswerInputSection onSubmit={checkResult} lottoAnswerDefault={lottoAnswer} />
        </>
      )}
    </section>
  );
};

export default LottoShop;
