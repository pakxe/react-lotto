import { useEffect } from 'react';
import { LOTTO_NUMBER_COUNT } from '../../constants/lotto';
import { LottoAnswer } from '../../serviceType';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { bonusNumberInputStyle, lottoAnswerInputContainerStyle, lottoAnswerInputStyle } from './LottoAnswerInput.style';
import Button from '../Button/Button';
import useLottoAnswerInput from '../../hooks/useLottoAnswerInput';

const LOTTO_INPUT_LIST = new Array(LOTTO_NUMBER_COUNT).fill(undefined);

type Props = {
  lottoAnswerDefault?: LottoAnswer;
  onSubmit: (lottoAnswer: LottoAnswer) => void;
};

const LottoAnswerInputSection = ({ lottoAnswerDefault, onSubmit }: Props) => {
  const { lottoAnswer, handleNumbers, handleBonusNumber, errorMessage, isValidLottoAnswer, clear } =
    useLottoAnswerInput();

  const submit = () => {
    if (!isValidLottoAnswer(lottoAnswer)) {
      return;
    }

    onSubmit({ numbers: lottoAnswer.numbers.map(Number), bonusNumber: Number(lottoAnswer.bonusNumber) });
  };

  useEffect(() => {
    if (lottoAnswerDefault && lottoAnswerDefault.numbers.length === 0) clear();
  }, [lottoAnswerDefault]);

  return (
    <>
      <Text>지난 주 당첨번호 {LOTTO_NUMBER_COUNT}개와 보너스 번호 1개를 입력해주세요.</Text>
      <div css={lottoAnswerInputContainerStyle}>
        <div>
          <Text>당첨 번호</Text>
          <ol css={lottoAnswerInputStyle}>
            {LOTTO_INPUT_LIST.map((_, i) => (
              <Input
                key={i}
                value={lottoAnswer.numbers[i]}
                onChange={(e) => handleNumbers(e, i)}
                type='number'
                inputMode='numeric'
              />
            ))}
          </ol>
        </div>

        <div css={bonusNumberInputStyle}>
          <Text>보너스 번호</Text>
          <Input value={lottoAnswer.bonusNumber} onChange={handleBonusNumber} type='number' inputMode='numeric' />
        </div>
      </div>

      <div>{errorMessage}</div>
      <Button onClick={submit} fullWidth>
        결과 확인하기
      </Button>
    </>
  );
};

export default LottoAnswerInputSection;
