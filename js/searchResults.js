// Imports
//
import View from "../js/view.js";

class SearchResults extends View {
  _parentElement = document.querySelector("section.countries");
  _searchInput = document.querySelector("input.search");
  _formElement = document.querySelector("form");
  _data;

  getQuery() {
    const query = this._searchInput.value.toLowerCase();
    this._clearInput();
    this._parentElement.innerHTML = "";
    return query;
  }

  /**
   * Add "submit" event to the Search country...
   * @param {*} handler the event we are calling once submit event is executed.
   *  formElement.addEventlistener('submit', handler) wherein the handler = controlSearch in the controller
   */
  addSearchEventHandler(handler) {
    this._formElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._searchInput.value = "";
  }
}

export default new SearchResults();
