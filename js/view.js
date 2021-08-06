// Imports
//
import { populationConversion } from "../js/helper.js";

export default class View {
  // Private fields
  _parentElement;
  _data;

  /**
   * Display the received data to the DOM.
   * @param {Array | Object} data render the received data from the controller
   */
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  renderPagination(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  // generate the HTML Markup
  _generateMarkup() {
    return `
    <div class="card " data-aos="fade-up"
    data-aos-duration="2000">
          <img src="${this._data.flag}" class="card-img-top" alt="${
      this._data.name
    }">
          <div class="card-body shadow">
            <h2 class="card-title"> ${this._data.name}</h2>
            <p class="card-text"><strong>Population:</strong> ${populationConversion(
              this._data.population
            )}</p>
            <p class="card-text"><strong>Region:</strong> ${
              this._data.region
            }</p>
            <p class="card-text"><strong>Capital:</strong> ${
              this._data.capital ? this._data.capital : "No capital city"
            }</p>
          </div>
    </div>
    `;
  }

  // Clear the HTML Contents
  _clear() {
    this._parentElement.innerHTML = "";
  }

  // render error when something went wrong
  renderError() {
    const markupError = `
    <div class="error d-flex justify-content-center align-items-center flex-column my-5 text-center">
      <img src="img/Astronaut.png" alt="error" />
        <h3 class="display-4">Something went wrong!</h3>
        <p class="w-50 lead">
        Unable to retrieved the country. Please try again!
        </p>
    </div>
    `;
    this._parentElement.insertAdjacentHTML("beforeend", markupError);
  }

  // render spinner before rendering the list of cards
  renderSpinner() {
    const markupSpinner = `
    <div class="loading d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center flex-column">
          <div class="spinner-border mr-3" role="status" aria-hidden="true"></div>
          <strong class="mt-4"> Please wait while the countries are loading...</strong>
        </div>
      </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markupSpinner);
  }
}
