const {name} = require('./config/index');
console.log(name);

const {User, Product} = require('./models');

const user = new User();
const product = new Product();
