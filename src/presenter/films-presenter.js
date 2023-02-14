import SortView from '../view/sort-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmsView from '../view/films-view.js';
import FilmListContainerView from '../view/film-list-container-view';
import FilmButtonMoreView from '../view/film-button-more-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmDetailsView from '../view/film-details-view.js';

import {render} from '../render.js';

const FILM_COUNT  = 5;

export default class FilmsPresenter {
  sortCmponent = new SortView();
  filmsComponent = new FilmsView();
  filmListComponent = new FilmListView();
  filmListContainerComponent = new FilmListContainerView();
  filmButtonMoreComponent = new FilmButtonMoreView();

  init = (container) => {
    this.container = container;

    render(this.sortCmponent, this.container);
    render(this.filmsComponent, this.container);
    render(this.filmListComponent, this.filmsComponent.getElement());
    render(this.filmListContainerComponent, this.filmListComponent.getElement());

    for (let i = 0; i < FILM_COUNT; i++) {
      render(new FilmCardView(), this.filmListContainerComponent.getElement());
    }

    render(this.filmButtonMoreComponent, this.filmListComponent.getElement());

    render(new FilmDetailsView(), this.container.parentElement);
  };
}
