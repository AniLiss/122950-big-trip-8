export const INITIAL_EVENTS_AMOUNT = 7;
export const filtersContainer = document.querySelector(`.trip-filter`);
export const eventsContainer = document.querySelector(`.trip-points`);
import {eventData, tripTitle, generateRandomNumber} from './data';

export const createEvent = (amountOfEvents, container) => {
  return Array(amountOfEvents).fill().map(() => {
    // container.innerHTML += eventNode;
    container.innerHTML += makeEvent(eventData());
    return container;
  });
};

export const makeEvent = (event) => `<section class="trip-day">
      <article class="trip-day__info">
        <span class="trip-day__caption">Day</span>
        <p class="trip-day__number">1</p>
        <h2 class="trip-day__title">${event.date}</h2>
      </article>

      <div class="trip-day__items">
        <article class="trip-point">
          ${tripTitle(event.type)}
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${event.timeInterval}</span>
            <span class="trip-point__duration">${event.timeDuration}</span>
          </p>
          <p class="trip-point__price">&euro;&nbsp;${generateRandomNumber(0, 100)}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">Upgrade to business +&euro;&nbsp;${generateRandomNumber(0, 100)}</button>
            </li>
          </ul>
        </article>
        <article class="trip-point">
          ${tripTitle(event.type)}
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${event.timeInterval}</span>
            <span class="trip-point__duration">${event.timeDuration}</span>
          </p>
          <p class="trip-point__price">&euro;&nbsp;${generateRandomNumber(0, 100)}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">Upgrade to business +&euro;&nbsp;${generateRandomNumber(0, 100)}</button>
            </li>
            <li>
              <button class="trip-point__offer">Select meal +&euro;&nbsp;${generateRandomNumber(0, 100)}</button>
            </li>
          </ul>
        </article>
        <article class="trip-point">
          ${tripTitle(event.type)}
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${event.timeInterval}</span>
            <span class="trip-point__duration">${event.timeDuration}</span>
          </p>
          <p class="trip-point__price">&euro;&nbsp;${generateRandomNumber(0, 100)}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">Rent a car +&euro;&nbsp;${generateRandomNumber(0, 100)}</button>
            </li>
          </ul>
        </article>
        <article class="trip-point">
          ${tripTitle(event.type)}
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${event.timeInterval}</span>
            <span class="trip-point__duration">${event.timeDuration}</span>
          </p>
          <p class="trip-point__price">&euro;&nbsp;${generateRandomNumber(0, 100)}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">Add breakfast +&euro;&nbsp;${generateRandomNumber(0, 100)}</button>
            </li>
          </ul>
        </article>
      </div>
    </section>`;

