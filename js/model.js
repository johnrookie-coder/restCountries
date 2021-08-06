// Imports
import { getJSON } from "../js/helper.js";
import { API_URL } from "../js/config.js";
import { RESULTS_PER_PAGE } from "../js/config.js";

// This is used to store all the response / data to be able to use in the controller
export const state = {
  countries: {},
  searchResults: {},
  region: {},
  resultsPerPage: RESULTS_PER_PAGE,
  page: 1,
};

/**
 * Stores all the countries in the state.countries object.
 */
export const loadAllCountries = async function () {
  try {
    const data = await getJSON(`${API_URL}all`);
    return (state.countries = data);
  } catch (err) {
    throw err;
  }
};

/**
 * Get the user search query in the input field
 * @param {String} query is the user search value
 */
export const searchResults = async function (query) {
  try {
    const data = await getJSON(`${API_URL}name/${query}`);
    state.searchResults = data;
  } catch (err) {
    throw err;
  }
};

export const filterRegionResults = async function (region) {
  try {
    const data = await getJSON(`${API_URL}region/${region}`);
    state.region = data;
  } catch (err) {
    throw err;
  }
};

/**
 * Pagination
 * @param {Number} page . This will received a number based the page number that has been clicked
 * @returns 9 Array items per page
 */

/**
 *
 * @param {Number} page . The page number comes from the state.page whenever the pagination is click, it continues
 * it will continue to update based on what the user has clicked.
 * @returns The first 9 array items on the list
 */
export const getResultsPage = function (page = state.page) {
  state.page = page;
  // start: (page1 - 1) =  0 * 9 = 0;
  const start = (page - 1) * RESULTS_PER_PAGE;

  // end page1 (1) * 9 = 9
  const end = page * RESULTS_PER_PAGE;

  // The state.countries contains 250 Array items, we slice and get the first 9 items
  return state.countries.slice(start, end);
};

// Todo: New-
/**
 *
 * @param {Number} page . The page number comes from the state.page whenever the pagination is click, it continues
 * it will continue to update based on what the user has clicked.
 * @returns The first 9 array items on the list
 */
export const getResultsPageRegion = function (page = 1) {
  state.page = page;
  // start: (page1 - 1) =  0 * 9 = 0;
  const start = (page - 1) * RESULTS_PER_PAGE;

  // end page1 (1) * 9 = 9
  const end = page * RESULTS_PER_PAGE;

  // Filtered regions and get only 9 items until it reached the total number of pages
  return state.region.slice(start, end);
};

// Todo: NEW
export const getResultsPageSearch = function (page = state.page) {
  state.page = page;
  // start: (page1 - 1) =  0 * 9 = 0;
  const start = (page - 1) * RESULTS_PER_PAGE;

  // end page1 (1) * 9 = 9
  const end = page * RESULTS_PER_PAGE;

  // The state.countries contains 250 Array items, we slice and get the first 9 items
  return state.searchResults.slice(start, end);
};
