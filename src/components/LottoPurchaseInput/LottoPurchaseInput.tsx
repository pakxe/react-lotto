import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { lottoPurchaseInputContainerStyle } from './LottoPurchaseInput.style';
import { useLottoContext } from '../../hooks/useLotto';

const LottoPurchaseInput = () => {
  const [amount, setAmount] = useState('');

  const { buyLotto } = useLottoContext();

  return (
    <>
      <Text type="body">구입할 금액을 입력해주세요.</Text>
      <div css={lottoPurchaseInputContainerStyle}>
        <Input onChange={(e) => setAmount(e.target.value)} placeholder="금액" fullWidth />
        <Button onClick={() => buyLotto(Number(amount))}>구입</Button>
      </div>
    </>
  );
};

export default LottoPurchaseInput;
