'use strict';

const EventEmitter = require('events');
const VError = require('verror');

const Context = require('./context');

class AgiServer extends EventEmitter {
  constructor(handler, options) {
    super();

    options = options || {};

    this.options = {
      port: options.port || 3000,
      debug: options.debug || false,
      logger: options.logger || false,
      host: options.host
    };

    this.handler = handler;

    this.server = require('net').createServer((connection) => {
      const context = new Context(connection, { debug: this.options.debug, logger: this.options.logger });
      this.handler(context)
        .catch((err) => this.emit('warn', new VError(err, 'Failed to handle an AGI connection')));
    });
  }

  init() {
    this.server.on('error', (err) => this.emit('error', new VError(err, 'Internal TCP server error')));
    this.server.on('close', () => this.emit('close'));

    this.server.listen(this.options.port, this.options.host);
  }

  close() {
    return new Promise((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve();
        }
      });
    });
  }
}

module.exports = AgiServer;
