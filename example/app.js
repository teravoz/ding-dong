'use strict';

const AgiServer = require('ding-dong');

const handler = async function (context) {
  try {
    await context.answer();
    await context.streamFile('conf-adminmenu');
    await context.hangup();
  } finally {
    context.close();
  }
};

const agiServer = new AgiServer(handler, { port: 3082 });
agiServer.on('error', (err) => console.error(err));
agiServer.on('warn', (err) => console.warn(err));
agiServer.on('close', () => console.log('Internal TCP server connection closed'));
agiServer.init();
setTimeout(() => {
  agiServer.close()
    .then(() => console.log('AGI server closed'))
    .catch((err) => console.error(err));
}, 60000);