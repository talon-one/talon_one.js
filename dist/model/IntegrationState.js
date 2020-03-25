"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Coupon = _interopRequireDefault(require("./Coupon"));

var _CustomerProfile = _interopRequireDefault(require("./CustomerProfile"));

var _CustomerSession = _interopRequireDefault(require("./CustomerSession"));

var _Event = _interopRequireDefault(require("./Event"));

var _Loyalty = _interopRequireDefault(require("./Loyalty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IntegrationState model module.
 * @module model/IntegrationState
 * @version 4.0.0
 */
var IntegrationState = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationState</code>.
   * Contains all state that might interest application integration plugins. This is the response type returned by all of the Integration API operations. 
   * @alias module:model/IntegrationState
   * @param session {module:model/CustomerSession} 
   * @param profile {module:model/CustomerProfile} 
   * @param event {module:model/Event} 
   */
  function IntegrationState(session, profile, event) {
    _classCallCheck(this, IntegrationState);

    IntegrationState.initialize(this, session, profile, event);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationState, null, [{
    key: "initialize",
    value: function initialize(obj, session, profile, event) {
      obj['session'] = session;
      obj['profile'] = profile;
      obj['event'] = event;
    }
    /**
     * Constructs a <code>IntegrationState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationState} obj Optional instance to populate.
     * @return {module:model/IntegrationState} The populated <code>IntegrationState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationState();

        if (data.hasOwnProperty('session')) {
          obj['session'] = _CustomerSession["default"].constructFromObject(data['session']);
        }

        if (data.hasOwnProperty('profile')) {
          obj['profile'] = _CustomerProfile["default"].constructFromObject(data['profile']);
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _Event["default"].constructFromObject(data['event']);
        }

        if (data.hasOwnProperty('loyalty')) {
          obj['loyalty'] = _Loyalty["default"].constructFromObject(data['loyalty']);
        }

        if (data.hasOwnProperty('coupon')) {
          obj['coupon'] = _Coupon["default"].constructFromObject(data['coupon']);
        }
      }

      return obj;
    }
  }]);

  return IntegrationState;
}();
/**
 * @member {module:model/CustomerSession} session
 */


IntegrationState.prototype['session'] = undefined;
/**
 * @member {module:model/CustomerProfile} profile
 */

IntegrationState.prototype['profile'] = undefined;
/**
 * @member {module:model/Event} event
 */

IntegrationState.prototype['event'] = undefined;
/**
 * @member {module:model/Loyalty} loyalty
 */

IntegrationState.prototype['loyalty'] = undefined;
/**
 * @member {module:model/Coupon} coupon
 */

IntegrationState.prototype['coupon'] = undefined;
var _default = IntegrationState;
exports["default"] = _default;