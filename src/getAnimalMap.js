const { species } = require('../data/zoo_data');

function setLocaltions(location) {
  const findAnimals = species.filter((specie) => specie.location === location)
    .map((element) => element.name);
  return findAnimals;
}
const objLocations = {
  NE: setLocaltions('NE'),
  NW: setLocaltions('NW'),
  SE: setLocaltions('SE'),
  SW: setLocaltions('SW'),
};

function getAnimalMap(options) {
  if (options === undefined || options.sex === 'female' || options.sorted === true) {
    return objLocations;
  }
}

// console.log(getAnimalMap({ sex: 'female', sorted: true }));

/* até o teste 3 acima */

const findAnimalByNames = (location) => {
  const speciesByLocation = species.filter((element) => element.location === location);
  const newObj = speciesByLocation.reduce((acc, curr) => {
    if (acc === {}) {
      acc[location] = [];
    }
    acc[location].push({ [curr.name]: curr.residents.filter((resident) => resident.name) });
    return acc;
  }, { [location]: [] });
  return newObj;
};

console.log(findAnimalByNames('NE'));

/* console.log(animalsArray);
console.log(createAnimalsArray); */

/* Element.forEach((indice) => animalsArray.push(indice.name)) */
/* const objNames = {
  NE: getAnimalNames('NE'),
  NW: getAnimalNames('NW'),
  SE: getAnimalNames('SE'),
  SW: getAnimalNames('SW'),
} */

module.exports = getAnimalMap;
