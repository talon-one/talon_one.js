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
 * The WebhookLogEntry model module.
 * @module model/WebhookLogEntry
 * @version 1.0.0
 */
var WebhookLogEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookLogEntry</code>.
   * Log of webhook api calls
   * @alias module:model/WebhookLogEntry
   * @param id {String} UUID reference of the webhook request
   * @param integrationRequestUuid {String} UUID reference of the integration request linked to this webhook request
   * @param webhookId {Number} ID of the webhook that triggered the request
   * @param url {String} Target url of request
   * @param request {String} Request message
   * @param requestTime {Date} Timestamp of request
   */
  function WebhookLogEntry(id, integrationRequestUuid, webhookId, url, request, requestTime) {
    _classCallCheck(this, WebhookLogEntry);

    WebhookLogEntry.initialize(this, id, integrationRequestUuid, webhookId, url, request, requestTime);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookLogEntry, null, [{
    key: "initialize",
    value: function initialize(obj, id, integrationRequestUuid, webhookId, url, request, requestTime) {
      obj['id'] = id;
      obj['integrationRequestUuid'] = integrationRequestUuid;
      obj['webhookId'] = webhookId;
      obj['url'] = url;
      obj['request'] = request;
      obj['requestTime'] = requestTime;
    }
    /**
     * Constructs a <code>WebhookLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookLogEntry} obj Optional instance to populate.
     * @return {module:model/WebhookLogEntry} The populated <code>WebhookLogEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookLogEntry();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('integrationRequestUuid')) {
          obj['integrationRequestUuid'] = _ApiClient["default"].convertToType(data['integrationRequestUuid'], 'String');
        }

        if (data.hasOwnProperty('webhookId')) {
          obj['webhookId'] = _ApiClient["default"].convertToType(data['webhookId'], 'Number');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _ApiClient["default"].convertToType(data['request'], 'String');
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('requestTime')) {
          obj['requestTime'] = _ApiClient["default"].convertToType(data['requestTime'], 'Date');
        }

        if (data.hasOwnProperty('responseTime')) {
          obj['responseTime'] = _ApiClient["default"].convertToType(data['responseTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return WebhookLogEntry;
}();
/**
 * UUID reference of the webhook request
 * @member {String} id
 */


WebhookLogEntry.prototype['id'] = undefined;
/**
 * UUID reference of the integration request linked to this webhook request
 * @member {String} integrationRequestUuid
 */

WebhookLogEntry.prototype['integrationRequestUuid'] = undefined;
/**
 * ID of the webhook that triggered the request
 * @member {Number} webhookId
 */

WebhookLogEntry.prototype['webhookId'] = undefined;
/**
 * ID of the application that triggered the webhook
 * @member {Number} applicationId
 */

WebhookLogEntry.prototype['applicationId'] = undefined;
/**
 * Target url of request
 * @member {String} url
 */

WebhookLogEntry.prototype['url'] = undefined;
/**
 * Request message
 * @member {String} request
 */

WebhookLogEntry.prototype['request'] = undefined;
/**
 * Response message
 * @member {String} response
 */

WebhookLogEntry.prototype['response'] = undefined;
/**
 * HTTP status code of response
 * @member {Number} status
 */

WebhookLogEntry.prototype['status'] = undefined;
/**
 * Timestamp of request
 * @member {Date} requestTime
 */

WebhookLogEntry.prototype['requestTime'] = undefined;
/**
 * Timestamp of response
 * @member {Date} responseTime
 */

WebhookLogEntry.prototype['responseTime'] = undefined;
var _default = WebhookLogEntry;
exports["default"] = _default;