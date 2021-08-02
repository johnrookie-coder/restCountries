// Imports
import { getJSON } from "../js/helper.js";
import { API_URL } from "../js/config.js";

// This is used to store all the response / data to be able to use in the controller
export const state = {
  countries: {},
  searchResults: {},
  region: {},
};

/**
 * Stores all the countries in the state.countries object.
 */
export const loadAllCountries = async function () {
  try {
    const data = await getJSON(`${API_URL}all`);
    state.countries = data;
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
    // console.log(data);
    // return data;
  } catch (err) {
    throw err;
  }
};
