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
 * The CouponSearch model module.
 * @module model/CouponSearch
 * @version 4.2.0
 */
var CouponSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponSearch</code>.
   * @alias module:model/CouponSearch
   * @param attributes {Object} Properties to match against a coupon. All provided attributes will be exactly matched against attributes
   */
  function CouponSearch(attributes) {
    _classCallCheck(this, CouponSearch);

    CouponSearch.initialize(this, attributes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponSearch, null, [{
    key: "initialize",
    value: function initialize(obj, attributes) {
      obj['attributes'] = attributes;
    }
    /**
     * Constructs a <code>CouponSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponSearch} obj Optional instance to populate.
     * @return {module:model/CouponSearch} The populated <code>CouponSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponSearch();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return CouponSearch;
}();
/**
 * Properties to match against a coupon. All provided attributes will be exactly matched against attributes
 * @member {Object} attributes
 */


CouponSearch.prototype['attributes'] = undefined;
var _default = CouponSearch;
exports["default"] = _default;