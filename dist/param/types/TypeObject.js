'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeObject = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _TypeAny2 = require('./TypeAny');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeObject = exports.TypeObject = function (_TypeAny) {
  (0, _inherits3.default)(TypeObject, _TypeAny);

  function TypeObject() {
    (0, _classCallCheck3.default)(this, TypeObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TypeObject.__proto__ || (0, _getPrototypeOf2.default)(TypeObject)).call(this, 'object'));

    _this._schema = {};
    _this._errors = {};

    _this._getDescription = function () {
      // TODO
      return 'It should be an object';
    };

    _this._errorMessages[_this._TypeError.INVALIDE_VALUE] = _this._getDescription;
    return _this;
  }

  (0, _createClass3.default)(TypeObject, [{
    key: 'keys',
    value: function keys(object) {
      this._schema = (0, _extends3.default)({}, this._schema, object);
      return this;
    }
  }, {
    key: 'errors',
    value: function errors() {
      return this._errors;
    }
  }, {
    key: '_setError',
    value: function _setError(key, value) {
      var _this2 = this;

      this._errors[key] = value;
      var keys = (0, _keys2.default)(this._errors);
      var errorsStr = keys.map(function (k) {
        return k + ': ' + _this2._errors[k];
      });
      if (errorsStr && keys.length) {
        (0, _get3.default)(TypeObject.prototype.__proto__ || (0, _getPrototypeOf2.default)(TypeObject.prototype), '_setError', this).call(this, this._TypeError.INVALIDE_VALUE);
      }
      this._hasError = true;
      return this._hasError;
    }
  }, {
    key: '_test',
    value: function _test() {
      var oldValue = (0, _extends3.default)({}, this._value);
      this._value = {};

      for (var key in this._schema) {
        var param = this._schema[key];
        param.test(oldValue[key]);
        if (param.error) {
          this._setError(key, param.error);
        } else {
          this._value[key] = param.value;
        }
      }

      return true;
    }
  }]);
  return TypeObject;
}(_TypeAny2.TypeAny);