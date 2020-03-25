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
 * The Session model module.
 * @module model/Session
 * @version 4.0.0
 */
var Session = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Session</code>.
   * @alias module:model/Session
   * @param userId {Number} The ID of the user of this session
   * @param token {String} An opaque session identifier
   * @param created {Date} Unix timestamp indicating when the session was first created.
   */
  function Session(userId, token, created) {
    _classCallCheck(this, Session);

    Session.initialize(this, userId, token, created);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Session, null, [{
    key: "initialize",
    value: function initialize(obj, userId, token, created) {
      obj['userId'] = userId;
      obj['token'] = token;
      obj['created'] = created;
    }
    /**
     * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Session} obj Optional instance to populate.
     * @return {module:model/Session} The populated <code>Session</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Session();

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Session;
}();
/**
 * The ID of the user of this session
 * @member {Number} userId
 */


Session.prototype['userId'] = undefined;
/**
 * An opaque session identifier
 * @member {String} token
 */

Session.prototype['token'] = undefined;
/**
 * Unix timestamp indicating when the session was first created.
 * @member {Date} created
 */

Session.prototype['created'] = undefined;
var _default = Session;
exports["default"] = _default;