var faker = require('faker');

console.log('==================');
console.log('WELCOME TO MY SHOP');
console.log('==================');

for (var i = 0; i < 10; i++) {
    let producto = faker.commerce.productName();
    let precio = faker.commerce.price();
    console.log(producto + ' - ' + '$'+precio);
}
