function* iterate(object) {
  for(let key of Object.keys(object)) {
    yield [key, object[key]];
  }
}

const ObjectIterator = {
  iterate
};