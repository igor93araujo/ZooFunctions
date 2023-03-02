const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const getBySpecie = species.find((element) => element.name === animal.specie).residents;
  if (animal.sex) {
    return getBySpecie.filter((element) => element.sex === animal.sex).length;
  } return getBySpecie.length;
}
console.log(countAnimals());

module.exports = countAnimals;
