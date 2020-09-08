const name = 'Marcin'
const age = 22

console.log(name)
console.log(age)
console.log(`Siema, nazywam się ${name} i mam ${age} lata`)

const heading = document.querySelector('.main-heading');
console.log(heading);

heading.innerHTML = `Siema, nazywam się ${name} i mam ${age} lata`

console.log(heading.innerHTML);


const emptyClass = document.querySelector('.secondary-box13--js');
emptyClass.innerHTML = `Witam, oto test wklejania tekstu do pustego div'a, za pomocą jsa`;