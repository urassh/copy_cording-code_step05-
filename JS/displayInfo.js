let test = document.getElementById('display');
console.log(test);

const create = document.createElement('h1');
console.log(create);

console.log(products[0]);

let product = products[0];
console.log(product);

create.innerHTML = product.title;

test.appendChild(create);
console.log(create);
