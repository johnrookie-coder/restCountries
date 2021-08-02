// Imports
//
import * as model from "../js/model.js";
import viewCountries from "../js/viewCountries.js";
import searchResults from "../js/searchResults.js";
import darkModeView from "../js/darkModeView.js";
import cardView from "../js/cardView.js";

// Todo: Load All Countries -

const controlCountries = async function () {
  try {
    // 1. load all countries
    await model.loadAllCountries();

    viewCountries._clear();

    const data = model.state.countries;

    // 2. rendering ALL countries
    data.forEach((country) => {
      viewCountries.render(country);
    });

    // 3. Add click event forEach cards
    cardView._cardClickEvent(data);
  } catch (err) {
    viewCountries.renderError();
  }
};

// Todo: loadTheSearchedValue -

const controlSearch = async function () {
  try {
    const query = searchResults.getQuery();

    // 1. load matching country
    await model.searchResults(query);

    const data = model.state.searchResults;

    // 2. rendering ALL MATCHED countries
    data.forEach((country) => {
      searchResults.render(country);
    });

    // 3. Add click event forEach search country
    cardView._cardClickEvent(data);
  } catch (err) {
    viewCountries.renderError();
  }
};

// Todo: Filter by region -

const controlFilterRegion = async function () {
  try {
    // 1. Get the hash change
    const region = window.location.hash.slice(1);

    await model.filterRegionResults(region);

    if (!region) return;

    // 2. Clear the existing render results
    viewCountries._clear();

    // 3. Loop through the countries with matching regions
    model.state.region.forEach((country) => {
      viewCountries.render(country);
    });

    // 4. Add click event forEach render regions
    cardView._cardClickEvent(model.state.region);
  } catch (err) {
    console.log(err);
  }
};

/**
 * Calling the initial state of the application
 */
const init = function () {
  viewCountries.renderSpinner();
  viewCountries.addLoadEvent(controlCountries);
  searchResults.addSearchEventHandler(controlSearch);
  darkModeView._addHandlerToggle();
  viewCountries.addHandlerRender(controlFilterRegion);
};

// Calls the website initial state
init();
