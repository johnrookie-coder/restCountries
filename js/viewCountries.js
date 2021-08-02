// Imports
//
import View from "../js/view.js";

class ViewCountries extends View {
  // Private fields
  _parentElement = document.querySelector("section.countries");
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
}

export default new ViewCountries();
