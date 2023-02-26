const parseObjectValuestoStringArray = (obj) => {
  return Object.values(obj)
    .filter((item) => Number.isInteger(item))
    .map(String);
};

module.exports = parseObjectValuestoStringArray;
