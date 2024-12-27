const generateLottos = (count: number) => {
  const lottos = [];

  for (let i = 0; i < count; i++) {
    const lotto: number[] = [];

    while (lotto.length < 6) {
      const number = Math.floor(Math.random() * 45) + 1;
      if (!lotto.includes(number)) {
        lotto.push(number);
      }
    }

    lottos.push(lotto.sort((a, b) => a - b));
  }
  return lottos;
};

export default generateLottos;
