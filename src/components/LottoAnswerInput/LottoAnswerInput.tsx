import { useEffect } from 'react';
import { LOTTO_NUMBER_COUNT } from '../../constants/lotto';
import { LottoAnswer } from '../../serviceType';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { bonusNumberInputStyle, lottoAnswerInputContainerStyle, lottoAnswerInputStyle } from './LottoAnswerInput.style';

const LOTTO_INPUT_LIST = new Array(LOTTO_NUMBER_COUNT).fill(undefined);

type Props = {
  lottoAnswer: { numbers: string[]; bonusNumber: string };
  setLottoAnswer: (lottoAnswer: { numbers: string[]; bonusNumber: string }) => void;
  lottoAnswerDefault?: LottoAnswer;
};

const LottoAnswerInput = ({ lottoAnswer, setLottoAnswer, lottoAnswerDefault }: Props) => {
  const { numbers, bonusNumber } = lottoAnswer;

  const handleNumberChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumbers = [...numbers];
    newNumbers[index] = e.target.value;

    setLottoAnswer({ numbers: newNumbers, bonusNumber });
  };

  const handleBonusNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLottoAnswer({ numbers, bonusNumber: e.target.value });
  };

  useEffect(() => {
    if (!lottoAnswerDefault) return;

    if (lottoAnswerDefault.numbers.length === 0) {
      setLottoAnswer({ numbers: new Array(6).fill(''), bonusNumber: '' });
    }
  }, [lottoAnswerDefault?.numbers]);

  return (
    <>
      <Text>지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요.</Text>
      <div css={lottoAnswerInputContainerStyle}>
        <div>
          <Text>당첨 번호</Text>
          <ol css={lottoAnswerInputStyle}>
            {LOTTO_INPUT_LIST.map((_, i) => (
              <Input
                key={i}
                value={numbers[i]}
                onChange={(e) => handleNumberChange(i)(e)}
                type='number'
                inputMode='numeric'
              />
            ))}
          </ol>
        </div>

        <div css={bonusNumberInputStyle}>
          <Text>보너스 번호</Text>
          <Input value={bonusNumber} onChange={handleBonusNumberChange} type='number' inputMode='numeric' />
        </div>
      </div>
    </>
  );
};

export default LottoAnswerInput;
