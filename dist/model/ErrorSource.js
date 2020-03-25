"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErrorSource model module.
 * @module model/ErrorSource
 * @version 4.0.0
 */
var ErrorSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorSource</code>.
   * The source of the current error, exactly one of &#x60;pointer&#x60;, &#x60;parameter&#x60; or &#x60;line&#x60; will be defined. 
   * @alias module:model/ErrorSource
   */
  function ErrorSource() {
    _classCallCheck(this, ErrorSource);

    ErrorSource.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorSource, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorSource} obj Optional instance to populate.
     * @return {module:model/ErrorSource} The populated <code>ErrorSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorSource();

        if (data.hasOwnProperty('pointer')) {
          obj['pointer'] = _ApiClient["default"].convertToType(data['pointer'], 'String');
        }

        if (data.hasOwnProperty('parameter')) {
          obj['parameter'] = _ApiClient["default"].convertToType(data['parameter'], 'String');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'String');
        }

        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ErrorSource;
}();
/**
 * Pointer to the path in the payload that caused this error.
 * @member {String} pointer
 */


ErrorSource.prototype['pointer'] = undefined;
/**
 * Query parameter that caused this error.
 * @member {String} parameter
 */

ErrorSource.prototype['parameter'] = undefined;
/**
 * Line number in uploaded multipart file that caused this error. 'N/A' if unknown.
 * @member {String} line
 */

ErrorSource.prototype['line'] = undefined;
/**
 * Pointer to the resource that caused this error
 * @member {String} resource
 */

ErrorSource.prototype['resource'] = undefined;
var _default = ErrorSource;
exports["default"] = _default;