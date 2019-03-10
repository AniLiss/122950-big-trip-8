import {filtersContainer, eventsContainer, createEvent} from './constants';

const createFilter = (id, value, isChecked = false) => {
  return `
  <input type="radio" id=${id} name="filter" value=${value} ${isChecked ? `checked` : ``}>
  <label class="trip-filter__item" for="filter-everything">${value}</label>`;
};

const filterEverything = createFilter(`filter-everything`, `everything`, true);
const filterFuture = createFilter(`filter-future`, `future`);
const filterPast = createFilter(`filter-past`, `past`);

const filters = [filterEverything, filterFuture, filterPast];


const appendNode = (items) => {
  items.map((item) => {
    filtersContainer.innerHTML += item;
  });
  return filtersContainer;
};

appendNode(filters);

const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const switchEvents = () => {
  eventsContainer.innerHTML = ``;
  createEvent(getRandomNumber(3, 10), eventsContainer);
};

filtersContainer.addEventListener(`click`, (e) => {
  const filterLabel = e.target;
  if (filterLabel.classList.contains(`trip-filter__item`)) {
    switchEvents();
  }
});
