"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributesSettings = _interopRequireDefault(require("./AttributesSettings"));

var _LimitConfig = _interopRequireDefault(require("./LimitConfig"));

var _LoyaltyProgram = _interopRequireDefault(require("./LoyaltyProgram"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Application model module.
 * @module model/Application
 * @version 4.2.0
 */
var Application = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Application</code>.
   * 
   * @alias module:model/Application
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param name {String} The name of this application.
   * @param timezone {String} A string containing an IANA timezone descriptor.
   * @param currency {String} A string describing a default currency for new customer sessions.
   * @param loyaltyPrograms {Array.<module:model/LoyaltyProgram>} An array containing all the loyalty programs to which this application is subscribed
   */
  function Application(id, created, modified, accountId, name, timezone, currency, loyaltyPrograms) {
    _classCallCheck(this, Application);

    Application.initialize(this, id, created, modified, accountId, name, timezone, currency, loyaltyPrograms);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Application, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, modified, accountId, name, timezone, currency, loyaltyPrograms) {
      obj['id'] = id;
      obj['created'] = created;
      obj['modified'] = modified;
      obj['accountId'] = accountId;
      obj['name'] = name;
      obj['timezone'] = timezone;
      obj['currency'] = currency;
      obj['loyaltyPrograms'] = loyaltyPrograms;
    }
    /**
     * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Application} obj Optional instance to populate.
     * @return {module:model/Application} The populated <code>Application</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Application();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('caseSensitivity')) {
          obj['caseSensitivity'] = _ApiClient["default"].convertToType(data['caseSensitivity'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _ApiClient["default"].convertToType(data['limits'], [_LimitConfig["default"]]);
        }

        if (data.hasOwnProperty('campaignPriority')) {
          obj['campaignPriority'] = _ApiClient["default"].convertToType(data['campaignPriority'], 'String');
        }

        if (data.hasOwnProperty('exclusiveCampaignsStrategy')) {
          obj['exclusiveCampaignsStrategy'] = _ApiClient["default"].convertToType(data['exclusiveCampaignsStrategy'], 'String');
        }

        if (data.hasOwnProperty('enableCascadingDiscounts')) {
          obj['enableCascadingDiscounts'] = _ApiClient["default"].convertToType(data['enableCascadingDiscounts'], 'Boolean');
        }

        if (data.hasOwnProperty('enableFlattenedCartItems')) {
          obj['enableFlattenedCartItems'] = _ApiClient["default"].convertToType(data['enableFlattenedCartItems'], 'Boolean');
        }

        if (data.hasOwnProperty('attributesSettings')) {
          obj['attributesSettings'] = _AttributesSettings["default"].constructFromObject(data['attributesSettings']);
        }

        if (data.hasOwnProperty('sandbox')) {
          obj['sandbox'] = _ApiClient["default"].convertToType(data['sandbox'], 'Boolean');
        }

        if (data.hasOwnProperty('loyaltyPrograms')) {
          obj['loyaltyPrograms'] = _ApiClient["default"].convertToType(data['loyaltyPrograms'], [_LoyaltyProgram["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Application;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Application.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Application.prototype['created'] = undefined;
/**
 * The exact moment this entity was last modified.
 * @member {Date} modified
 */

Application.prototype['modified'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */

Application.prototype['accountId'] = undefined;
/**
 * The name of this application.
 * @member {String} name
 */

Application.prototype['name'] = undefined;
/**
 * A longer description of the application.
 * @member {String} description
 */

Application.prototype['description'] = undefined;
/**
 * A string containing an IANA timezone descriptor.
 * @member {String} timezone
 */

Application.prototype['timezone'] = undefined;
/**
 * A string describing a default currency for new customer sessions.
 * @member {String} currency
 */

Application.prototype['currency'] = undefined;
/**
 * A string indicating how should campaigns in this application deal with case sensitivity on coupon codes.
 * @member {module:model/Application.CaseSensitivityEnum} caseSensitivity
 */

Application.prototype['caseSensitivity'] = undefined;
/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */

Application.prototype['attributes'] = undefined;
/**
 * Default limits for campaigns created in this application
 * @member {Array.<module:model/LimitConfig>} limits
 */

Application.prototype['limits'] = undefined;
/**
 * Default priority for campaigns created in this application, can be one of (universal, stackable, exclusive). If no value is provided, this is set to \"universal\"
 * @member {module:model/Application.CampaignPriorityEnum} campaignPriority
 */

Application.prototype['campaignPriority'] = undefined;
/**
 * The strategy used when choosing exclusive campaigns for evaluation, can be one of (listOrder, lowestDiscount, highestDiscount). If no value is provided, this is set to \"listOrder\"
 * @member {module:model/Application.ExclusiveCampaignsStrategyEnum} exclusiveCampaignsStrategy
 */

Application.prototype['exclusiveCampaignsStrategy'] = undefined;
/**
 * Flag indicating if discounts should cascade for this application
 * @member {Boolean} enableCascadingDiscounts
 */

Application.prototype['enableCascadingDiscounts'] = undefined;
/**
 * Flag indicating if cart items of quantity larger than one should be separated into different items of quantity one
 * @member {Boolean} enableFlattenedCartItems
 */

Application.prototype['enableFlattenedCartItems'] = undefined;
/**
 * @member {module:model/AttributesSettings} attributesSettings
 */

Application.prototype['attributesSettings'] = undefined;
/**
 * Flag indicating if this is a live or sandbox application
 * @member {Boolean} sandbox
 */

Application.prototype['sandbox'] = undefined;
/**
 * An array containing all the loyalty programs to which this application is subscribed
 * @member {Array.<module:model/LoyaltyProgram>} loyaltyPrograms
 */

Application.prototype['loyaltyPrograms'] = undefined;
/**
 * Allowed values for the <code>caseSensitivity</code> property.
 * @enum {String}
 * @readonly
 */

Application['CaseSensitivityEnum'] = {
  /**
   * value: "sensitive"
   * @const
   */
  "sensitive": "sensitive",

  /**
   * value: "insensitive-uppercase"
   * @const
   */
  "insensitive-uppercase": "insensitive-uppercase",

  /**
   * value: "insensitive-lowercase"
   * @const
   */
  "insensitive-lowercase": "insensitive-lowercase"
};
/**
 * Allowed values for the <code>campaignPriority</code> property.
 * @enum {String}
 * @readonly
 */

Application['CampaignPriorityEnum'] = {
  /**
   * value: "universal"
   * @const
   */
  "universal": "universal",

  /**
   * value: "stackable"
   * @const
   */
  "stackable": "stackable",

  /**
   * value: "exclusive"
   * @const
   */
  "exclusive": "exclusive"
};
/**
 * Allowed values for the <code>exclusiveCampaignsStrategy</code> property.
 * @enum {String}
 * @readonly
 */

Application['ExclusiveCampaignsStrategyEnum'] = {
  /**
   * value: "listOrder"
   * @const
   */
  "listOrder": "listOrder",

  /**
   * value: "lowestDiscount"
   * @const
   */
  "lowestDiscount": "lowestDiscount",

  /**
   * value: "highestDiscount"
   * @const
   */
  "highestDiscount": "highestDiscount"
};
var _default = Application;
exports["default"] = _default;