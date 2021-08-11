// import View from "../js/view.js";

class PaginationView {
  // Private fields
  _parentElementNav = document.querySelector("nav ul.pagination");
  _parentElement = document.querySelector("section.countries");
  _data;

  // Todo: Refactor -
  // diff this._generateMarkupCountry(); -  _renderPaginationRegion

  _renderPagination(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkupCountry();
    this._parentElementNav.insertAdjacentHTML("beforeend", markup);
  }

  // Todo: Refactor -
  // diff this._generateMarkupRegion(); -   _renderPagination

  _renderPaginationRegion(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkupRegion();
    this._parentElementNav.insertAdjacentHTML("beforeend", markup);
  }

  _renderPaginationSearchResults(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkupSearch();
    this._parentElementNav.insertAdjacentHTML("beforeend", markup);
  }

  _addHandler(handler) {
    this._parentElementNav.addEventListener("click", function (e) {
      const btn = e.target.closest(".page-item");
      const goToPage = +btn.dataset.goto;

      if (!btn) return;

      handler(goToPage);
    });
  }

  _clear() {
    this._parentElementNav.innerHTML = "";
  }

  _generateMarkup() {
    return `
    <div class="card shadow" data-aos="fade-up"
    data-aos-duration="2000">
          <img src="${this._data.flag}" class="card-img-top" alt="${
      this._data.name
    }">
          <div class="card-body">
            <h2 class="card-title"> ${this._data.name}</h2>
            <p class="card-text"><strong>Population:</strong> ${
              this._data.population
            }</p>
            <p class="card-text"><strong>Region:</strong> ${
              this._data.region
            }</p>
            <p class="card-text"><strong>Capital:</strong> ${
              this._data.capital ? this._data.capital : "No capital city"
            }</p>
          </div>
    </div>
    `;
  }

  // Todo: Refactor -
  // diff this._data.countries -   _generateMarkupRegion()

  _generateMarkupCountry() {
    // Calculate the number of pages
    const numPages = Math.ceil(
      this._data.countries.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // Page 1 and there are OTHER pages
    if (currentPage === 1 && numPages > 1) {
      return `
     <li></li>
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

  // Todo: Refactor -
  // diff this._data.region -   _generateMarkupCountry()
  _generateMarkupRegion() {
    // Calculate the number of pages
    const numPages = Math.ceil(
      this._data.region.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    console.log(numPages);
    // Page 1 and there are OTHER pages
    if (currentPage === 1 && numPages > 1) {
      return `
     <li></li>
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

  // Todo: Refactor -
  // diff this._data.region -   _generateMarkupCountry()
  _generateMarkupSearch() {
    // Calculate the number of pages
    const numPages = Math.ceil(
      this._data.searchResults.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // Page 1 and there are OTHER pages
    if (currentPage === 1 && numPages > 1) {
      return `
     <li></li>
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
