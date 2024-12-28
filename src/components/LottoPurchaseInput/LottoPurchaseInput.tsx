import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { lottoPurchaseInputContainerStyle } from './LottoPurchaseInput.style';

type Props = {
  buyLotto: (amount: number) => void;
  amount: number;
  errorMessage: string;
};

const LottoPurchaseInput = ({ buyLotto, errorMessage, amount: amountDefault }: Props) => {
  const [amount, setAmount] = useState<string>('');

  useEffect(() => {
    setAmount(amountDefault === 0 ? '' : String(amountDefault));
  }, [amountDefault]);

  const buy = () => {
    if (errorMessage !== '') {
      alert(errorMessage);
      return;
    }

    buyLotto(Number(amount));
  };

  return (
    <div>
      <Text type='body'>구입할 금액을 입력해주세요.</Text>
      <div css={lottoPurchaseInputContainerStyle}>
        <Input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='금액' fullWidth />
        <Button onClick={buy}>구입</Button>
      </div>
    </div>
  );
};

export default LottoPurchaseInput;
