"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeedNotification = _interopRequireDefault(require("./FeedNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserFeedNotifications model module.
 * @module model/UserFeedNotifications
 * @version 4.2.0
 */
var UserFeedNotifications = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserFeedNotifications</code>.
   * notifications to notify CAMA user about
   * @alias module:model/UserFeedNotifications
   * @param lastUpdate {Date} Timestamp of the last request for this list
   * @param notifications {Array.<module:model/FeedNotification>} List of all notifications to notify the user about
   */
  function UserFeedNotifications(lastUpdate, notifications) {
    _classCallCheck(this, UserFeedNotifications);

    UserFeedNotifications.initialize(this, lastUpdate, notifications);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserFeedNotifications, null, [{
    key: "initialize",
    value: function initialize(obj, lastUpdate, notifications) {
      obj['lastUpdate'] = lastUpdate;
      obj['notifications'] = notifications;
    }
    /**
     * Constructs a <code>UserFeedNotifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserFeedNotifications} obj Optional instance to populate.
     * @return {module:model/UserFeedNotifications} The populated <code>UserFeedNotifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserFeedNotifications();

        if (data.hasOwnProperty('lastUpdate')) {
          obj['lastUpdate'] = _ApiClient["default"].convertToType(data['lastUpdate'], 'Date');
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _ApiClient["default"].convertToType(data['notifications'], [_FeedNotification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UserFeedNotifications;
}();
/**
 * Timestamp of the last request for this list
 * @member {Date} lastUpdate
 */


UserFeedNotifications.prototype['lastUpdate'] = undefined;
/**
 * List of all notifications to notify the user about
 * @member {Array.<module:model/FeedNotification>} notifications
 */

UserFeedNotifications.prototype['notifications'] = undefined;
var _default = UserFeedNotifications;
exports["default"] = _default;