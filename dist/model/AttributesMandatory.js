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
 * The AttributesMandatory model module.
 * @module model/AttributesMandatory
 * @version 1.0.0
 */
var AttributesMandatory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttributesMandatory</code>.
   * Arbitrary settings associated with attributes.
   * @alias module:model/AttributesMandatory
   */
  function AttributesMandatory() {
    _classCallCheck(this, AttributesMandatory);

    AttributesMandatory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttributesMandatory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttributesMandatory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributesMandatory} obj Optional instance to populate.
     * @return {module:model/AttributesMandatory} The populated <code>AttributesMandatory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttributesMandatory();

        if (data.hasOwnProperty('campaigns')) {
          obj['campaigns'] = _ApiClient["default"].convertToType(data['campaigns'], ['String']);
        }

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return AttributesMandatory;
}();
/**
 * List of mandatory attributes for campaigns.
 * @member {Array.<String>} campaigns
 */


AttributesMandatory.prototype['campaigns'] = undefined;
/**
 * List of mandatory attributes for campaigns.
 * @member {Array.<String>} coupons
 */

AttributesMandatory.prototype['coupons'] = undefined;
var _default = AttributesMandatory;
exports["default"] = _default;