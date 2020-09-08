const name = 'Marcin'
const age = 32

console.log(name)
console.log(age)
console.log(`Siema, nazywam się ${name} i mam ${age} lata`)

const heading = document.querySelector('.main-heading');
console.log(heading);

heading.innerHTML = `Siema, nazywam się ${name} i mam ${age} lata`

console.log(heading.innerHTML);
