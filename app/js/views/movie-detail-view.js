
import {helpers} from 'js/utils/helpers';
import {constants} from 'js/utils/constants';
import {MovieDetailModel} from 'js/models/movie-detail-model';

// object destructure assignment
var {base, thumbSize, posterSize} = constants;

// grab file html
var template = helpers.loadFile('templates/movie-detail.html');

var MovieDetailView = Marionette.ItemView.extend({
    tagName: 'div class="catalog__detail-wrap"',
    template: _.template(template),

    ui: {
        prev: '.movie__nav--prev',
        next: '.movie__nav--next'
    },

    events: {
        'click @ui.prev': 'wantsGoBack',
        'click @ui.next': 'wantsGoNext'
    },

    initialize(){
    },

    serializeData(){
        var model = this.model;
        model.set('backdrop_img', base + posterSize + model.get('backdrop_path') );
        model.set('prod_companies', helpers.comifyArray(model.get('production_companies')));
        return model.toJSON();
    },

    wantsGoBack(){
        this.collection.goBack();
    },

    wantsGoNext(){
        this.collection.goNext();
    },

    setLoadingState(isLoading){
        this.$el.toggleClass('show', !isLoading);
    }

});

export {MovieDetailView};


