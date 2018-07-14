'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeBoolean = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = require('lodash');

var _TypeAny2 = require('./TypeAny');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeBoolean = exports.TypeBoolean = function (_TypeAny) {
  (0, _inherits3.default)(TypeBoolean, _TypeAny);

  // Specifies additional values to be considered as 'truthy'
  function TypeBoolean() {
    (0, _classCallCheck3.default)(this, TypeBoolean);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TypeBoolean.__proto__ || (0, _getPrototypeOf2.default)(TypeBoolean)).call(this, 'boolean'));

    _this._truthyValues = ['true'];
    _this._falsyValues = ['false'];
    _this._insensitive = true;

    _this._getDescription = function () {
      var valideValue = [].concat((0, _toConsumableArray3.default)(_this._truthyValues), (0, _toConsumableArray3.default)(_this._falsyValues));
      return 'It should be a boolean or one of: (' + _utils.utils.joinWithCote(valideValue, ', ') + ').';
    };

    _this._errorMessages[_this._TypeError.INVALIDE_VALUE] = _this._getDescription;
    return _this;
  } // Specifies additional values to be considered as 'falsy'


  (0, _createClass3.default)(TypeBoolean, [{
    key: '_insensitiveArray',
    value: function _insensitiveArray(array) {
      return array.map(function (value) {
        if (typeof value === 'string') {
          return value.toLocaleLowerCase();
        }
        return value;
      });
    }
  }, {
    key: 'truthy',
    value: function truthy() {
      var vals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      this._truthyValues = (0, _lodash.uniq)([].concat((0, _toConsumableArray3.default)(this._truthyValues), (0, _toConsumableArray3.default)((0, _lodash.castArray)(vals))));
      return this;
    }
  }, {
    key: 'falsy',
    value: function falsy() {
      var vals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      this._falsyValues = (0, _lodash.uniq)([].concat((0, _toConsumableArray3.default)(this._falsyValues), (0, _toConsumableArray3.default)((0, _lodash.castArray)(vals))));
      return this;
    }
  }, {
    key: 'insensitive',
    value: function insensitive() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._insensitive = val;
      return this;
    }
  }, {
    key: '_testType',
    value: function _testType() {
      if (!['boolean', 'string', 'number'].includes((0, _typeof3.default)(this._value))) {
        this._setError(this._TypeError.INVALIDE_TYPE);
      }
    }
  }, {
    key: '_test',
    value: function _test() {
      if (typeof this._value !== 'boolean') {
        this._setError(this._TypeError.INVALIDE_VALUE);
      }
    }
  }, {
    key: '_transform',
    value: function _transform() {
      if (this._insensitive) {
        this._falsyValues = this._insensitiveArray(this._falsyValues);
        this._truthyValues = this._insensitiveArray(this._truthyValues);
        if (typeof this._value === 'string') {
          this._value = this._value.toLocaleLowerCase();
        }
      }

      if (this._truthyValues.includes(this._value)) {
        this._value = true;
      } else if (this._falsyValues.includes(this._value)) {
        this._value = false;
      }
    }
  }]);
  return TypeBoolean;
}(_TypeAny2.TypeAny);