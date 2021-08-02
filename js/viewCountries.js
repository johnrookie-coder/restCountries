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

  // fix: NEW!
  // addClickEvent(card) {
  //   if (!card) return;

  //   card.addEventListener("click", () => {
  //     this._cardsx = card;
  //     console.log(this._cardsx);
  //   });
  // }
}

export default new ViewCountries();
