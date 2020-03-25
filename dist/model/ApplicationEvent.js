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
 * The ApplicationEvent model module.
 * @module model/ApplicationEvent
 * @version 4.0.0
 */
var ApplicationEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationEvent</code>.
   * 
   * @alias module:model/ApplicationEvent
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param type {String} A string representing the event. Must not be a reserved event name.
   * @param attributes {Object} Additional JSON serialized data associated with the event.
   * @param effects {Array.<Object>} An array containing the effects that were applied as a result of this event.
   */
  function ApplicationEvent(id, created, applicationId, type, attributes, effects) {
    _classCallCheck(this, ApplicationEvent);

    ApplicationEvent.initialize(this, id, created, applicationId, type, attributes, effects);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationEvent, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationId, type, attributes, effects) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['type'] = type;
      obj['attributes'] = attributes;
      obj['effects'] = effects;
    }
    /**
     * Constructs a <code>ApplicationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationEvent} obj Optional instance to populate.
     * @return {module:model/ApplicationEvent} The populated <code>ApplicationEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationEvent();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'Number');
        }

        if (data.hasOwnProperty('sessionId')) {
          obj['sessionId'] = _ApiClient["default"].convertToType(data['sessionId'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('effects')) {
          obj['effects'] = _ApiClient["default"].convertToType(data['effects'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return ApplicationEvent;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


ApplicationEvent.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

ApplicationEvent.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

ApplicationEvent.prototype['applicationId'] = undefined;
/**
 * The globally unique Talon.One ID of the customer that created this entity.
 * @member {Number} profileId
 */

ApplicationEvent.prototype['profileId'] = undefined;
/**
 * The globally unique Talon.One ID of the session that contains this event.
 * @member {Number} sessionId
 */

ApplicationEvent.prototype['sessionId'] = undefined;
/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */

ApplicationEvent.prototype['type'] = undefined;
/**
 * Additional JSON serialized data associated with the event.
 * @member {Object} attributes
 */

ApplicationEvent.prototype['attributes'] = undefined;
/**
 * An array containing the effects that were applied as a result of this event.
 * @member {Array.<Object>} effects
 */

ApplicationEvent.prototype['effects'] = undefined;
var _default = ApplicationEvent;
exports["default"] = _default;