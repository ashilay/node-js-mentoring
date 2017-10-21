import fs from 'fs';
import promisify from 'promisify-node';
import bus from '../eventBus';

const readFile = promisify(fs.readFile);

export default class Importer {
  constructor(path) {
    this.path = path;
  }

  listenChange() {
    bus.on('dirwatcher:changed', (error, data) => {
      this.import(this.path);
      this.importSync(this.path);
    });
  }

  import(path) {
    return readFile(path)
      .then((buf) => {
        const data = buf.toString();
        console.log('async', data);
        return JSON.stringify({data});
      });
  }

  importSync(path) {
    const data = fs.readFileSync(path);
    console.log('sync', data.toString());
    return data.toString();
  }
}
