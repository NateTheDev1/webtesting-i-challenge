module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  item.enhancement !== 20 ? item.enhancement++ : item.enhancement;
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
