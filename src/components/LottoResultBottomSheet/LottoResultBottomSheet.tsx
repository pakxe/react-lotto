import { useTheme } from '@emotion/react';
import BottomSheet from '../BottomSheet/BottomSheet';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { lottoResultBottomSheetStyle } from './LottoResultBottomSheet.style';
import LottoResultTable from '../LottoResultTable/LottoResultTable';
import { useLottoContext } from '../../hooks/useLotto';

type Props = {
  closeBottomSheet: () => void; // TODO: 드릴링
};

const LottoResultBottomSheet = ({ closeBottomSheet }: Props) => {
  const { getMatchCountResult, getTotalReward } = useLottoContext();

  return (
    <BottomSheet cssStyle={{ gap: '32px' }} closeBottomSheet={closeBottomSheet}>
      <Text type='subtitle' textAlign='center'>
        당첨 통계
      </Text>

      <LottoResultTable />

      <Text type='bodyBold' textAlign='center'>
        당신의 총 수익률은 %입니다.
      </Text>
      <Button fullWidth>다시 시작하기</Button>
    </BottomSheet>
  );
};

export default LottoResultBottomSheet;
