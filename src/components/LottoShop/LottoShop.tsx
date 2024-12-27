import { useTheme } from '@emotion/react';
import Text from '../Text/Text';
import { lottoShopContainerStyle } from './LottoShop.style';
import Spacing from '../Spacing/Spacing';
import Button from '../Button/Button';
import LottoList from '../LottoList/LottoList';
import LottoAnswerInput from '../LottoAnswerInput/LottoAnswerInput';
import LottoPurchaseInput from '../LottoPurchaseInput/LottoPurchaseInput';
import { useState } from 'react';
import LottoResultBottomSheet from '../LottoResultBottomSheet/LottoResultBottomSheet';
import { LottoNumber } from '../../serviceType';
import { useLottoContext } from '../../hooks/useLotto';

const dummyLottoList = [
  {
    id: 1,
    numbers: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    numbers: [10, 20, 30, 40, 50, 60],
  },
  {
    id: 3,
    numbers: [11, 22, 33, 44, 55, 66],
  },
];

const LottoShop = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
  // TODO: wow..
  const [lottoNumbers, setLottoNumbers] = useState<{ numbers: LottoNumber[]; bonusNumber: LottoNumber }>({
    numbers: [],
    bonusNumber: 0,
  });

  const theme = useTheme();

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  return (
    <>
      <section css={lottoShopContainerStyle({ theme })}>
        <Text type='title' textAlign='center'>
          내 번호 당첨 확인
        </Text>
        <Spacing height={20} />

        <LottoPurchaseInput />

        <LottoList lottoList={dummyLottoList} />

        <LottoAnswerInput setLottoNumbers={setLottoNumbers} lottoNumbers={lottoNumbers} />
        <Button onClick={openBottomSheet} fullWidth>
          결과 확인하기
        </Button>
      </section>

      {isBottomSheetOpen && <LottoResultBottomSheet closeBottomSheet={closeBottomSheet} />}
    </>
  );
};

export default LottoShop;
