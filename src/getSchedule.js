const { species, hours } = require('../data/zoo_data');

const getAvailableAnimals = (day) => {
  const animals = species.filter(({ availability }) => availability.includes(day));
  return animals.map((animal) => animal.name);
};

const objWeekDay = () => {
  const obj = {};
  const weekDays = Object.keys(hours);
  weekDays.forEach((day) => {
    if (day === 'Monday') {
      obj.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      obj[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getAvailableAnimals(day),
      };
    }
  });
  return obj;
};
const getWeekDays = (day) => {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const weekDays = Object.keys(hours);
  if (weekDays.includes(day)) {
    return {
      [day]: {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getAvailableAnimals(day),
      },
    };
  }
  return day;
};

function getSchedule(scheduleTarget) {
  const weekDay = getWeekDays(scheduleTarget);
  if (typeof weekDay === 'object') return weekDay;
  const final = species.find(({ name }) => name === scheduleTarget);
  if (scheduleTarget === undefined || final === undefined) return objWeekDay();
  return final.availability;
}

module.exports = getSchedule;
