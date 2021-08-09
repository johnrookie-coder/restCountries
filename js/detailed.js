// import View from "../js/view.js";
import { populationConversion } from "../js/helper.js";

class DetailedCountry {
  _parentElement = document.querySelector(".container");
  _parentBorder = document.querySelector(".borders");
  _data;

  render(data) {
    this._data = data;
    this._parentElement.innerHTML = "";
    const markup = this._generateMarkup();
    // if (!render) return markup;
    // this._clear();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  // Todo: Fix borders -
  _generateMarkup() {
    return `
    <button class="button button__back shadow mt-5">
       <i class="fas fa-long-arrow-alt-left mr-2"></i> Back
    </button>
  <div class="row my-4 mx-0 " data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
    <div class="col-12 col-xl-6 h-50 d-flex justify-content-center align-items-center">
      <img src="${this._data.flag}" alt="${this._data.name}" />
    </div>
    <div class="col-12 col-xl-6">
      <div class="country-details pt-5 pl-5 details">
        <h1 class="country-details__title ml-lg-2 ml-xl-0 ">${
          this._data.name
        }</h1>
        <div class="row">
          <div class="col-12 col-md-6 country-details__contents ">
            <p><strong>Native Name:</strong> ${this._data.nativeName}</p>
            <p><strong>Population:</strong> ${populationConversion(
              this._data.population
            )}</p>
            <p><strong>Region:</strong> ${this._data.region}</p>
            <p><strong>Sub Region:</strong> ${
              this._data.subregion ? this._data.subregion : "No subregion"
            }</p>
            <p><strong>Capital:</strong> ${
              this._data.capital ? this._data.capital : "No capital city"
            }</p>
          </div>
          <div class="col-12 col-md-6  country-details__contents">
            <p><strong>Top Level Domain:</strong> ${
              this._data.topLevelDomain
            }</p>
            <p><strong>Currencies:</strong> ${this._data.currencies[0].name}</p>
            <p><strong>Language:</strong> ${this._data.languages.map(
              (lang) => lang.name
            )}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }

  // FIX: This is the border button set styles
  // _generateBorders(name) {
  //   // const names = name.map((country) => {
  //   //   return `<button class="button button__border shadow">${country}</button>`;
  //   //   // this._parentBorder.insertAdjacentHTML("beforeend", s);
  //   // });
  //   name.forEach((country) => {
  //     const s = `<button class="button button__border shadow">${country}</button>`;
  //     this._parentBorder.insertAdjacentHTML("beforeend", s);
  //   });
  //   // console.log(names);
  //   // return names;
  // }
}

export default new DetailedCountry();
