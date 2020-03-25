"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CodeGeneratorSettings = _interopRequireDefault(require("./CodeGeneratorSettings"));

var _LimitConfig = _interopRequireDefault(require("./LimitConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 4.0.0
 */
var Campaign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Campaign</code>.
   * 
   * @alias module:model/Campaign
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param userId {Number} The ID of the account that owns this entity.
   * @param name {String} A friendly name for this campaign.
   * @param description {String} A detailed description of the campaign.
   * @param state {module:model/Campaign.StateEnum} A disabled or archived campaign is not evaluated for rules or coupons. 
   * @param tags {Array.<String>} A list of tags for the campaign.
   * @param features {Array.<module:model/Campaign.FeaturesEnum>} A list of features for the campaign.
   * @param limits {Array.<module:model/LimitConfig>} The set of limits that will operate for this campaign
   */
  function Campaign(id, created, applicationId, userId, name, description, state, tags, features, limits) {
    _classCallCheck(this, Campaign);

    Campaign.initialize(this, id, created, applicationId, userId, name, description, state, tags, features, limits);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Campaign, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationId, userId, name, description, state, tags, features, limits) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['userId'] = userId;
      obj['name'] = name;
      obj['description'] = description;
      obj['state'] = state;
      obj['tags'] = tags;
      obj['features'] = features;
      obj['limits'] = limits;
    }
    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Campaign} obj Optional instance to populate.
     * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Campaign();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'Date');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('activeRulesetId')) {
          obj['activeRulesetId'] = _ApiClient["default"].convertToType(data['activeRulesetId'], 'Number');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], ['String']);
        }

        if (data.hasOwnProperty('couponSettings')) {
          obj['couponSettings'] = _CodeGeneratorSettings["default"].constructFromObject(data['couponSettings']);
        }

        if (data.hasOwnProperty('referralSettings')) {
          obj['referralSettings'] = _CodeGeneratorSettings["default"].constructFromObject(data['referralSettings']);
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _ApiClient["default"].convertToType(data['limits'], [_LimitConfig["default"]]);
        }

        if (data.hasOwnProperty('couponRedemptionCount')) {
          obj['couponRedemptionCount'] = _ApiClient["default"].convertToType(data['couponRedemptionCount'], 'Number');
        }

        if (data.hasOwnProperty('referralRedemptionCount')) {
          obj['referralRedemptionCount'] = _ApiClient["default"].convertToType(data['referralRedemptionCount'], 'Number');
        }

        if (data.hasOwnProperty('discountCount')) {
          obj['discountCount'] = _ApiClient["default"].convertToType(data['discountCount'], 'Number');
        }

        if (data.hasOwnProperty('discountEffectCount')) {
          obj['discountEffectCount'] = _ApiClient["default"].convertToType(data['discountEffectCount'], 'Number');
        }

        if (data.hasOwnProperty('couponCreationCount')) {
          obj['couponCreationCount'] = _ApiClient["default"].convertToType(data['couponCreationCount'], 'Number');
        }

        if (data.hasOwnProperty('lastActivity')) {
          obj['lastActivity'] = _ApiClient["default"].convertToType(data['lastActivity'], 'Date');
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Date');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
        }

        if (data.hasOwnProperty('updatedBy')) {
          obj['updatedBy'] = _ApiClient["default"].convertToType(data['updatedBy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Campaign;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Campaign.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Campaign.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

Campaign.prototype['applicationId'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */

Campaign.prototype['userId'] = undefined;
/**
 * A friendly name for this campaign.
 * @member {String} name
 */

Campaign.prototype['name'] = undefined;
/**
 * A detailed description of the campaign.
 * @member {String} description
 */

Campaign.prototype['description'] = undefined;
/**
 * Datetime when the campaign will become active.
 * @member {Date} startTime
 */

Campaign.prototype['startTime'] = undefined;
/**
 * Datetime when the campaign will become in-active.
 * @member {Date} endTime
 */

Campaign.prototype['endTime'] = undefined;
/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */

Campaign.prototype['attributes'] = undefined;
/**
 * A disabled or archived campaign is not evaluated for rules or coupons. 
 * @member {module:model/Campaign.StateEnum} state
 * @default 'enabled'
 */

Campaign.prototype['state'] = 'enabled';
/**
 * ID of Ruleset this campaign applies on customer session evaluation.
 * @member {Number} activeRulesetId
 */

Campaign.prototype['activeRulesetId'] = undefined;
/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */

Campaign.prototype['tags'] = undefined;
/**
 * A list of features for the campaign.
 * @member {Array.<module:model/Campaign.FeaturesEnum>} features
 */

Campaign.prototype['features'] = undefined;
/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */

Campaign.prototype['couponSettings'] = undefined;
/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */

Campaign.prototype['referralSettings'] = undefined;
/**
 * The set of limits that will operate for this campaign
 * @member {Array.<module:model/LimitConfig>} limits
 */

Campaign.prototype['limits'] = undefined;
/**
 * Number of coupons redeemed in the campaign.
 * @member {Number} couponRedemptionCount
 */

Campaign.prototype['couponRedemptionCount'] = undefined;
/**
 * Number of referral codes redeemed in the campaign.
 * @member {Number} referralRedemptionCount
 */

Campaign.prototype['referralRedemptionCount'] = undefined;
/**
 * Total amount of discounts redeemed in the campaign.
 * @member {Number} discountCount
 */

Campaign.prototype['discountCount'] = undefined;
/**
 * Total number of times discounts were redeemed in this campaign.
 * @member {Number} discountEffectCount
 */

Campaign.prototype['discountEffectCount'] = undefined;
/**
 * Total number of coupons created by rules in this campaign.
 * @member {Number} couponCreationCount
 */

Campaign.prototype['couponCreationCount'] = undefined;
/**
 * Timestamp of the most recent event received by this campaign.
 * @member {Date} lastActivity
 */

Campaign.prototype['lastActivity'] = undefined;
/**
 * Timestamp of the most recent update to the campaign or any of its elements.
 * @member {Date} updated
 */

Campaign.prototype['updated'] = undefined;
/**
 * Name of the user who created this campaign if available.
 * @member {String} createdBy
 */

Campaign.prototype['createdBy'] = undefined;
/**
 * Name of the user who last updated this campaign if available.
 * @member {String} updatedBy
 */

Campaign.prototype['updatedBy'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

Campaign['StateEnum'] = {
  /**
   * value: "enabled"
   * @const
   */
  "enabled": "enabled",

  /**
   * value: "disabled"
   * @const
   */
  "disabled": "disabled",

  /**
   * value: "archived"
   * @const
   */
  "archived": "archived"
};
/**
 * Allowed values for the <code>features</code> property.
 * @enum {String}
 * @readonly
 */

Campaign['FeaturesEnum'] = {
  /**
   * value: "coupons"
   * @const
   */
  "coupons": "coupons",

  /**
   * value: "referrals"
   * @const
   */
  "referrals": "referrals",

  /**
   * value: "loyalty"
   * @const
   */
  "loyalty": "loyalty"
};
var _default = Campaign;
exports["default"] = _default;