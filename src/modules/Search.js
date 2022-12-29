import $ from 'jquery';

class Search {
    // Section 1 - Describe & Create and Init
    constructor() {
        this.resultsDiv = $("#search-overlay__results");
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.searchField = $("#search-term");
        this.previousValue;
        this.events();
        this.overlayOpenState = false;
        this.spinnerState = false;
        this.typingTimer;

    }
    // Section 2 - Events

    events() {
        this.openButton.on("click", this.openOverlay.bind(this));
        this.closeButton.on("click", this.closeOverlay.bind(this));
        $(document).on("keydown", this.keyPressDispatcher.bind(this));
        this.searchField.on("keyup", this.typingLogic.bind(this));
    }

    // Section 3 - Methods (functions)
    openOverlay() {
        this.searchOverlay.addClass('search-overlay--active');
        $("body").addClass("body-no-scroll");
        this.overlayOpenState = true;
    }

    closeOverlay() {
        this.searchOverlay.removeClass('search-overlay--active');
        $("body").removeClass("body-no-scroll");
        this.overlayOpenState = false;
    }

    typingLogic() {
        if (this.searchField.val() != this.previousValue) {
            clearTimeout(this.typingTimer);
            
            if (this.searchField.val()) {
                if (!this.spinnerState) {
                    this.resultsDiv.html('<div class="spinner-loader"></div>');
                    this.spinnerState = true;
                }
    
                this.typingTimer = setTimeout(this.getResults.bind(this), 2000);
            } else {
                this.resultsDiv.html('');
                this.spinnerState = false;
            }

        }
        this.previousValue = this.searchField.val();
    }

    getResults() {
        this.resultsDiv.html("these are fake results");
        this.spinnerState = false;
    }

    keyPressDispatcher(e) {
        if(e.keyCode == 83 && !this.overlayOpenState && !$("input, textarea").is(':focus')) {
            this.openOverlay();
        }
        if(e.keyCode == 27 && this.overlayOpenState) {
            this.closeOverlay();
        }
    }
}

export default Search;