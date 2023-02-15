import {generateFilms} from './mock/film.js';
import { generateComments } from './mock/comment.js';

import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
import FooterStatisticsView from './view/footer-statictics-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

render(new HeaderProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement, 'afterbegin');
render(new FooterStatisticsView(), siteFooterElement);

//const filmsPresenter = new FilmsPresenter();
// filmsPresenter.init(siteMainElement);

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

const filmsPresenter = new FilmsPresenter();
filmsPresenter.init(siteMainElement, filmsModel, commentsModel);
