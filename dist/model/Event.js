"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LedgerEntry = _interopRequireDefault(require("./LedgerEntry"));

var _Meta = _interopRequireDefault(require("./Meta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Event model module.
 * @module model/Event
 * @version 4.2.0
 */
var Event = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Event</code>.
   * 
   * @alias module:model/Event
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param type {String} A string representing the event. Must not be a reserved event name.
   * @param attributes {Object} Arbitrary additional JSON data associated with the event.
   * @param effects {Array.<Object>} An array of \"effects\" that must be applied in response to this event. Example effects include `addItemToCart` or `setDiscount`. 
   * @param ledgerEntries {Array.<module:model/LedgerEntry>} Ledger entries for the event.
   */
  function Event(id, created, applicationId, type, attributes, effects, ledgerEntries) {
    _classCallCheck(this, Event);

    Event.initialize(this, id, created, applicationId, type, attributes, effects, ledgerEntries);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Event, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationId, type, attributes, effects, ledgerEntries) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['type'] = type;
      obj['attributes'] = attributes;
      obj['effects'] = effects;
      obj['ledgerEntries'] = ledgerEntries;
    }
    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Event();

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
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('sessionId')) {
          obj['sessionId'] = _ApiClient["default"].convertToType(data['sessionId'], 'String');
        }

        if (data.hasOwnProperty('effects')) {
          obj['effects'] = _ApiClient["default"].convertToType(data['effects'], [Object]);
        }

        if (data.hasOwnProperty('ledgerEntries')) {
          obj['ledgerEntries'] = _ApiClient["default"].convertToType(data['ledgerEntries'], [_LedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Meta["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return Event;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Event.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Event.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

Event.prototype['applicationId'] = undefined;
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */

Event.prototype['profileId'] = undefined;
/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */

Event.prototype['type'] = undefined;
/**
 * Arbitrary additional JSON data associated with the event.
 * @member {Object} attributes
 */

Event.prototype['attributes'] = undefined;
/**
 * The ID of the session that this event occurred in.
 * @member {String} sessionId
 */

Event.prototype['sessionId'] = undefined;
/**
 * An array of \"effects\" that must be applied in response to this event. Example effects include `addItemToCart` or `setDiscount`. 
 * @member {Array.<Object>} effects
 */

Event.prototype['effects'] = undefined;
/**
 * Ledger entries for the event.
 * @member {Array.<module:model/LedgerEntry>} ledgerEntries
 */

Event.prototype['ledgerEntries'] = undefined;
/**
 * @member {module:model/Meta} meta
 */

Event.prototype['meta'] = undefined;
var _default = Event;
exports["default"] = _default;