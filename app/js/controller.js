
import {MovieListCollection} from 'js/models/movie-list-collection';
import {MovieListModel} from 'js/models/movie-list-model';
import {MovieListView} from 'js/views/movie-list-view';
import {MovieDetailView} from 'js/views/movie-detail-view';
import {MainLayout} from 'js/main-layout';
import {utils} from 'js/helpers/utils';

var Controller = Marionette.Controller.extend({

    initialize(){
        var movieCollection = this.movieCollection = new MovieListCollection();
        var movieModel = this.movieModel = new MovieListModel();
        var mainLayout = new MainLayout();

        _.extend(this, _.pick(this.options, 'detailRegion', 'navRegion'));
        _.bindAll(this, 'onListSelected');

        // Create Views
        this.listView = new MovieListView({
            collection: movieCollection
        });

        this.detailView = new MovieDetailView({
            collection: movieCollection,
            model: movieModel
        });

        // render views
        mainLayout.listNav.show(this.listView);

        movieCollection.fetch({
            success: this.onDataLoaded
        });

        // update detail when selected an item from the list
        this.listView.on('list:selected', this.onListSelected);

        this.movieModel.on('sync', () => {
            mainLayout.movieDetail.show(this.detailView);
            this.detailView.setLoadingState(false);
            this.detailView.render();
        }.bind(this));
    },

    onListSelected(child){
        var id = child.get('id');
        this.movieModel.url = utils.createMovieUrl(id);
        this.movieModel.fetch();
        this.detailView.setLoadingState(true);
    }
});


export {Controller};

