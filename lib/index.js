'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    presets: [opts.es2015 !== false && [_babelPresetEs2.default.buildPreset, opts.es2015], opts.es2016 !== false && _babelPresetEs4.default, opts.es2017 !== false && _babelPresetEs6.default, opts.react !== false && _babelPresetReact2.default].filter(Boolean)
  };
};

var _babelPresetEs = require('babel-preset-es2015');

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPresetEs3 = require('babel-preset-es2016');

var _babelPresetEs4 = _interopRequireDefault(_babelPresetEs3);

var _babelPresetEs5 = require('babel-preset-es2017');

var _babelPresetEs6 = _interopRequireDefault(_babelPresetEs5);

var _babelPresetReact = require('babel-preset-react');

var _babelPresetReact2 = _interopRequireDefault(_babelPresetReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb250ZXh0Iiwib3B0cyIsInByZXNldHMiLCJlczIwMTUiLCJidWlsZFByZXNldCIsImVzMjAxNiIsImVzMjAxNyIsInJlYWN0IiwiZmlsdGVyIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUtlLFVBQVVBLE9BQVYsRUFBOEI7QUFBQSxNQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQzNDLFNBQU87QUFDTEMsYUFBUyxDQUNQRCxLQUFLRSxNQUFMLEtBQWdCLEtBQWhCLElBQXlCLENBQUMsd0JBQWFDLFdBQWQsRUFBMkJILEtBQUtFLE1BQWhDLENBRGxCLEVBRVBGLEtBQUtJLE1BQUwsS0FBZ0IsS0FBaEIsMkJBRk8sRUFHUEosS0FBS0ssTUFBTCxLQUFnQixLQUFoQiwyQkFITyxFQUlQTCxLQUFLTSxLQUFMLEtBQWUsS0FBZiw4QkFKTyxFQUtQQyxNQUxPLENBS0FDLE9BTEE7QUFESixHQUFQO0FBUUQsQzs7QUFkRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmVzZXRFUzIwMTUgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNSdcbmltcG9ydCBwcmVzZXRFUzIwMTYgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNidcbmltcG9ydCBwcmVzZXRFUzIwMTcgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNydcbmltcG9ydCBwcmVzZXRSZWFjdCBmcm9tICdiYWJlbC1wcmVzZXQtcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0LCBvcHRzID0ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVzZXRzOiBbXG4gICAgICBvcHRzLmVzMjAxNSAhPT0gZmFsc2UgJiYgW3ByZXNldEVTMjAxNS5idWlsZFByZXNldCwgb3B0cy5lczIwMTVdLFxuICAgICAgb3B0cy5lczIwMTYgIT09IGZhbHNlICYmIHByZXNldEVTMjAxNixcbiAgICAgIG9wdHMuZXMyMDE3ICE9PSBmYWxzZSAmJiBwcmVzZXRFUzIwMTcsXG4gICAgICBvcHRzLnJlYWN0ICE9PSBmYWxzZSAmJiBwcmVzZXRSZWFjdFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pXG4gIH1cbn1cbiJdfQ==