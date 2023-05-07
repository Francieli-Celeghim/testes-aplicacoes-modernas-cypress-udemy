it('nada agora', function () {})

// function soma (a, b) {
//   return a + b;
// }

// const soma = function (a, b) {
//   return a + b
// }

// arrow function
// const soma = (a, b) => {
//   return a + b
// }

// outra forma de usar a função arrow function
// const soma = (a, b) => a + b

// quando tem somente um parametro não precisa de parenteses 
// const soma = a => a + a

console.log(soma(1, 4))

it('a function test...', function (){
  console.log('Function', this)
})

// pode também usar arrow function
it('an arrow test...', () => {
  console.log('Arrow', this)
})