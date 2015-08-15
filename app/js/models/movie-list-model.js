
var MovieListModel = Backbone.Model.extend({
    defaults: {
        title: '',
        release_date: '',
        vote_count: ''
    },

    initialize() {
    }
});

export {MovieListModel};
