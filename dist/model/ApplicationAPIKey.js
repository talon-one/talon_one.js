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
 * The ApplicationAPIKey model module.
 * @module model/ApplicationAPIKey
 * @version 4.0.0
 */
var ApplicationAPIKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationAPIKey</code>.
   * @alias module:model/ApplicationAPIKey
   * @param id {Number} ID of the API Key
   * @param createdBy {Number} ID of user who created
   * @param title {String} Title for API Key
   * @param accountID {Number} ID of account the key is used for
   * @param applicationID {Number} ID of application the key is used for
   * @param created {Date} The date the API key was created
   * @param expires {Date} The date the API key expired
   */
  function ApplicationAPIKey(id, createdBy, title, accountID, applicationID, created, expires) {
    _classCallCheck(this, ApplicationAPIKey);

    ApplicationAPIKey.initialize(this, id, createdBy, title, accountID, applicationID, created, expires);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationAPIKey, null, [{
    key: "initialize",
    value: function initialize(obj, id, createdBy, title, accountID, applicationID, created, expires) {
      obj['id'] = id;
      obj['createdBy'] = createdBy;
      obj['title'] = title;
      obj['accountID'] = accountID;
      obj['applicationID'] = applicationID;
      obj['created'] = created;
      obj['expires'] = expires;
    }
    /**
     * Constructs a <code>ApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationAPIKey} obj Optional instance to populate.
     * @return {module:model/ApplicationAPIKey} The populated <code>ApplicationAPIKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationAPIKey();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('accountID')) {
          obj['accountID'] = _ApiClient["default"].convertToType(data['accountID'], 'Number');
        }

        if (data.hasOwnProperty('applicationID')) {
          obj['applicationID'] = _ApiClient["default"].convertToType(data['applicationID'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('expires')) {
          obj['expires'] = _ApiClient["default"].convertToType(data['expires'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ApplicationAPIKey;
}();
/**
 * ID of the API Key
 * @member {Number} id
 */


ApplicationAPIKey.prototype['id'] = undefined;
/**
 * ID of user who created
 * @member {Number} createdBy
 */

ApplicationAPIKey.prototype['createdBy'] = undefined;
/**
 * Title for API Key
 * @member {String} title
 */

ApplicationAPIKey.prototype['title'] = undefined;
/**
 * ID of account the key is used for
 * @member {Number} accountID
 */

ApplicationAPIKey.prototype['accountID'] = undefined;
/**
 * ID of application the key is used for
 * @member {Number} applicationID
 */

ApplicationAPIKey.prototype['applicationID'] = undefined;
/**
 * The date the API key was created
 * @member {Date} created
 */

ApplicationAPIKey.prototype['created'] = undefined;
/**
 * The date the API key expired
 * @member {Date} expires
 */

ApplicationAPIKey.prototype['expires'] = undefined;
var _default = ApplicationAPIKey;
exports["default"] = _default;