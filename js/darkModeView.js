class DarkModeView {
  _parentElement = document.querySelector(".toggle");
  _bodyElement = document.body;

  _addHandlerToggle() {
    // let state = "";
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".d-mode");

      if (!btn) return;

      this._bodyElement.classList.toggle("dark");

      // this._bodyElement.classList.contains("dark")
      //   ? (state = true)
      //   : (state = false);

      // if (this._bodyElement.classList.contains("dark")) {
      //   state = true;
      //   console.log(state);
      // } else {
      //   state = false;
      //   console.log(state);
      // }
    });
    // console.log(state);
  }
}

export default new DarkModeView();
