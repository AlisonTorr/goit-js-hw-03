const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  console.log(values);

  for (const value of values) {
    const maxTasks = Math.max(...values);
    console.log(maxTasks);

    const index = values.indexOf(maxTasks);

    const keys = Object.keys(employees);
    console.log(keys);

    const bestEmployee = keys[index];
    console.log(bestEmployee);
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
