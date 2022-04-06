export const calcTotalPrice = (arr) => {
  let total = 0;
  arr.forEach((item) => {
    total += item.subPrice;
  });
  return total;
};
