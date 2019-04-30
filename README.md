# ding-dong

Create AGI server with ding-dong. Use with Asterisk for fast telephony apps. 

## Install

```
npm install https://github.com/teravoz/ding-dong.git
```

## Usage example

### Code

`````javascript
const AgiServer = require('ding-dong');

const handler = function (context) {
    context.onEvent('variables')
        .then(function (vars) {
            return context.streamFile('conf-adminmenu');
        })
        .then(function (result) {
            return context.setVariable('RECOGNITION_RESULT', 'I\'m your father, Luc');
        })
        .then(function (result) {       
            return context.end();
        });
};

const agiServer = new AgiServer(handler, { port: 3000 });
agiServer.on('error', (err) => console.error(err));
agiServer.on('close', () => console.log('Internal TCP server connection closed'));
agiServer.init();
agiServer.close()
    .then(() => console.log('AGI server closed'))
    .catch((err) => console.error(err));
`````

### Asterisk extensions.conf

`````
[default]
exten => 1000,1,AGI(agi://localhost:3000)
`````

## API

see [API.md](API.md)


## Links

[Asterisk AGI](https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+AGI+Commands)