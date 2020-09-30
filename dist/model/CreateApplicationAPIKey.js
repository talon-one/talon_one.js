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
 * The CreateApplicationAPIKey model module.
 * @module model/CreateApplicationAPIKey
 * @version 4.2.0
 */
var CreateApplicationAPIKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateApplicationAPIKey</code>.
   * @alias module:model/CreateApplicationAPIKey
   * @param title {String} Title for API Key
   * @param expires {Date} The date the API key expired
   */
  function CreateApplicationAPIKey(title, expires) {
    _classCallCheck(this, CreateApplicationAPIKey);

    CreateApplicationAPIKey.initialize(this, title, expires);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateApplicationAPIKey, null, [{
    key: "initialize",
    value: function initialize(obj, title, expires) {
      obj['title'] = title;
      obj['expires'] = expires;
    }
    /**
     * Constructs a <code>CreateApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateApplicationAPIKey} obj Optional instance to populate.
     * @return {module:model/CreateApplicationAPIKey} The populated <code>CreateApplicationAPIKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateApplicationAPIKey();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('expires')) {
          obj['expires'] = _ApiClient["default"].convertToType(data['expires'], 'Date');
        }

        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateApplicationAPIKey;
}();
/**
 * Title for API Key
 * @member {String} title
 */


CreateApplicationAPIKey.prototype['title'] = undefined;
/**
 * The date the API key expired
 * @member {Date} expires
 */

CreateApplicationAPIKey.prototype['expires'] = undefined;
/**
 * Platform the API key is valid for.
 * @member {module:model/CreateApplicationAPIKey.PlatformEnum} platform
 */

CreateApplicationAPIKey.prototype['platform'] = undefined;
/**
 * Allowed values for the <code>platform</code> property.
 * @enum {String}
 * @readonly
 */

CreateApplicationAPIKey['PlatformEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "segment"
   * @const
   */
  "segment": "segment",

  /**
   * value: "braze"
   * @const
   */
  "braze": "braze",

  /**
   * value: "mparticle"
   * @const
   */
  "mparticle": "mparticle"
};
var _default = CreateApplicationAPIKey;
exports["default"] = _default;