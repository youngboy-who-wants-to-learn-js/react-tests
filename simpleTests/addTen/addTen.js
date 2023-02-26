class Calculator {
  static addTen(num) {
    return num + 10;
  }
}

const addTen = (num) => Calculator.addTen(num);
// console.log(addTen(10));
module.exports = { addTen, Calculator };
