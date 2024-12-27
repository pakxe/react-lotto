import { Lotto } from '../../serviceType';
import LottoItem from '../LottoItem/LottoItem';
import Spacing from '../Spacing/Spacing';
import Text from '../Text/Text';
import { lottoListStyle } from './LottoList.style';

type Props = {
  lottoList: Lotto[];
};

const LottoList = ({ lottoList }: Props) => {
  return (
    <>
      <Text>총 {lottoList.length}개를 구매하였습니다.</Text>
      <Spacing height={8} />
      <ol css={lottoListStyle}>
        {lottoList.map((lotto) => (
          <LottoItem lotto={lotto} />
        ))}
      </ol>
    </>
  );
};

export default LottoList;
