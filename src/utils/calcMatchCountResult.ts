import { Lotto, LottoAnswer } from '../serviceType';

type Args = LottoAnswer & {
  lottos: Lotto[];
};

const calcMatchCountResult = ({ lottos, numbers, bonusNumber }: Args) => {
  const result: number[] = new Array(5).fill(0); // 0 = 3 |  1 = 4 | 2 = 5 | 3 = 5+ | 4 = 6

  lottos.forEach(({ numbers: lottoNumbers }) => {
    const matchCount = lottoNumbers.filter((number) => numbers.includes(number)).length;
    const isBonusNumberMatch = lottoNumbers.includes(bonusNumber);

    if (matchCount === 5 && isBonusNumberMatch) {
      result[result.length - 2] += 1;
    } else if (matchCount === 6) {
      result[result.length - 1] += 1;
    } else {
      result[matchCount - 3] += 1;
    }
  });

  return result;
};

export default calcMatchCountResult;
