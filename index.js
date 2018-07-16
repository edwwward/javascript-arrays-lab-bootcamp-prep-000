var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newKitten = [...kittens, name];
  return newKitten;
}

function prependKitten(name) {
  var kitten = [name, ...kittens];
  return kitten;
}

function removeLastKitten() {
  var kitten = [0, kittens.length - 1];
  return kitten;
}