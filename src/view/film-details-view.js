import {createElement} from "../render.js";
import {createFilmDetailsControlsTemplate} from './film-details-controls-template.js';
import {createFilmDetailsInfoTemplate} from './film-details-info-template.js';
import {createFilmDetailsCommentsTemplate} from './film-details-comments-template.js';
import {createFilmDetailsFormTemplate} from './film-details-form-template.js'

const createFilmDetailsTemplarte = () => `
  <section class="film-details">
    <div class="film-details__inner">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        ${createFilmDetailsInfoTemplate}
        ${createFilmDetailsControlsTemplate}
      </div>
      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          ${createFilmDetailsCommentsTemplate}
          ${createFilmDetailsFormTemplate}
        </section>
      </div>
    </div>
  </section>`;

export default class FilmDetailsView {
  getTemplate() {
    return createFilmDetailsTemplarte();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

