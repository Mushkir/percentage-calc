const currencyFormat = (amount) => {
  const currencyInLKR = new Intl.NumberFormat("en-SL", {
    style: "currency",
    currency: "LKR",
  }).format(amount);
  return currencyInLKR;
};

export default currencyFormat;
