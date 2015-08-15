import {utils} from 'js/helpers/utils';
import {constants} from 'js/helpers/constants';

var thumbURL = constants.base + constants.thumbSize;
var template = utils.loadFile('templates/movie-row.html');

var MovieRowView = Marionette.ItemView.extend({
    tagName: 'li class="movielist__item"',
    template: _.template(template),

    events: {
        'click' : 'wantsToSelectMovie'
    },

    initialize(){
    },

    wantsToSelectMovie(e){
        e.preventDefault();
        this._parent.trigger('list:selected', this.model, this.$el);
    },

    serializeData(){
        var data = this.model.toJSON();
        data.thumb = thumbURL + data.poster_path;
        return data;
    }

});

export {MovieRowView};
