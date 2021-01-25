const employeesGroupA = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

const employeesGroupB = {
  kiwi: 200,
  lux: 50,
  chelsy: 150,
};

let totalSalary = 0;

const countTotalSalary = function (employees) {
  const values = Object.value(employees);

  for (const value of values) {
    totalSalary += value;
  }
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
