import $ from 'jquery';

class Search {
    // Section 1 - Describe & Create and Init
    constructor() {
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.events();
    }
    // Section 2 - Events

    events() {
        this.openButton.on("click", this.openOverlay.bind(this));
        this.closeButton.on("click", this.closeOverlay.bind(this));
    }

    // Section 3 - Methods (functions)
    openOverlay() {
        this.searchOverlay.addClass('search-overlay--active');
    }

    closeOverlay() {
        this.searchOverlay.removeClass('search-overlay--active');
    }
}

export default Search;