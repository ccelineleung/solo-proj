/*
 * based on https://gist.github.com/sebmarkbage/fac0830dbb13ccbff596
 * by Sebastian Markbåge
 */

'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var REACT_PROPS = ['childContextTypes', 'contextTypes', 'defaultProps', 'propTypes'];
var REACT_LIFECYCLES = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'render'];

var noop = function noop() {
  return null;
};
var trueNoop = function trueNoop() {
  return true;
};
var es6ify = function es6ify(mixin) {
  if (typeof mixin === 'function') {
    // mixin is already es6 style
    return mixin;
  }
  return function (Base) {
    // mixin is old-react style plain object
    // convert to ES6 class

    var NewClass = (function (_Base) {
      _inherits(NewClass, _Base);

      function NewClass() {
        _classCallCheck(this, NewClass);

        _get(Object.getPrototypeOf(NewClass.prototype), 'constructor', this).apply(this, arguments);
      }

      return NewClass;
    })(Base);

    var clonedMixin = _Object$assign({}, mixin);
    // move React props to NewClass's constructor
    upgradeReactProps(NewClass, clonedMixin);
    // merge React props defined as ES7 class static properties
    mergeStaticProps(NewClass, clonedMixin);
    _Object$assign(NewClass.prototype, clonedMixin);

    return NewClass;
  };
};

var mixin = function mixin() {
  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  var Base = (function (_React$Component) {
    _inherits(Base, _React$Component);

    function Base() {
      _classCallCheck(this, Base);

      _get(Object.getPrototypeOf(Base.prototype), 'constructor', this).apply(this, arguments);
    }

    return Base;
  })(_react2['default'].Component);

  Base.prototype.shouldComponentUpdate = trueNoop;

  // No-ops so we need not check before calling super()
  REACT_LIFECYCLES.forEach(function (m) {
    return Base.prototype[m] = noop;
  });

  mixins.reverse();

  mixins.forEach(function (mixin) {
    return Base = es6ify(mixin)(Base);
  });
  return Base;
};

function upgradeReactProps(klass, mixin) {
  var staticProps = REACT_PROPS.reduce(function (result, prop) {
    klass[prop] = mixin[prop];
    delete mixin[prop];
    return result;
  }, {});
  return klass;
}

function mergeStaticProps(klass, clonedMixin) {
  var superKlass = Object.getPrototypeOf(klass);
  var mixin = clonedMixin || superKlass;
  _Object$keys(mixin).forEach(function (m) {
    if (typeof m !== 'function') {
      klass[m] = _Object$assign(klass[m] || {}, mixin[m]);
    }
  });

  return klass;
}

exports.mergeStaticProps = mergeStaticProps;
exports['default'] = mixin;