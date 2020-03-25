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
 * The AccountAdditionalCost model module.
 * @module model/AccountAdditionalCost
 * @version 4.0.0
 */
var AccountAdditionalCost = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountAdditionalCost</code>.
   * 
   * @alias module:model/AccountAdditionalCost
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param name {String} The additional cost name that will be used in API requests and Talang. E.g. if `name == \"shipping\"` then you would set the shipping additional cost by including an `additionalCosts.shipping` property in your request payload.
   * @param title {String} The human-readable name for the additional cost that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
   * @param description {String} A description of this additional cost.
   */
  function AccountAdditionalCost(id, created, accountId, name, title, description) {
    _classCallCheck(this, AccountAdditionalCost);

    AccountAdditionalCost.initialize(this, id, created, accountId, name, title, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountAdditionalCost, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, accountId, name, title, description) {
      obj['id'] = id;
      obj['created'] = created;
      obj['accountId'] = accountId;
      obj['name'] = name;
      obj['title'] = title;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>AccountAdditionalCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAdditionalCost} obj Optional instance to populate.
     * @return {module:model/AccountAdditionalCost} The populated <code>AccountAdditionalCost</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountAdditionalCost();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('subscribedApplicationsIds')) {
          obj['subscribedApplicationsIds'] = _ApiClient["default"].convertToType(data['subscribedApplicationsIds'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return AccountAdditionalCost;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


AccountAdditionalCost.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

AccountAdditionalCost.prototype['created'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */

AccountAdditionalCost.prototype['accountId'] = undefined;
/**
 * The additional cost name that will be used in API requests and Talang. E.g. if `name == \"shipping\"` then you would set the shipping additional cost by including an `additionalCosts.shipping` property in your request payload.
 * @member {String} name
 */

AccountAdditionalCost.prototype['name'] = undefined;
/**
 * The human-readable name for the additional cost that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
 * @member {String} title
 */

AccountAdditionalCost.prototype['title'] = undefined;
/**
 * A description of this additional cost.
 * @member {String} description
 */

AccountAdditionalCost.prototype['description'] = undefined;
/**
 * A list of the IDs of the applications that are subscribed to this additional cost
 * @member {Array.<Number>} subscribedApplicationsIds
 */

AccountAdditionalCost.prototype['subscribedApplicationsIds'] = undefined;
var _default = AccountAdditionalCost;
exports["default"] = _default;