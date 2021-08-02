import detailed from "./detailed.js";

class cardsClickEvent {
  /**
   * Add click event to each cards
   * @param {Object} data. The data refers to the selected card. This includes the name, population etc.
   * @returns the data of the card has been clicked.
   */
  _cardClickEvent(data) {
    return setTimeout(() => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card, idx) => {
        card.addEventListener("click", function () {
          document.body.classList.add("light");
          detailed.render(data[idx]);

          // 4. Add click event in the button (at this point back button is loaded)
          const buttonBack = document.querySelector(".button__back");
          buttonBack.addEventListener("click", function () {
            location.reload();
          });
        });
      });
    }, 500);
  }
}

export default new cardsClickEvent();
