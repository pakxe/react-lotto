import { useLottoContext } from '../../contexts/LottoContext';
import LottoItem from '../LottoItem/LottoItem';
import Spacing from '../Spacing/Spacing';
import Text from '../Text/Text';
import { lottoListStyle } from './LottoList.style';

const LottoList = () => {
  const { lottos } = useLottoContext();

  return (
    <div>
      <Text>총 {lottos.length}개를 구매하였습니다.</Text>
      <Spacing height={8} />
      <ol css={lottoListStyle}>
        {lottos.map((lotto) => (
          <LottoItem lotto={lotto} />
        ))}
      </ol>
    </div>
  );
};

export default LottoList;
