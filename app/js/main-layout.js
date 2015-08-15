
var MainLayout = Marionette.LayoutView.extend({
    el: "#movie-catalog",

    regions: {
        listNav: ".movies__box",
        movieDetail: ".detail__box"
    },

    initialize: function(){
    }
});

export {MainLayout};
