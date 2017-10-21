import {name} from './config/index';
import {User, Product} from './models';
import {DirWatcher} from './dirwatcher';
import {Importer} from './importer';

console.log(name);

const user = new User();
const product = new Product();

const dw = new DirWatcher();
dw.watch('./data/test.csv', 1000);

const importer = new Importer('./data/test.csv');
importer.listenChange();


