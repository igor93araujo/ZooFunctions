/* eslint-disable no-return-assign */
const { species, employees } = require('../data/zoo_data');

const getAllEmployees = () => employees.map((employee) => {
  const getAnimals = species.filter((specie) => { // Filter espera um retorno falso e um verdadeiro
    if (employee.responsibleFor.includes(specie.id)) {
      return true;
    }
    return false;
  });
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getAnimals.map((specie) => specie.name),
    locations: getAnimals.map((specie) => specie.location),
  };
});

function getEmployeesCoverage(param) {
  if (param === undefined) return getAllEmployees();
  const { name, id } = param;
  if (name !== undefined) {
    return getAllEmployees().find((employee) => employee.fullName.includes(name));
  }
  const verifyIdExists = getAllEmployees().find((employee) =>
    employee.id === id);

  if (verifyIdExists !== undefined) {
    return verifyIdExists;
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
