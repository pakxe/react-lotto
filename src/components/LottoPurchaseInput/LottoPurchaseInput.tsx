import { useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { lottoPurchaseInputContainerStyle } from './LottoPurchaseInput.style';
import useLottoAmount from '../../hooks/useLottoAmount';

type Props = {
  buyLotto: (amount: number) => void;
  defaultAmount: number;
};

const LottoPurchaseInputSection = ({ buyLotto, defaultAmount }: Props) => {
  const { amount, handleAmount, errorMessage, clear, isValidAmount } = useLottoAmount();

  useEffect(() => {
    if (defaultAmount === 0) clear();
  }, [defaultAmount]);

  const buy = () => {
    if (!isValidAmount(Number(amount))) return;

    buyLotto(Number(amount));
  };

  return (
    <div>
      <Text type='body'>구입할 금액을 입력해주세요.</Text>
      <div css={lottoPurchaseInputContainerStyle}>
        <Input value={amount} onChange={handleAmount} placeholder='금액' fullWidth />
        <Button onClick={buy}>구입</Button>
      </div>
      <div>{errorMessage}</div>
    </div>
  );
};

export default LottoPurchaseInputSection;
