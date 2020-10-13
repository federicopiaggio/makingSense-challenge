export function formatNumberK(number) {
  let formatNumber = number;
  if (number > 9999) {
    number += "";
    formatNumber = number.substring(0, number.length - 3) + "K";
  }
  return formatNumber;
}
