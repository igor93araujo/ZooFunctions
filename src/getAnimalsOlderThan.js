const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filteredAnimals = species.filter((specie) => specie.name === animal)[0].residents
    .every((idade) => idade.age >= age);
  return filteredAnimals;
}
module.exports = getAnimalsOlderThan;
