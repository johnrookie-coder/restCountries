// Imports
//
import * as model from "../js/model.js";
import viewCountries from "../js/viewCountries.js";
import searchResults from "../js/searchResults.js";
import darkModeView from "../js/darkModeView.js";
import cardView from "../js/cardView.js";
import paginationView from "../js/paginationView.js";

// Todo: Load All Countries -

const controlCountries = async function () {
  try {
    // 1. load all countries
    await model.loadAllCountries();

    viewCountries._clear();

    // data = 250 countries
    const data = model.state.countries;

    // Render 9 countries each page
    const page = model.getResultsPage();

    // 2. rendering ALL countries
    page.forEach((country) => {
      viewCountries.render(country);
    });

    // 3. Add click event forEach cards
    cardView._cardClickEvent(data);

    // 4. Render Pagination
    paginationView._renderPagination(model.state);
  } catch (err) {
    viewCountries.renderError();
  }
};

// Todo: loadTheSearchedValue -

const controlSearch = async function () {
  try {
    const query = searchResults.getQuery();

    paginationView._clear();

    // 1. load matching country
    await model.searchResults(query);

    const data = model.state.searchResults;
    console.log(data);

    // Extracted value (9 items)
    const page = model.getResultsPageSearch();

    // 2. rendering ALL MATCHED countries
    page.forEach((country) => {
      searchResults.render(country);
    });

    // 3. Add click event forEach search country
    cardView._cardClickEvent(data);

    // 4. Render Pagination
    paginationView._renderPaginationSearchResults(model.state);
    paginationView._addHandler(controlPaginationSearchResults);
  } catch (err) {
    paginationView._clear();
    viewCountries.renderError();
  }
};

// Todo: Filter by region -

const controlFilterRegion = async function (e) {
  try {
    // 1. Get the selected region
    const region = e.target.textContent.toLowerCase();

    await model.filterRegionResults(region);

    if (!region) return;

    // 2. Clear the existing render results
    viewCountries._clear();

    // Countries data
    const filteredRegion = model.state.region;

    // Extracted value (9 items)
    const page = model.getResultsPageRegion();

    // 3. Loop through the countries with matching regions
    page.forEach((country) => {
      viewCountries.render(country);
    });

    // 4. Add click event forEach render regions
    cardView._cardClickEvent(filteredRegion);

    // 5. Render Pagination number
    paginationView._renderPaginationRegion(model.state);
    paginationView._addHandler(controlPaginationRegions);
  } catch (err) {
    viewCountries.renderError();
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  viewCountries._clear();

  // 1 render NEW PAGE
  const page = model.getResultsPage(goToPage);

  // 2. rendering NEW countries
  page.forEach((country) => {
    viewCountries.render(country);
  });

  // 3. Add click event forEach cards
  cardView._cardClickEvent(page);

  // 4. Render the results in the UI
  paginationView._renderPagination(model.state);
};

// Todo: NEW-
const controlPaginationRegions = function (goToPage) {
  viewCountries._clear();

  // 1 render NEW PAGE
  const page = model.getResultsPageRegion(goToPage);

  // 2. rendering NEW countries
  page.forEach((country) => {
    viewCountries.render(country);
  });

  // 3. Add click event forEach cards
  cardView._cardClickEvent(page);

  // 4. Render the results in the UI
  paginationView._renderPaginationRegion(model.state);
};

// Todo: NEW-
const controlPaginationSearchResults = function (goToPage) {
  viewCountries._clear();

  // 1 render NEW PAGE
  const page = model.getResultsPageSearch(goToPage);
  console.log(page);

  // 2. rendering NEW countries
  page.forEach((country) => {
    viewCountries.render(country);
  });

  // 3. Add click event forEach cards
  cardView._cardClickEvent(page);

  // 4. Render the results in the UI
  paginationView._renderPaginationSearchResults(model.state);
};

/**
 * Calling the initial state of the application
 */
const init = function () {
  viewCountries.renderSpinner();
  viewCountries.addLoadEvent(controlCountries);
  searchResults.addSearchEventHandler(controlSearch);
  darkModeView._addHandlerToggle();
  paginationView._addHandler(controlPagination);
  viewCountries.addClickEvent(controlFilterRegion);
};

// Calls the website initial state
init();
