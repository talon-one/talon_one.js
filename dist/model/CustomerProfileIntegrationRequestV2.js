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
 * The CustomerProfileIntegrationRequestV2 model module.
 * @module model/CustomerProfileIntegrationRequestV2
 * @version 4.2.0
 */
var CustomerProfileIntegrationRequestV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerProfileIntegrationRequestV2</code>.
   * 
   * @alias module:model/CustomerProfileIntegrationRequestV2
   */
  function CustomerProfileIntegrationRequestV2() {
    _classCallCheck(this, CustomerProfileIntegrationRequestV2);

    CustomerProfileIntegrationRequestV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerProfileIntegrationRequestV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerProfileIntegrationRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfileIntegrationRequestV2} obj Optional instance to populate.
     * @return {module:model/CustomerProfileIntegrationRequestV2} The populated <code>CustomerProfileIntegrationRequestV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerProfileIntegrationRequestV2();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('responseContent')) {
          obj['responseContent'] = _ApiClient["default"].convertToType(data['responseContent'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CustomerProfileIntegrationRequestV2;
}();
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */


CustomerProfileIntegrationRequestV2.prototype['attributes'] = undefined;
/**
 * Optional list of requested information to be present on the response related to the customer profile update. Currently supported: \"customerProfile\", \"triggeredCampaigns\", \"loyalty\" and \"event\". 
 * @member {Array.<module:model/CustomerProfileIntegrationRequestV2.ResponseContentEnum>} responseContent
 */

CustomerProfileIntegrationRequestV2.prototype['responseContent'] = undefined;
/**
 * Allowed values for the <code>responseContent</code> property.
 * @enum {String}
 * @readonly
 */

CustomerProfileIntegrationRequestV2['ResponseContentEnum'] = {
  /**
   * value: "customerProfile"
   * @const
   */
  "customerProfile": "customerProfile",

  /**
   * value: "triggeredCampaigns"
   * @const
   */
  "triggeredCampaigns": "triggeredCampaigns",

  /**
   * value: "loyalty"
   * @const
   */
  "loyalty": "loyalty",

  /**
   * value: "event"
   * @const
   */
  "event": "event"
};
var _default = CustomerProfileIntegrationRequestV2;
exports["default"] = _default;