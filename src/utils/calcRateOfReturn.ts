const calcRateOfReturn = (totalReward: number, amount: number) => {
  return ((totalReward / amount) * 100).toFixed(2);
};

export default calcRateOfReturn;
