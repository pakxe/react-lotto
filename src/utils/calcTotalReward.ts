import { LOTTO_REWARDS } from '../constants/lotto';

const calcTotalReward = (matchCount: number[]) => {
  return matchCount.reduce((acc, count, index) => {
    return count * LOTTO_REWARDS[index] + acc;
  }, 0);
};

export default calcTotalReward;
