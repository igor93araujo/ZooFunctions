const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findSpecie = employees.find((person) => person.id === id)
    .responsibleFor[0];

  const findResidents = species.find((specie) => specie.id === findSpecie).residents;

  const findOldest = findResidents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  const oldest = [];
  oldest.push(findOldest.name, findOldest.sex, findOldest.age);
  return oldest;
}

module.exports = getOldestFromFirstSpecies;
