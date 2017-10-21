import fs from 'fs';
import bus from '../eventBus';

export default class DirWatcher {
  watch(path, delay) {
    fs.watch(path, (eventType, filename) => {
      setTimeout(function() {
        console.log('EMIT dirwatcher:changed');
        bus.emit('dirwatcher:changed');
        if (filename) {
          console.log(filename);
          console.log(eventType);
        }
      }, delay);
    })
  }
}
