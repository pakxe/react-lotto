import { LOTTO_NUMBER_COUNT } from '../../constants/lotto';
import { LottoNumber } from '../../serviceType';
import Input from '../Input/Input';
import Text from '../Text/Text';
import { bonusNumberInputStyle, lottoAnswerInputContainerStyle, lottoAnswerInputStyle } from './LottoAnswerInput.style';

const LOTTO_INPUT_LIST = new Array(LOTTO_NUMBER_COUNT).fill(undefined);

type Props = {
  lottoNumbers: {
    numbers: LottoNumber[];
    bonusNumber: LottoNumber;
  };
  setLottoNumbers: (lottoNumbers: { numbers: LottoNumber[]; bonusNumber: LottoNumber }) => void;
};
const LottoAnswerInput = ({ lottoNumbers, setLottoNumbers }: Props) => {
  const { numbers, bonusNumber } = lottoNumbers;

  const handleNumberChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumbers = [...numbers];
    newNumbers[index] = +e.target.value;

    setLottoNumbers({ numbers: newNumbers, bonusNumber });
  };

  const handleBonusNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLottoNumbers({ numbers, bonusNumber: +e.target.value });
  };

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
