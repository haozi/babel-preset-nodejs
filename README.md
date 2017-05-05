# babel-preset-tmall

> Babel preset including es2015, es2016, es2017, react, flow

## Install

```sh
npm install --save-dev babel-preset-tmall
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["tmall"]
}
```

### Via CLI

```sh
babel script.js --presets tmall
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["tmall"]
});
```

### Options

### `es2015`

`boolean`, defaults to `true`.

Toggles including plugins from the [es2015 preset](https://babeljs.io/docs/plugins/preset-es2015/).

```json
{
  "presets": [
    ["tmall", {
      "es2015": false
    }]
  ]
}
```

You can also pass options down to the `es2015` preset.

```json
{
  "presets": [
    ["tmall", {
      "es2015": {
        "modules": false
      }
    }]
  ]
}
```

**Note:** This also works for the other preset-year options below.

### `es2016`

`boolean`, defaults to `true`.

Toggles including plugins from the [es2016 preset](https://babeljs.io/docs/plugins/preset-es2016/).

### `es2017`

`boolean`, defaults to `true`.

Toggles including plugins from the [es2017 preset](https://babeljs.io/docs/plugins/preset-es2017/).

### `react`

`boolean`, defaults to `true`.

Toggles including plugins from the [react preset](https://babeljs.io/docs/plugins/preset-react/).
