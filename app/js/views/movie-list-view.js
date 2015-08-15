import {utils} from 'js/helpers/utils';
import {MovieRowView} from 'js/views/movie-row-view';

var MovieListView = Marionette.CollectionView.extend({
    childView: MovieRowView,
    tagName: 'ul class="movieslist"',
    ui: {
        sortByTitle: '.sort-by-title',
        sortByDate: '.sort-by-date',
    },

    initialize(){
        _.bindAll(this, 'sortBy', 'loadFirst', 'highlightRow', 'loadAt');
        $(this.ui.sortByTitle).on('click', this.sortBy);
        $(this.ui.sortByDate).on('click', this.sortBy);

        this.listenTo(this, 'list:selected', this.onSelectedItem);
        this.listenTo(this.collection, 'sync', this.loadFirst);
        this.listenTo(this.collection, 'change:index', this.loadAt);
    },

    loadFirst(){
        // start by loading the first element
        this.trigger('list:selected', this.collection.first() );
    },

    loadAt(){
        this.trigger('list:selected', this.collection.getChildByIndex() );
    },

    sortBy(e){
        var field = $(e.target).hasClass('sortArrowTitle') ? 'title' : 'date';
        this.collection.sortField = field;
        this.collection.sortDirection *= -1;
        this.collection.sort();
        $(e.target).toggleClass('asc');
    },


    onSelectedItem(child, $el){
        var idx = this.collection.indexOf(child);
        this.collection.idx = idx;
        this.highlightRow($el);
    },

    highlightRow($el){
        // grab element to highlight or default to first one
        var $childEl = $el || this.$el.find('li').eq(0);
        utils.makeActive($childEl);
    }

});

export {MovieListView};
