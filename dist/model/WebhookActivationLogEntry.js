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
 * The WebhookActivationLogEntry model module.
 * @module model/WebhookActivationLogEntry
 * @version 4.2.0
 */
var WebhookActivationLogEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookActivationLogEntry</code>.
   * Log of activated webhooks
   * @alias module:model/WebhookActivationLogEntry
   * @param integrationRequestUuid {String} UUID reference of the integration request that triggered the effect with the webhook
   * @param webhookId {Number} ID of the webhook that triggered the request
   * @param applicationId {Number} ID of the application that triggered the webhook
   * @param campaignId {Number} ID of the campaign that triggered the webhook
   * @param created {Date} Timestamp of request
   */
  function WebhookActivationLogEntry(integrationRequestUuid, webhookId, applicationId, campaignId, created) {
    _classCallCheck(this, WebhookActivationLogEntry);

    WebhookActivationLogEntry.initialize(this, integrationRequestUuid, webhookId, applicationId, campaignId, created);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookActivationLogEntry, null, [{
    key: "initialize",
    value: function initialize(obj, integrationRequestUuid, webhookId, applicationId, campaignId, created) {
      obj['integrationRequestUuid'] = integrationRequestUuid;
      obj['webhookId'] = webhookId;
      obj['applicationId'] = applicationId;
      obj['campaignId'] = campaignId;
      obj['created'] = created;
    }
    /**
     * Constructs a <code>WebhookActivationLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookActivationLogEntry} obj Optional instance to populate.
     * @return {module:model/WebhookActivationLogEntry} The populated <code>WebhookActivationLogEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookActivationLogEntry();

        if (data.hasOwnProperty('integrationRequestUuid')) {
          obj['integrationRequestUuid'] = _ApiClient["default"].convertToType(data['integrationRequestUuid'], 'String');
        }

        if (data.hasOwnProperty('webhookId')) {
          obj['webhookId'] = _ApiClient["default"].convertToType(data['webhookId'], 'Number');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return WebhookActivationLogEntry;
}();
/**
 * UUID reference of the integration request that triggered the effect with the webhook
 * @member {String} integrationRequestUuid
 */


WebhookActivationLogEntry.prototype['integrationRequestUuid'] = undefined;
/**
 * ID of the webhook that triggered the request
 * @member {Number} webhookId
 */

WebhookActivationLogEntry.prototype['webhookId'] = undefined;
/**
 * ID of the application that triggered the webhook
 * @member {Number} applicationId
 */

WebhookActivationLogEntry.prototype['applicationId'] = undefined;
/**
 * ID of the campaign that triggered the webhook
 * @member {Number} campaignId
 */

WebhookActivationLogEntry.prototype['campaignId'] = undefined;
/**
 * Timestamp of request
 * @member {Date} created
 */

WebhookActivationLogEntry.prototype['created'] = undefined;
var _default = WebhookActivationLogEntry;
exports["default"] = _default;