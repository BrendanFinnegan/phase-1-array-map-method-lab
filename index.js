const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newArry = []
  tutorials.forEach(element => { 
    let z = element.split(' ').map(x => {return x.replace(x[0], x[0].toUpperCase())}).join(' ')
    newArry.push(z)
  });

  return newArry
}
titleCased(tutorials)
console.log(titleCased(tutorials))

