import { useTheme } from '@emotion/react';
import { lottoResultTableStyle } from './LottoResultTable.style';
import { LOTTO_REWARDS } from '../../constants/lotto';

const REWARD_TABLE = LOTTO_REWARDS.map((reward, index) => {
  let name;

  if (index === LOTTO_REWARDS.length - 2) {
    name = '5개 + 보너스볼';
  } else if (index === LOTTO_REWARDS.length - 1) {
    name = '6개';
  } else {
    name = `${index + 3}개`;
  }

  return {
    name,
    reward,
  };
});

const LottoResultTable = () => {
  const theme = useTheme();

  return (
    <table css={lottoResultTableStyle({ theme })}>
      <thead>
        <tr>
          <th scope="col">일치 개수</th>
          <th scope="col">당첨금</th>
          <th scope="col">당첨 개수</th>
        </tr>
      </thead>
      <tbody>
        {REWARD_TABLE.map(({ name, reward }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{reward.toLocaleString('ko-kr')}</td>
            <td>30개</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LottoResultTable;
