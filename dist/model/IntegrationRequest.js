"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewCustomerSessionV = _interopRequireDefault(require("./NewCustomerSessionV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IntegrationRequest model module.
 * @module model/IntegrationRequest
 * @version 4.2.0
 */
var IntegrationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationRequest</code>.
   * The body of a V2 integration API request (customer session update). Next to the customer session details, this contains an optional listing of extra properties that should be returned in the response.
   * @alias module:model/IntegrationRequest
   * @param customerSession {module:model/NewCustomerSessionV2} 
   */
  function IntegrationRequest(customerSession) {
    _classCallCheck(this, IntegrationRequest);

    IntegrationRequest.initialize(this, customerSession);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, customerSession) {
      obj['customerSession'] = customerSession;
    }
    /**
     * Constructs a <code>IntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationRequest} obj Optional instance to populate.
     * @return {module:model/IntegrationRequest} The populated <code>IntegrationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationRequest();

        if (data.hasOwnProperty('customerSession')) {
          obj['customerSession'] = _NewCustomerSessionV["default"].constructFromObject(data['customerSession']);
        }

        if (data.hasOwnProperty('responseContent')) {
          obj['responseContent'] = _ApiClient["default"].convertToType(data['responseContent'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return IntegrationRequest;
}();
/**
 * @member {module:model/NewCustomerSessionV2} customerSession
 */


IntegrationRequest.prototype['customerSession'] = undefined;
/**
 * Optional list of requested information to be present on the response related to the customer session update. Currently supported: \"customerSession\", \"customerProfile\", \"coupons\", \"triggeredCampaigns\", \"referral\", \"loyalty\" and \"event\". 
 * @member {Array.<module:model/IntegrationRequest.ResponseContentEnum>} responseContent
 */

IntegrationRequest.prototype['responseContent'] = undefined;
/**
 * Allowed values for the <code>responseContent</code> property.
 * @enum {String}
 * @readonly
 */

IntegrationRequest['ResponseContentEnum'] = {
  /**
   * value: "customerSession"
   * @const
   */
  "customerSession": "customerSession",

  /**
   * value: "customerProfile"
   * @const
   */
  "customerProfile": "customerProfile",

  /**
   * value: "coupons"
   * @const
   */
  "coupons": "coupons",

  /**
   * value: "triggeredCampaigns"
   * @const
   */
  "triggeredCampaigns": "triggeredCampaigns",

  /**
   * value: "referral"
   * @const
   */
  "referral": "referral",

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
var _default = IntegrationRequest;
exports["default"] = _default;