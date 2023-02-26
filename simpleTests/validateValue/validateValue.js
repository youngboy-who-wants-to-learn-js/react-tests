const validateValue = (value) => {
  return !(value < 0 || value > 100);
};

module.exports = validateValue;
