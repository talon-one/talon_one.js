"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Coupon = _interopRequireDefault(require("./Coupon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 1.0.0
 */
var InlineResponse2005 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   * @param hasMore {Boolean} 
   * @param data {Array.<module:model/Coupon>} 
   */
  function InlineResponse2005(hasMore, data) {
    _classCallCheck(this, InlineResponse2005);

    InlineResponse2005.initialize(this, hasMore, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2005, null, [{
    key: "initialize",
    value: function initialize(obj, hasMore, data) {
      obj['hasMore'] = hasMore;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2005();

        if (data.hasOwnProperty('hasMore')) {
          obj['hasMore'] = _ApiClient["default"].convertToType(data['hasMore'], 'Boolean');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Coupon["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2005;
}();
/**
 * @member {Boolean} hasMore
 */


InlineResponse2005.prototype['hasMore'] = undefined;
/**
 * @member {Array.<module:model/Coupon>} data
 */

InlineResponse2005.prototype['data'] = undefined;
var _default = InlineResponse2005;
exports["default"] = _default;