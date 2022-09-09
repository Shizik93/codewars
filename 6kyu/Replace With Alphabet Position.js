function alphabetPosition(text) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return text.toLowerCase().split('').map((el) => alphabet.indexOf(el) + 1).filter(el => el !== 0).join(' ')


}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
