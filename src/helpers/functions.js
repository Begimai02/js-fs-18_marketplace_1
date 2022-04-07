export const calcTotalPrice = (arr) => {
  let total = 0;
  arr.forEach((item) => {
    total += item.subPrice;
  });
  return total;
};

export const calSubPrice = (elem) => {
  return elem.count * elem.item.price;
};
