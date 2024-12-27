import { Lotto } from '../../serviceType';
import Text from '../Text/Text';

type Props = {
  lotto: Lotto;
};

const LottoItem = ({ lotto }: Props) => {
  return <Text>🎟️ {lotto.numbers.join(', ')}</Text>;
};

export default LottoItem;
