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
 * The ShowNotificationEffectProps model module.
 * @module model/ShowNotificationEffectProps
 * @version 4.2.0
 */
var ShowNotificationEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShowNotificationEffectProps</code>.
   * The properties specific to the \&quot;showNotification\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;show notification\&quot; effect.
   * @alias module:model/ShowNotificationEffectProps
   * @param notificationType {String} The type of notification that should be shown (e.g. error/warning/info)
   * @param title {String} Title of the notification
   * @param body {String} Body of the notification
   */
  function ShowNotificationEffectProps(notificationType, title, body) {
    _classCallCheck(this, ShowNotificationEffectProps);

    ShowNotificationEffectProps.initialize(this, notificationType, title, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShowNotificationEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, notificationType, title, body) {
      obj['notificationType'] = notificationType;
      obj['title'] = title;
      obj['body'] = body;
    }
    /**
     * Constructs a <code>ShowNotificationEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowNotificationEffectProps} obj Optional instance to populate.
     * @return {module:model/ShowNotificationEffectProps} The populated <code>ShowNotificationEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShowNotificationEffectProps();

        if (data.hasOwnProperty('notificationType')) {
          obj['notificationType'] = _ApiClient["default"].convertToType(data['notificationType'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ShowNotificationEffectProps;
}();
/**
 * The type of notification that should be shown (e.g. error/warning/info)
 * @member {String} notificationType
 */


ShowNotificationEffectProps.prototype['notificationType'] = undefined;
/**
 * Title of the notification
 * @member {String} title
 */

ShowNotificationEffectProps.prototype['title'] = undefined;
/**
 * Body of the notification
 * @member {String} body
 */

ShowNotificationEffectProps.prototype['body'] = undefined;
var _default = ShowNotificationEffectProps;
exports["default"] = _default;