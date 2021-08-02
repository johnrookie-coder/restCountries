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

// export const clickCardEvent = function () {
//   setTimeout(() => {
//     const cards = document.querySelectorAll(".card");
//     cards.forEach((card, idx) => {
//       card.addEventListener("click", function () {
//         // console.log(data[idx]);
//         model.getBorders(data[idx].borders);
//         document.body.classList.add("light");
//         detailed.render(data[idx]);
//         // setTimeout(() => {
//         //   console.log(model.state.data);
//         //   detailed._generateBorders(model.state.data);
//         // }, 2000);

//         // 4. Add click event in the button (at this point back button is loaded)
//         const buttonBack = document.querySelector(".button__back");
//         buttonBack.addEventListener("click", function () {
//           location.reload();
//         });
//       });
//     });
//   }, 3000);
// };
