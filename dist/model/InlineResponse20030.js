"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Role = _interopRequireDefault(require("./Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20030 model module.
 * @module model/InlineResponse20030
 * @version 4.0.0
 */
var InlineResponse20030 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20030</code>.
   * @alias module:model/InlineResponse20030
   * @param totalResultSize {Number} 
   * @param data {Array.<module:model/Role>} 
   */
  function InlineResponse20030(totalResultSize, data) {
    _classCallCheck(this, InlineResponse20030);

    InlineResponse20030.initialize(this, totalResultSize, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20030, null, [{
    key: "initialize",
    value: function initialize(obj, totalResultSize, data) {
      obj['totalResultSize'] = totalResultSize;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>InlineResponse20030</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20030} obj Optional instance to populate.
     * @return {module:model/InlineResponse20030} The populated <code>InlineResponse20030</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20030();

        if (data.hasOwnProperty('totalResultSize')) {
          obj['totalResultSize'] = _ApiClient["default"].convertToType(data['totalResultSize'], 'Number');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Role["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20030;
}();
/**
 * @member {Number} totalResultSize
 */


InlineResponse20030.prototype['totalResultSize'] = undefined;
/**
 * @member {Array.<module:model/Role>} data
 */

InlineResponse20030.prototype['data'] = undefined;
var _default = InlineResponse20030;
exports["default"] = _default;