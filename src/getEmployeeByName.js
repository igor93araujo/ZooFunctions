const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((funcionario) =>
    funcionario.firstName.includes(employeeName) || funcionario.lastName.includes(employeeName));
};

module.exports = getEmployeeByName;
