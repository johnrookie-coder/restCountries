import detailed from "./detailed.js";

class cardsClickEvent {
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
    }, 3000);
  }
}

export default new cardsClickEvent();
