"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorSource = _interopRequireDefault(require("./ErrorSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIError model module.
 * @module model/APIError
 * @version 1.0.0
 */
var APIError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIError</code>.
   * @alias module:model/APIError
   * @param title {String} Short description of the problem.
   * @param source {module:model/ErrorSource} 
   */
  function APIError(title, source) {
    _classCallCheck(this, APIError);

    APIError.initialize(this, title, source);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIError, null, [{
    key: "initialize",
    value: function initialize(obj, title, source) {
      obj['title'] = title;
      obj['source'] = source;
    }
    /**
     * Constructs a <code>APIError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIError} obj Optional instance to populate.
     * @return {module:model/APIError} The populated <code>APIError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIError();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ErrorSource["default"].constructFromObject(data['source']);
        }
      }

      return obj;
    }
  }]);

  return APIError;
}();
/**
 * Short description of the problem.
 * @member {String} title
 */


APIError.prototype['title'] = undefined;
/**
 * Longer description of this specific instance of the problem.
 * @member {String} details
 */

APIError.prototype['details'] = undefined;
/**
 * @member {module:model/ErrorSource} source
 */

APIError.prototype['source'] = undefined;
var _default = APIError;
exports["default"] = _default;