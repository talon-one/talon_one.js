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
 * The Account model module.
 * @module model/Account
 * @version 1.0.0
 */
var Account = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Account</code>.
   * 
   * @alias module:model/Account
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param companyName {String} 
   * @param domainName {String} Subdomain Name for yourcompany.talon.one
   * @param state {module:model/Account.StateEnum} State of the account (active, deactivated)
   * @param billingEmail {String} The billing email address associated with your company account.
   * @param applicationCount {Number} The current number of Applications in your account.
   * @param userCount {Number} The current number of Campaign Manager Users in your account.
   * @param campaignsActiveCount {Number} The current number of active Campaigns in your account.
   * @param campaignsInactiveCount {Number} The current number of inactive Campaigns in your account.
   */
  function Account(id, created, modified, companyName, domainName, state, billingEmail, applicationCount, userCount, campaignsActiveCount, campaignsInactiveCount) {
    _classCallCheck(this, Account);

    Account.initialize(this, id, created, modified, companyName, domainName, state, billingEmail, applicationCount, userCount, campaignsActiveCount, campaignsInactiveCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Account, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, modified, companyName, domainName, state, billingEmail, applicationCount, userCount, campaignsActiveCount, campaignsInactiveCount) {
      obj['id'] = id;
      obj['created'] = created;
      obj['modified'] = modified;
      obj['companyName'] = companyName;
      obj['domainName'] = domainName;
      obj['state'] = state;
      obj['billingEmail'] = billingEmail;
      obj['applicationCount'] = applicationCount;
      obj['userCount'] = userCount;
      obj['campaignsActiveCount'] = campaignsActiveCount;
      obj['campaignsInactiveCount'] = campaignsInactiveCount;
    }
    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Account} obj Optional instance to populate.
     * @return {module:model/Account} The populated <code>Account</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Account();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }

        if (data.hasOwnProperty('domainName')) {
          obj['domainName'] = _ApiClient["default"].convertToType(data['domainName'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('billingEmail')) {
          obj['billingEmail'] = _ApiClient["default"].convertToType(data['billingEmail'], 'String');
        }

        if (data.hasOwnProperty('planName')) {
          obj['planName'] = _ApiClient["default"].convertToType(data['planName'], 'String');
        }

        if (data.hasOwnProperty('planExpires')) {
          obj['planExpires'] = _ApiClient["default"].convertToType(data['planExpires'], 'Date');
        }

        if (data.hasOwnProperty('applicationLimit')) {
          obj['applicationLimit'] = _ApiClient["default"].convertToType(data['applicationLimit'], 'Number');
        }

        if (data.hasOwnProperty('userLimit')) {
          obj['userLimit'] = _ApiClient["default"].convertToType(data['userLimit'], 'Number');
        }

        if (data.hasOwnProperty('campaignLimit')) {
          obj['campaignLimit'] = _ApiClient["default"].convertToType(data['campaignLimit'], 'Number');
        }

        if (data.hasOwnProperty('apiLimit')) {
          obj['apiLimit'] = _ApiClient["default"].convertToType(data['apiLimit'], 'Number');
        }

        if (data.hasOwnProperty('applicationCount')) {
          obj['applicationCount'] = _ApiClient["default"].convertToType(data['applicationCount'], 'Number');
        }

        if (data.hasOwnProperty('userCount')) {
          obj['userCount'] = _ApiClient["default"].convertToType(data['userCount'], 'Number');
        }

        if (data.hasOwnProperty('campaignsActiveCount')) {
          obj['campaignsActiveCount'] = _ApiClient["default"].convertToType(data['campaignsActiveCount'], 'Number');
        }

        if (data.hasOwnProperty('campaignsInactiveCount')) {
          obj['campaignsInactiveCount'] = _ApiClient["default"].convertToType(data['campaignsInactiveCount'], 'Number');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return Account;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Account.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Account.prototype['created'] = undefined;
/**
 * The exact moment this entity was last modified.
 * @member {Date} modified
 */

Account.prototype['modified'] = undefined;
/**
 * @member {String} companyName
 */

Account.prototype['companyName'] = undefined;
/**
 * Subdomain Name for yourcompany.talon.one
 * @member {String} domainName
 */

Account.prototype['domainName'] = undefined;
/**
 * State of the account (active, deactivated)
 * @member {module:model/Account.StateEnum} state
 */

Account.prototype['state'] = undefined;
/**
 * The billing email address associated with your company account.
 * @member {String} billingEmail
 */

Account.prototype['billingEmail'] = undefined;
/**
 * The name of your booked plan.
 * @member {String} planName
 */

Account.prototype['planName'] = undefined;
/**
 * The point in time at which your current plan expires.
 * @member {Date} planExpires
 */

Account.prototype['planExpires'] = undefined;
/**
 * The maximum number of Applications covered by your plan.
 * @member {Number} applicationLimit
 */

Account.prototype['applicationLimit'] = undefined;
/**
 * The maximum number of Campaign Manager Users covered by your plan.
 * @member {Number} userLimit
 */

Account.prototype['userLimit'] = undefined;
/**
 * The maximum number of Campaigns covered by your plan.
 * @member {Number} campaignLimit
 */

Account.prototype['campaignLimit'] = undefined;
/**
 * The maximum number of Integration API calls covered by your plan per billing period.
 * @member {Number} apiLimit
 */

Account.prototype['apiLimit'] = undefined;
/**
 * The current number of Applications in your account.
 * @member {Number} applicationCount
 */

Account.prototype['applicationCount'] = undefined;
/**
 * The current number of Campaign Manager Users in your account.
 * @member {Number} userCount
 */

Account.prototype['userCount'] = undefined;
/**
 * The current number of active Campaigns in your account.
 * @member {Number} campaignsActiveCount
 */

Account.prototype['campaignsActiveCount'] = undefined;
/**
 * The current number of inactive Campaigns in your account.
 * @member {Number} campaignsInactiveCount
 */

Account.prototype['campaignsInactiveCount'] = undefined;
/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */

Account.prototype['attributes'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

Account['StateEnum'] = {
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
var _default = Account;
exports["default"] = _default;