/**
 * Converts the received URL in a JSON Object
 * @param {String} url comes from the model.js (all|| region || name/query)
 * @returns a response from the given URL
 */
export const getJSON = async function (url) {
  try {
    const res = await fetch(`${url}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} Error ${data.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};

/**
 * Converts the countries population depending how the number is formatted from different countries.
 * @param {Number} num is the population of the countries that are NOT formatted.
 * @returns a "population" that are formatted (numbers are separated by commas/s)
 */
export const populationConversion = function (num) {
  const locale = navigator.language;
  return new Intl.NumberFormat(locale).format(num);
};
