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
 * The UpdateAccount model module.
 * @module model/UpdateAccount
 * @version 4.2.0
 */
var UpdateAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateAccount</code>.
   * @alias module:model/UpdateAccount
   * @param companyName {String} Name of your company.
   * @param billingEmail {String} The billing email address associated with your company account.
   */
  function UpdateAccount(companyName, billingEmail) {
    _classCallCheck(this, UpdateAccount);

    UpdateAccount.initialize(this, companyName, billingEmail);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateAccount, null, [{
    key: "initialize",
    value: function initialize(obj, companyName, billingEmail) {
      obj['companyName'] = companyName;
      obj['billingEmail'] = billingEmail;
    }
    /**
     * Constructs a <code>UpdateAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAccount} obj Optional instance to populate.
     * @return {module:model/UpdateAccount} The populated <code>UpdateAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateAccount();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }

        if (data.hasOwnProperty('billingEmail')) {
          obj['billingEmail'] = _ApiClient["default"].convertToType(data['billingEmail'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('planExpires')) {
          obj['planExpires'] = _ApiClient["default"].convertToType(data['planExpires'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return UpdateAccount;
}();
/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */


UpdateAccount.prototype['attributes'] = undefined;
/**
 * Name of your company.
 * @member {String} companyName
 */

UpdateAccount.prototype['companyName'] = undefined;
/**
 * The billing email address associated with your company account.
 * @member {String} billingEmail
 */

UpdateAccount.prototype['billingEmail'] = undefined;
/**
 * State of the account (active, deactivated)
 * @member {module:model/UpdateAccount.StateEnum} state
 */

UpdateAccount.prototype['state'] = undefined;
/**
 * The point in time at which your current plan expires.
 * @member {Date} planExpires
 */

UpdateAccount.prototype['planExpires'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

UpdateAccount['StateEnum'] = {
  /**
   * value: "active"
   * @const
   */
  "active": "active",

  /**
   * value: "deactivated"
   * @const
   */
  "deactivated": "deactivated"
};
var _default = UpdateAccount;
exports["default"] = _default;