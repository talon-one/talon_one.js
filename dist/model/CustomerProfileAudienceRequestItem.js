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
 * The CustomerProfileAudienceRequestItem model module.
 * @module model/CustomerProfileAudienceRequestItem
 * @version 4.2.0
 */
var CustomerProfileAudienceRequestItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerProfileAudienceRequestItem</code>.
   * @alias module:model/CustomerProfileAudienceRequestItem
   * @param action {module:model/CustomerProfileAudienceRequestItem.ActionEnum} 
   * @param profileIntegrationId {String} 
   * @param audienceId {Number} 
   */
  function CustomerProfileAudienceRequestItem(action, profileIntegrationId, audienceId) {
    _classCallCheck(this, CustomerProfileAudienceRequestItem);

    CustomerProfileAudienceRequestItem.initialize(this, action, profileIntegrationId, audienceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerProfileAudienceRequestItem, null, [{
    key: "initialize",
    value: function initialize(obj, action, profileIntegrationId, audienceId) {
      obj['action'] = action;
      obj['profileIntegrationId'] = profileIntegrationId;
      obj['audienceId'] = audienceId;
    }
    /**
     * Constructs a <code>CustomerProfileAudienceRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfileAudienceRequestItem} obj Optional instance to populate.
     * @return {module:model/CustomerProfileAudienceRequestItem} The populated <code>CustomerProfileAudienceRequestItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerProfileAudienceRequestItem();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('profileIntegrationId')) {
          obj['profileIntegrationId'] = _ApiClient["default"].convertToType(data['profileIntegrationId'], 'String');
        }

        if (data.hasOwnProperty('audienceId')) {
          obj['audienceId'] = _ApiClient["default"].convertToType(data['audienceId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerProfileAudienceRequestItem;
}();
/**
 * @member {module:model/CustomerProfileAudienceRequestItem.ActionEnum} action
 */


CustomerProfileAudienceRequestItem.prototype['action'] = undefined;
/**
 * @member {String} profileIntegrationId
 */

CustomerProfileAudienceRequestItem.prototype['profileIntegrationId'] = undefined;
/**
 * @member {Number} audienceId
 */

CustomerProfileAudienceRequestItem.prototype['audienceId'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

CustomerProfileAudienceRequestItem['ActionEnum'] = {
  /**
   * value: "add"
   * @const
   */
  "add": "add",

  /**
   * value: "delete"
   * @const
   */
  "delete": "delete"
};
var _default = CustomerProfileAudienceRequestItem;
exports["default"] = _default;