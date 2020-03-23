"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TemplateArgDef = _interopRequireDefault(require("./TemplateArgDef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewWebhook model module.
 * @module model/NewWebhook
 * @version 1.0.0
 */
var NewWebhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewWebhook</code>.
   * 
   * @alias module:model/NewWebhook
   * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
   * @param title {String} Friendly title for this webhook
   * @param verb {module:model/NewWebhook.VerbEnum} API method for this webhook
   * @param url {String} API url (supports templating using parameters) for this webhook
   * @param headers {Array.<String>} List of API HTTP headers for this webhook
   * @param params {Array.<module:model/TemplateArgDef>} Array of template argument definitions
   * @param enabled {Boolean} Enables or disables webhook from showing in rule builder
   */
  function NewWebhook(applicationIds, title, verb, url, headers, params, enabled) {
    _classCallCheck(this, NewWebhook);

    NewWebhook.initialize(this, applicationIds, title, verb, url, headers, params, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewWebhook, null, [{
    key: "initialize",
    value: function initialize(obj, applicationIds, title, verb, url, headers, params, enabled) {
      obj['applicationIds'] = applicationIds;
      obj['title'] = title;
      obj['verb'] = verb;
      obj['url'] = url;
      obj['headers'] = headers;
      obj['params'] = params;
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>NewWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewWebhook} obj Optional instance to populate.
     * @return {module:model/NewWebhook} The populated <code>NewWebhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewWebhook();

        if (data.hasOwnProperty('applicationIds')) {
          obj['applicationIds'] = _ApiClient["default"].convertToType(data['applicationIds'], ['Number']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('verb')) {
          obj['verb'] = _ApiClient["default"].convertToType(data['verb'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], ['String']);
        }

        if (data.hasOwnProperty('payload')) {
          obj['payload'] = _ApiClient["default"].convertToType(data['payload'], 'String');
        }

        if (data.hasOwnProperty('params')) {
          obj['params'] = _ApiClient["default"].convertToType(data['params'], [_TemplateArgDef["default"]]);
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return NewWebhook;
}();
/**
 * The IDs of the applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */


NewWebhook.prototype['applicationIds'] = undefined;
/**
 * Friendly title for this webhook
 * @member {String} title
 */

NewWebhook.prototype['title'] = undefined;
/**
 * API method for this webhook
 * @member {module:model/NewWebhook.VerbEnum} verb
 */

NewWebhook.prototype['verb'] = undefined;
/**
 * API url (supports templating using parameters) for this webhook
 * @member {String} url
 */

NewWebhook.prototype['url'] = undefined;
/**
 * List of API HTTP headers for this webhook
 * @member {Array.<String>} headers
 */

NewWebhook.prototype['headers'] = undefined;
/**
 * API payload (supports templating using parameters) for this webhook
 * @member {String} payload
 */

NewWebhook.prototype['payload'] = undefined;
/**
 * Array of template argument definitions
 * @member {Array.<module:model/TemplateArgDef>} params
 */

NewWebhook.prototype['params'] = undefined;
/**
 * Enables or disables webhook from showing in rule builder
 * @member {Boolean} enabled
 */

NewWebhook.prototype['enabled'] = undefined;
/**
 * Allowed values for the <code>verb</code> property.
 * @enum {String}
 * @readonly
 */

NewWebhook['VerbEnum'] = {
  /**
   * value: "POST"
   * @const
   */
  "POST": "POST",

  /**
   * value: "PUT"
   * @const
   */
  "PUT": "PUT",

  /**
   * value: "GET"
   * @const
   */
  "GET": "GET",

  /**
   * value: "DELETE"
   * @const
   */
  "DELETE": "DELETE",

  /**
   * value: "PATCH"
   * @const
   */
  "PATCH": "PATCH"
};
var _default = NewWebhook;
exports["default"] = _default;