// Imports
//
import View from "../js/view.js";

class ViewCountries extends View {
  _parentElement = document.querySelector("section.countries");
  // Dropdown
  _dropDownElements = document.querySelector(".dropdown-menu");
  _data;

  /**
   * Add "hashchange" event on the entire window
   * @param {event change} handler. Handler is the function to be called when "hashchange" event triggered.
   * handler = filterRegion function in the controller
   */
  addHandlerRender(handler) {
    window.addEventListener("hashchange", handler);
  }

  /**
   *
   * @param {load event} handler. Handler is a callback function once the window is loaded.
   * handler = controlCountries function in the controller
   */
  addLoadEvent(handler) {
    this._parentElement.addEventListener("load", handler());
  }

  /**
   * Add click event on the dropdown items
   * @param {*} handler. A callback function on which the click event will be passed in.
   * handler = controlFilterRegion. We passed in the "e" object to use it in the controlFilterRegion function.
   */
  addClickEvent(handler) {
    this._dropDownElements.addEventListener("click", function (e) {
      handler(e);
    });
  }
}

export default new ViewCountries();
