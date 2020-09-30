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
 * The NewEvent model module.
 * @module model/NewEvent
 * @version 4.2.0
 */
var NewEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewEvent</code>.
   * 
   * @alias module:model/NewEvent
   * @param type {String} A string representing the event. Must not be a reserved event name.
   * @param attributes {Object} Arbitrary additional JSON data associated with the event.
   * @param sessionId {String} The ID of the session that this event occurred in.
   */
  function NewEvent(type, attributes, sessionId) {
    _classCallCheck(this, NewEvent);

    NewEvent.initialize(this, type, attributes, sessionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewEvent, null, [{
    key: "initialize",
    value: function initialize(obj, type, attributes, sessionId) {
      obj['type'] = type;
      obj['attributes'] = attributes;
      obj['sessionId'] = sessionId;
    }
    /**
     * Constructs a <code>NewEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewEvent} obj Optional instance to populate.
     * @return {module:model/NewEvent} The populated <code>NewEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewEvent();

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
      }

      return obj;
    }
  }]);

  return NewEvent;
}();
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */


NewEvent.prototype['profileId'] = undefined;
/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */

NewEvent.prototype['type'] = undefined;
/**
 * Arbitrary additional JSON data associated with the event.
 * @member {Object} attributes
 */

NewEvent.prototype['attributes'] = undefined;
/**
 * The ID of the session that this event occurred in.
 * @member {String} sessionId
 */

NewEvent.prototype['sessionId'] = undefined;
var _default = NewEvent;
exports["default"] = _default;