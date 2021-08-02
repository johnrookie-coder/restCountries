class DarkModeView {
  _parentElement = document.querySelector(".toggle");
  _bodyElement = document.body;

  _addHandlerToggle() {
    // let state = "";
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".d-mode");

      if (!btn) return;

      this._bodyElement.classList.toggle("dark");
    });
  }
}

export default new DarkModeView();
