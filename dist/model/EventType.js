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
 * The EventType model module.
 * @module model/EventType
 * @version 4.2.0
 */
var EventType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventType</code>.
   * 
   * @alias module:model/EventType
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
   * @param title {String} The human-friendly display name for this event type. Use a short, past-tense, description of the event.
   * @param name {String} The machine-friendly canonical name for this event type. This will be used in URLs, and cannot be changed after an event type has been created.
   * @param description {String} An explanation of when the event type is triggered. Write this with a campaign manager in mind. For example:  > The \"Payment Accepted\" event is triggered after successful processing of a payment by our payment gateway. 
   * @param mimeType {module:model/EventType.MimeTypeEnum} This defines how the request payload will be parsed before your handler code is run.
   * @param handler {String} Code that will be run after successful parsing & validation of the payload for this event. This code _may_ choose to evaluate campaign rules. 
   * @param version {Number} The version of this event type. When updating an existing event type this must be **exactly** `currentVersion + 1`. 
   */
  function EventType(id, created, applicationIds, title, name, description, mimeType, handler, version) {
    _classCallCheck(this, EventType);

    EventType.initialize(this, id, created, applicationIds, title, name, description, mimeType, handler, version);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventType, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationIds, title, name, description, mimeType, handler, version) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationIds'] = applicationIds;
      obj['title'] = title;
      obj['name'] = name;
      obj['description'] = description;
      obj['mimeType'] = mimeType;
      obj['handler'] = handler;
      obj['version'] = version;
    }
    /**
     * Constructs a <code>EventType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventType} obj Optional instance to populate.
     * @return {module:model/EventType} The populated <code>EventType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventType();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationIds')) {
          obj['applicationIds'] = _ApiClient["default"].convertToType(data['applicationIds'], ['Number']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }

        if (data.hasOwnProperty('examplePayload')) {
          obj['examplePayload'] = _ApiClient["default"].convertToType(data['examplePayload'], 'String');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], Object);
        }

        if (data.hasOwnProperty('handlerLanguage')) {
          obj['handlerLanguage'] = _ApiClient["default"].convertToType(data['handlerLanguage'], 'String');
        }

        if (data.hasOwnProperty('handler')) {
          obj['handler'] = _ApiClient["default"].convertToType(data['handler'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EventType;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


EventType.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

EventType.prototype['created'] = undefined;
/**
 * The IDs of the applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */

EventType.prototype['applicationIds'] = undefined;
/**
 * The human-friendly display name for this event type. Use a short, past-tense, description of the event.
 * @member {String} title
 */

EventType.prototype['title'] = undefined;
/**
 * The machine-friendly canonical name for this event type. This will be used in URLs, and cannot be changed after an event type has been created.
 * @member {String} name
 */

EventType.prototype['name'] = undefined;
/**
 * An explanation of when the event type is triggered. Write this with a campaign manager in mind. For example:  > The \"Payment Accepted\" event is triggered after successful processing of a payment by our payment gateway. 
 * @member {String} description
 */

EventType.prototype['description'] = undefined;
/**
 * This defines how the request payload will be parsed before your handler code is run.
 * @member {module:model/EventType.MimeTypeEnum} mimeType
 */

EventType.prototype['mimeType'] = undefined;
/**
 * It is often helpful to include an example payload with the event type definition for documentation purposes.
 * @member {String} examplePayload
 */

EventType.prototype['examplePayload'] = undefined;
/**
 * It is strongly recommended to define a JSON schema that will be used to perform structural validation of request payloads after parsing. 
 * @member {Object} schema
 */

EventType.prototype['schema'] = undefined;
/**
 * The language of the handler code. Currently only `\"talang\"` is supported.
 * @member {module:model/EventType.HandlerLanguageEnum} handlerLanguage
 */

EventType.prototype['handlerLanguage'] = undefined;
/**
 * Code that will be run after successful parsing & validation of the payload for this event. This code _may_ choose to evaluate campaign rules. 
 * @member {String} handler
 */

EventType.prototype['handler'] = undefined;
/**
 * The version of this event type. When updating an existing event type this must be **exactly** `currentVersion + 1`. 
 * @member {Number} version
 */

EventType.prototype['version'] = undefined;
/**
 * Allowed values for the <code>mimeType</code> property.
 * @enum {String}
 * @readonly
 */

EventType['MimeTypeEnum'] = {
  /**
   * value: "application/json"
   * @const
   */
  "application/json": "application/json",

  /**
   * value: "application/x-www-form-urlencoded"
   * @const
   */
  "application/x-www-form-urlencoded": "application/x-www-form-urlencoded",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
/**
 * Allowed values for the <code>handlerLanguage</code> property.
 * @enum {String}
 * @readonly
 */

EventType['HandlerLanguageEnum'] = {
  /**
   * value: "talang"
   * @const
   */
  "talang": "talang"
};
var _default = EventType;
exports["default"] = _default;