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
 * The Webhook model module.
 * @module model/Webhook
 * @version 4.0.0
 */
var Webhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Webhook</code>.
   * 
   * @alias module:model/Webhook
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity. The IDs of the applications that are related to this entity.
   * @param title {String} Friendly title for this webhook
   * @param verb {module:model/Webhook.VerbEnum} API method for this webhook
   * @param url {String} API url (supports templating using parameters) for this webhook
   * @param headers {Array.<String>} List of API HTTP headers for this webhook
   * @param params {Array.<module:model/TemplateArgDef>} Array of template argument definitions
   * @param enabled {Boolean} Enables or disables webhook from showing in rule builder
   */
  function Webhook(id, created, modified, applicationIds, title, verb, url, headers, params, enabled) {
    _classCallCheck(this, Webhook);

    Webhook.initialize(this, id, created, modified, applicationIds, title, verb, url, headers, params, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Webhook, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, modified, applicationIds, title, verb, url, headers, params, enabled) {
      obj['id'] = id;
      obj['created'] = created;
      obj['modified'] = modified;
      obj['applicationIds'] = applicationIds;
      obj['title'] = title;
      obj['verb'] = verb;
      obj['url'] = url;
      obj['headers'] = headers;
      obj['params'] = params;
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Webhook();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }

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

  return Webhook;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Webhook.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Webhook.prototype['created'] = undefined;
/**
 * The exact moment this entity was last modified.
 * @member {Date} modified
 */

Webhook.prototype['modified'] = undefined;
/**
 * The IDs of the applications that are related to this entity. The IDs of the applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */

Webhook.prototype['applicationIds'] = undefined;
/**
 * Friendly title for this webhook
 * @member {String} title
 */

Webhook.prototype['title'] = undefined;
/**
 * API method for this webhook
 * @member {module:model/Webhook.VerbEnum} verb
 */

Webhook.prototype['verb'] = undefined;
/**
 * API url (supports templating using parameters) for this webhook
 * @member {String} url
 */

Webhook.prototype['url'] = undefined;
/**
 * List of API HTTP headers for this webhook
 * @member {Array.<String>} headers
 */

Webhook.prototype['headers'] = undefined;
/**
 * API payload (supports templating using parameters) for this webhook
 * @member {String} payload
 */

Webhook.prototype['payload'] = undefined;
/**
 * Array of template argument definitions
 * @member {Array.<module:model/TemplateArgDef>} params
 */

Webhook.prototype['params'] = undefined;
/**
 * Enables or disables webhook from showing in rule builder
 * @member {Boolean} enabled
 */

Webhook.prototype['enabled'] = undefined;
/**
 * Allowed values for the <code>verb</code> property.
 * @enum {String}
 * @readonly
 */

Webhook['VerbEnum'] = {
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
var _default = Webhook;
exports["default"] = _default;