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
 * The UpdateCampaign model module.
 * @module model/UpdateCampaign
 * @version 4.2.0
 */
var UpdateCampaign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateCampaign</code>.
   * @alias module:model/UpdateCampaign
   * @param name {String} A friendly name for this campaign.
   * @param tags {Array.<String>} A list of tags for the campaign.
   * @param features {Array.<module:model/UpdateCampaign.FeaturesEnum>} A list of features for the campaign.
   * @param limits {Array.<module:model/LimitConfig>} The set of limits that will operate for this campaign
   */
  function UpdateCampaign(name, tags, features, limits) {
    _classCallCheck(this, UpdateCampaign);

    UpdateCampaign.initialize(this, name, tags, features, limits);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateCampaign, null, [{
    key: "initialize",
    value: function initialize(obj, name, tags, features, limits) {
      obj['name'] = name;
      obj['tags'] = tags;
      obj['features'] = features;
      obj['limits'] = limits;
    }
    /**
     * Constructs a <code>UpdateCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCampaign} obj Optional instance to populate.
     * @return {module:model/UpdateCampaign} The populated <code>UpdateCampaign</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateCampaign();

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

        if (data.hasOwnProperty('campaignGroups')) {
          obj['campaignGroups'] = _ApiClient["default"].convertToType(data['campaignGroups'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return UpdateCampaign;
}();
/**
 * A friendly name for this campaign.
 * @member {String} name
 */


UpdateCampaign.prototype['name'] = undefined;
/**
 * A detailed description of the campaign.
 * @member {String} description
 */

UpdateCampaign.prototype['description'] = undefined;
/**
 * Datetime when the campaign will become active.
 * @member {Date} startTime
 */

UpdateCampaign.prototype['startTime'] = undefined;
/**
 * Datetime when the campaign will become in-active.
 * @member {Date} endTime
 */

UpdateCampaign.prototype['endTime'] = undefined;
/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */

UpdateCampaign.prototype['attributes'] = undefined;
/**
 * A disabled or archived campaign is not evaluated for rules or coupons. 
 * @member {module:model/UpdateCampaign.StateEnum} state
 * @default 'enabled'
 */

UpdateCampaign.prototype['state'] = 'enabled';
/**
 * ID of Ruleset this campaign applies on customer session evaluation.
 * @member {Number} activeRulesetId
 */

UpdateCampaign.prototype['activeRulesetId'] = undefined;
/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */

UpdateCampaign.prototype['tags'] = undefined;
/**
 * A list of features for the campaign.
 * @member {Array.<module:model/UpdateCampaign.FeaturesEnum>} features
 */

UpdateCampaign.prototype['features'] = undefined;
/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */

UpdateCampaign.prototype['couponSettings'] = undefined;
/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */

UpdateCampaign.prototype['referralSettings'] = undefined;
/**
 * The set of limits that will operate for this campaign
 * @member {Array.<module:model/LimitConfig>} limits
 */

UpdateCampaign.prototype['limits'] = undefined;
/**
 * The IDs of the campaign groups that own this entity.
 * @member {Array.<Number>} campaignGroups
 */

UpdateCampaign.prototype['campaignGroups'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

UpdateCampaign['StateEnum'] = {
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

UpdateCampaign['FeaturesEnum'] = {
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
var _default = UpdateCampaign;
exports["default"] = _default;