import { LOTTO_NUMBER_COUNT, LOTTO_RANGE } from '../constants/lotto';

const generateLottos = (count: number) => {
  const lottos = [];

  for (let i = 0; i < count; i++) {
    const lotto: number[] = [];

    while (lotto.length < LOTTO_NUMBER_COUNT) {
      const number = Math.floor(Math.random() * LOTTO_RANGE.MAX) + 1;
      if (!lotto.includes(number)) {
        lotto.push(number);
      }
    }

    lottos.push(lotto.sort((a, b) => a - b));
  }
  return lottos;
};

export default generateLottos;
