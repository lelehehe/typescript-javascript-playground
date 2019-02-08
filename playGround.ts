import * as deepEqual from 'deep-equal';
import * as merge from 'deepmerge';

let data = 'aaa';
let template = `
  {
    plugins: [
      {
        CONFIG: 111,
        HANDLERFACTORY: ${data}
      }
    ],
    mode: ${data}

  }`; /*?+*/

