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
 * The IntegrationEvent model module.
 * @module model/IntegrationEvent
 * @version 1.0.0
 */
var IntegrationEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationEvent</code>.
   * 
   * @alias module:model/IntegrationEvent
   * @param type {String} A string representing the event. Must not be a reserved event name.
   * @param attributes {Object} Arbitrary additional JSON data associated with the event.
   */
  function IntegrationEvent(type, attributes) {
    _classCallCheck(this, IntegrationEvent);

    IntegrationEvent.initialize(this, type, attributes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationEvent, null, [{
    key: "initialize",
    value: function initialize(obj, type, attributes) {
      obj['type'] = type;
      obj['attributes'] = attributes;
    }
    /**
     * Constructs a <code>IntegrationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationEvent} obj Optional instance to populate.
     * @return {module:model/IntegrationEvent} The populated <code>IntegrationEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationEvent();

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return IntegrationEvent;
}();
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */


IntegrationEvent.prototype['profileId'] = undefined;
/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */

IntegrationEvent.prototype['type'] = undefined;
/**
 * Arbitrary additional JSON data associated with the event.
 * @member {Object} attributes
 */

IntegrationEvent.prototype['attributes'] = undefined;
var _default = IntegrationEvent;
exports["default"] = _default;