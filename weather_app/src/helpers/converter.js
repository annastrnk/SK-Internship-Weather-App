export default function farenheittoCelcius(temp) {
  const celsiusTemp = Math.round(temp - 273.15);
  const sign = celsiusTemp > 0 ? "+" : ""; 
  return `${sign}${celsiusTemp}`;
}