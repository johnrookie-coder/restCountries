import View from "../js/view.js";

class PaginationView extends View {
  // Private fields
  _parentElement = document.querySelector("nav ul.pagination");

  _addHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".page-item");
      const goToPage = +btn.dataset.goto;

      if (!btn) return;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    // Calculate the number of pages
    const numPages = Math.ceil(
      this._data.countries.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // Page 1 and there are OTHER pages
    if (currentPage === 1 && numPages > 1) {
      return `
     
     <li class="page-item" data-goto = "${currentPage + 1}">
      <a class="page-link" href="#" aria-label="Next">
        <span class="d-flex justify-content-between align-items-center" > Page ${
          currentPage + 1
        } &nbsp; &nbsp;  <i class="fas fa-arrow-right"></i></span>
      </a>
    </li>
      `;
    }

    //  LAST Page
    if (currentPage === numPages && numPages > 1) {
      return ` 
      <li class="page-item prev"  data-goto = "${currentPage - 1}">
        <a class="page-link" href="#" aria-label="Previous">
          <span class="d-flex justify-content-between align-items-center"> <i class="fas fa-arrow-left" ></i> &nbsp; &nbsp; Page ${
            currentPage - 1
          }</span>  
        </a>
     </li> `;
    }

    // OTHER Page
    if (currentPage < numPages) {
      return `
      <li class="page-item prev" data-goto = "${currentPage - 1}">
        <a class="page-link" href="#" aria-label="Previous">
          <span class="d-flex justify-content-between align-items-center"> <i class="fas fa-arrow-left"></i> &nbsp; &nbsp; Page ${
            currentPage - 1
          }</span>  
        </a>
     </li> 
     <li class="page-item" data-goto = "${currentPage + 1}">
      <a class="page-link" href="#" aria-label="Next">
        <span  class="d-flex justify-content-between align-items-center"> Page ${
          currentPage + 1
        } &nbsp; &nbsp;  <i class="fas fa-arrow-right"></i></span>
      </a>
    </li>
      `;
    }

    // Page 1 with NO other pages
    // guard clause
    return "";
  }
}

export default new PaginationView();
