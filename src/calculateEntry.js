const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;

  const ages = {
    child,
    adult,
    senior,
  };
  return ages;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;

  const child = prices.child * countEntrants(entrants).child;
  const adult = prices.adult * countEntrants(entrants).adult;
  const senior = prices.senior * countEntrants(entrants).senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
