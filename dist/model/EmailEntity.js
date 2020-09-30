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
 * The EmailEntity model module.
 * @module model/EmailEntity
 * @version 4.2.0
 */
var EmailEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailEntity</code>.
   * @alias module:model/EmailEntity
   * @param email {String} The email address associated with your account.
   */
  function EmailEntity(email) {
    _classCallCheck(this, EmailEntity);

    EmailEntity.initialize(this, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailEntity, null, [{
    key: "initialize",
    value: function initialize(obj, email) {
      obj['email'] = email;
    }
    /**
     * Constructs a <code>EmailEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailEntity} obj Optional instance to populate.
     * @return {module:model/EmailEntity} The populated <code>EmailEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailEntity();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailEntity;
}();
/**
 * The email address associated with your account.
 * @member {String} email
 */


EmailEntity.prototype['email'] = undefined;
var _default = EmailEntity;
exports["default"] = _default;