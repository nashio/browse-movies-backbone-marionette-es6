import {MovieListModel} from 'js/models/movie-list-model';
import {constants} from 'js/utils/constants';

// constants
var apiURL =  constants.listAPI + constants.apiKey;

var MovieListCollection = Backbone.Collection.extend({
    model: MovieListModel,

    defaults: {
        model: MovieListModel,
        sortDirection: 1,
        idx: 0
    },

    url: apiURL,

    initialize() {
        this.idx = 0;
        this.sortDirection = 1;
        this.sort();
    },

    parse(resp) {
        // extract 'results' property from main json
        return resp.results;
    },

    goBack(){
        if( this.idx < 1 ){
            this.idx = this.length - 1;
        } else {
            this.idx--;
        }

        this.trigger('change:index');
        return this.idx;
    },

    goNext(){
        if( this.idx >= this.length - 1 ){
            this.idx = 0;
        } else {
            this.idx++;
        }

        this.trigger('change:index');
        return this.idx;
    },

    getChildByIndex(){
        return this.at(this.idx);
    },

    comparator(a, b) {
        a = a.get(this.sortField);
        b = b.get(this.sortField);

        if( this.sortDirection < 1){
            return a > b ?  1 : a < b ? -1 : 0;
        }else {
            return b > a ?  1 : b < a ? -1 : 0;
        }
    }

});

export {MovieListCollection};
