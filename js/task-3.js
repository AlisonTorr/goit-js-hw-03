const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  console.log(values);

  for (const value of values) {
    let i = 1;
    i < values.length;
    i += 1;
    let maxTasks = value[0];
    if (values[i] > maxTasks) {
      maxTasks = values[i];
    }
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
