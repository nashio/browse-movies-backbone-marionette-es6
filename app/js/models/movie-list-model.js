
var MovieListModel = Backbone.Model.extend({
    defaults: {
        title: '',
        tagline: '',
        release_date: '',
        overview: '',
        homepage: '',
        backdrop_img: ''
    },

    initialize() {
    }
});

export {MovieListModel};
