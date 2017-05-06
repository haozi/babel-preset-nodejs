# babel-preset-nodejs

> Babel preset for nodejs

## Install

```sh
npm install --save-dev babel-preset-nodejs
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["nodejs"]
}
```

### Via CLI

```sh
babel script.js --presets nodejs
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['nodejs']
});
```

### Options
#### target
##### node `number`, defaults to `4`.


```json
{
  "presets": [
    ["nodejs", {
      "targets": {
        "node": 7
      }
    }]
  ]
}
```

