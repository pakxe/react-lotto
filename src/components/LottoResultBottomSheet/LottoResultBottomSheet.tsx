import BottomSheet from '../BottomSheet/BottomSheet';
import Button from '../Button/Button';
import Text from '../Text/Text';
import LottoResultTable from '../LottoResultTable/LottoResultTable';
import { useLottoContext } from '../../contexts/LottoContext';
import calcMatchCountResult from '../../utils/calcMatchCountResult';
import calcRateOfReturn from '../../utils/calcRateOfReturn';
import calcTotalReward from '../../utils/calcTotalReward';

type Props = {
  isOpen: boolean;
  close: () => void;
};

const LottoResultBottomSheet = ({ isOpen, close }: Props) => {
  const { clear, lottoAnswer, lottos, amount } = useLottoContext();
  const matchCount = calcMatchCountResult({ ...lottoAnswer, lottos });
  const totalReward = calcTotalReward(matchCount);

  const restart = () => {
    clear();
    close();
  };

  return (
    <BottomSheet cssStyle={{ gap: '32px' }} close={close} isOpen={isOpen}>
      <Text type='subtitle' textAlign='center'>
        당첨 통계
      </Text>

      <LottoResultTable />

      <Text type='bodyBold' textAlign='center'>
        당신의 총 수익률은 {calcRateOfReturn(totalReward, amount)}%입니다.
      </Text>
      <Button onClick={restart} fullWidth>
        다시 시작하기
      </Button>
    </BottomSheet>
  );
};

export default LottoResultBottomSheet;
