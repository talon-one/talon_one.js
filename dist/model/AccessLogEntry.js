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
 * The AccessLogEntry model module.
 * @module model/AccessLogEntry
 * @version 4.2.0
 */
var AccessLogEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccessLogEntry</code>.
   * Log of application accesses
   * @alias module:model/AccessLogEntry
   * @param uuid {String} UUID reference of request
   * @param status {Number} HTTP status code of response
   * @param method {String} HTTP method of request
   * @param requestUri {String} target URI of request
   * @param time {Date} timestamp of request
   * @param requestPayload {String} payload of request
   * @param responsePayload {String} payload of response
   */
  function AccessLogEntry(uuid, status, method, requestUri, time, requestPayload, responsePayload) {
    _classCallCheck(this, AccessLogEntry);

    AccessLogEntry.initialize(this, uuid, status, method, requestUri, time, requestPayload, responsePayload);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccessLogEntry, null, [{
    key: "initialize",
    value: function initialize(obj, uuid, status, method, requestUri, time, requestPayload, responsePayload) {
      obj['uuid'] = uuid;
      obj['status'] = status;
      obj['method'] = method;
      obj['requestUri'] = requestUri;
      obj['time'] = time;
      obj['requestPayload'] = requestPayload;
      obj['responsePayload'] = responsePayload;
    }
    /**
     * Constructs a <code>AccessLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessLogEntry} obj Optional instance to populate.
     * @return {module:model/AccessLogEntry} The populated <code>AccessLogEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccessLogEntry();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('requestUri')) {
          obj['requestUri'] = _ApiClient["default"].convertToType(data['requestUri'], 'String');
        }

        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'Date');
        }

        if (data.hasOwnProperty('requestPayload')) {
          obj['requestPayload'] = _ApiClient["default"].convertToType(data['requestPayload'], 'String');
        }

        if (data.hasOwnProperty('responsePayload')) {
          obj['responsePayload'] = _ApiClient["default"].convertToType(data['responsePayload'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccessLogEntry;
}();
/**
 * UUID reference of request
 * @member {String} uuid
 */


AccessLogEntry.prototype['uuid'] = undefined;
/**
 * HTTP status code of response
 * @member {Number} status
 */

AccessLogEntry.prototype['status'] = undefined;
/**
 * HTTP method of request
 * @member {String} method
 */

AccessLogEntry.prototype['method'] = undefined;
/**
 * target URI of request
 * @member {String} requestUri
 */

AccessLogEntry.prototype['requestUri'] = undefined;
/**
 * timestamp of request
 * @member {Date} time
 */

AccessLogEntry.prototype['time'] = undefined;
/**
 * payload of request
 * @member {String} requestPayload
 */

AccessLogEntry.prototype['requestPayload'] = undefined;
/**
 * payload of response
 * @member {String} responsePayload
 */

AccessLogEntry.prototype['responsePayload'] = undefined;
var _default = AccessLogEntry;
exports["default"] = _default;