export type LottoNumber = number;

export type Lotto = {
  id: number;
  numbers: LottoNumber[];
};

export type LottoAnswer = {
  numbers: LottoNumber[];
  bonusNumber: LottoNumber;
};
