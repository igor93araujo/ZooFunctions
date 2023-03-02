const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((funcionario) => funcionario.managers.includes(id));
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((funcionario) => funcionario.managers.includes(managerId))
      .map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
