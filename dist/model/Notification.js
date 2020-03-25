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
 * The Notification model module.
 * @module model/Notification
 * @version 4.0.0
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notification</code>.
   * @alias module:model/Notification
   * @param id {Number} id of the notification
   * @param name {String} name of the notification
   * @param description {String} description of the notification
   */
  function Notification(id, name, description) {
    _classCallCheck(this, Notification);

    Notification.initialize(this, id, name, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notification, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, description) {
      obj['id'] = id;
      obj['name'] = name;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notification();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Notification;
}();
/**
 * id of the notification
 * @member {Number} id
 */


Notification.prototype['id'] = undefined;
/**
 * name of the notification
 * @member {String} name
 */

Notification.prototype['name'] = undefined;
/**
 * description of the notification
 * @member {String} description
 */

Notification.prototype['description'] = undefined;
var _default = Notification;
exports["default"] = _default;