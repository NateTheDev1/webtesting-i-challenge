export function success(item) {
  item.enhancement !== 20 ? item.enhancement++ : item.enhancement;
  return { ...item };
}

export function fail(item) {
  if (item.enhancement < 15) {
    item.enhancement -= 5;
  } else if (item.enhancement > 15 && item.enhancement <= 16) {
    item.enhancement -= 10;
  } else if (item.enhancement > 16) {
    item.enhancement--;
  }

  return { ...item };
}

export function repair(item) {
  item.durability = 100;
  return { ...item };
}

export function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`;
  }

  return { ...item };
}
