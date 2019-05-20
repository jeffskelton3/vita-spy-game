const decodeBtn = document.getElementById("decodeBtn");
const textArea = document.getElementById("txt");
decodeBtn.onclick = () => decodeTheStuff();

const cypherKey = {
  'r': 'a',
  '3': 'b',
  '1': 'c',
  'k': 'd',
  '2': 'e',
  '4': 'f',
  'h': 'g',
  'g': 'h',
  'p': 'i',
  'b': 'j',
  'e': 'k',
  'n': 'l',
  '*': 'm',
  '^': 'n',
  'm': 'o',
  'z': 'p',
  'y': 'q',
  'x': 'r',
  'a': 's',
  '7': 't',
  '9': 'u',
  'w': 'v',
  'q': 'w',
  '+': 'x',
  '&': 'y',
  '$': 'z'
}

const decodeTheStuff = () => {
  const value = textArea.value;
  const decodedValue = value.split(' ')
                            .map(decodeWithCypherKey)
                            .join(' ')
  textArea.value = decodedValue;
}

const decodeWithCypherKey = (word) => {
  return word
    .toLowerCase()
    .split('')
    .map(letter => cypherKey[letter])
    .join('')
}

// ENCRYPTING THINGS


const encodeBtn = document.getElementById("encodeBtn");
const textAreaTwo = document.getElementById("txt2");
encodeBtn.onclick = () => encodeTheStuff();


const cypherKeyTwo = {
  a: 'r',
  b: '3',
  c: '1',
  d: 'k',
  e: '2',
  f: '4',
  g: 'h',
  h: 'g',
  i: 'p',
  j: 'b',
  k: 'e',
  l: 'n',
  m: '*',
  n: '^',
  o: 'm',
  p: 'z',
  q: 'y',
  r: 'x',
  s: 'a',
  t: '7',
  u: '9',
  v: 'w',
  w: 'q',
  x: '+',
  y: '&',
  z: '$'
}

const encodeTheStuff = () => {
  const value = textAreaTwo.value;
  const encodedValue = value.split(' ')
                            .map(encodeWithCypherKey)
                            .join(' ')
  textAreaTwo.value = encodedValue;
}

const encodeWithCypherKey = (word) => {
  return word
    .toLowerCase()
    .split('')
    .map(letter => cypherKeyTwo[letter])
    .join('')
}
