const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);

const composeDescriptions = (items) => items.map((item) => (
  `<li><button class="trip-point__offer">${item}</button></li>`)
);

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomDate = (start, end) => {
  const date = new Date(start.getTime() + generateRandomNumber(2, 12) * (end.getTime() - start.getTime()));
  return `${date.getDay() + 1}/${date.getMonth() + 1}`;
};

const generateRandomTime = () => {
  const hoursStart = generateRandomNumber(0, 11);
  const hoursEnd = generateRandomNumber(0, 11);
  let minutesStart = generateRandomNumber(0, 59);
  let minutesEnd = generateRandomNumber(0, 59);
  if (minutesStart < 10) {
    minutesStart = `0${+minutesStart}`;
  }

  if (minutesEnd < 10) {
    minutesEnd = `0${+minutesEnd}`;
  }

  const hoursDuration = Math.abs(+hoursEnd - +hoursStart);
  let minutesDuration = +minutesEnd - +minutesStart;

  if (minutesDuration < 10) {
    minutesDuration = `0${+minutesDuration}`;
  }

  const time = {
    timeInterval: `${hoursStart}:${minutesStart}-${hoursEnd}:${minutesEnd}`,
    timeDuration: `${hoursDuration}h ${minutesDuration}m`
  };

  return time;
};

export const tripTitle = (obj) => {
  const index = generateRandomNumber(0, Object.keys(obj).length - 1);

  const key = Object.keys(obj)[index];

  const value = obj[Object.keys(obj)[index]];

  return `<i class="trip-icon">${value}</i>
          <h3 class="trip-point__title">${key}</h3>`;
};

const offers = [
  `Add luggage`,
  `Switch to comfort class`,
  `Add meal`,
  `Choose seats`
].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 1);

const composeOffers = (items) => (
  items.map((item) => (
    `<li><button class="trip-point__offer">${item} +&euro;&nbsp;${generateRandomNumber(0, 100)}</button></li>`
  )).join(``)
);

export const eventData = () => ({
  type: {
    'Taxi': `🚕`,
    'Bus': `🚌`,
    'Train': `🚂`,
    'Ship': `🛳`,
    'Transport': `🚊`,
    'Drive': `🚗`,
    'Flight': `✈️`,
    'Checkin': `🏨`,
    'Sightseeing': `🏛️`,
    'Restaurant': `🍴`
  },
  contries: new Set([
    `Amsterdam`,
    `Singapore`,
    `London`,
    `New York`,
    `Hong Kong`
  ]),
  pictures: `http://picsum.photos/300/150?r=${Math.random()}`,
  offers: composeOffers(offers),
  description: composeDescriptions(descriptions),
  // price: generateRandomNumber(0, 100),
  date: generateRandomDate(new Date(2018, 1, 1), new Date()),
  timeInterval: generateRandomTime().timeInterval,
  timeDuration: generateRandomTime().timeDuration
});
