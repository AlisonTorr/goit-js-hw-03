const findBestEmployee = function (employees) {
  const values = Object.values(employees);

  const keys = Object.keys(employees);

  for (const value of values) {
    const maxTasks = Math.max(...values);

    const index = values.indexOf(maxTasks);

    const bestEmployee = keys[index];
    return bestEmployee;
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
