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
 * The NewCampaign model module.
 * @module model/NewCampaign
 * @version 1.0.0
 */
var NewCampaign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewCampaign</code>.
   * @alias module:model/NewCampaign
   * @param name {String} A friendly name for this campaign.
   * @param state {module:model/NewCampaign.StateEnum} A disabled or archived campaign is not evaluated for rules or coupons. 
   * @param tags {Array.<String>} A list of tags for the campaign.
   * @param features {Array.<module:model/NewCampaign.FeaturesEnum>} A list of features for the campaign.
   * @param limits {Array.<module:model/LimitConfig>} The set of limits that will operate for this campaign
   */
  function NewCampaign(name, state, tags, features, limits) {
    _classCallCheck(this, NewCampaign);

    NewCampaign.initialize(this, name, state, tags, features, limits);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewCampaign, null, [{
    key: "initialize",
    value: function initialize(obj, name, state, tags, features, limits) {
      obj['name'] = name;
      obj['state'] = state;
      obj['tags'] = tags;
      obj['features'] = features;
      obj['limits'] = limits;
    }
    /**
     * Constructs a <code>NewCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaign} obj Optional instance to populate.
     * @return {module:model/NewCampaign} The populated <code>NewCampaign</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewCampaign();

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
      }

      return obj;
    }
  }]);

  return NewCampaign;
}();
/**
 * A friendly name for this campaign.
 * @member {String} name
 */


NewCampaign.prototype['name'] = undefined;
/**
 * A detailed description of the campaign.
 * @member {String} description
 */

NewCampaign.prototype['description'] = undefined;
/**
 * Datetime when the campaign will become active.
 * @member {Date} startTime
 */

NewCampaign.prototype['startTime'] = undefined;
/**
 * Datetime when the campaign will become in-active.
 * @member {Date} endTime
 */

NewCampaign.prototype['endTime'] = undefined;
/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */

NewCampaign.prototype['attributes'] = undefined;
/**
 * A disabled or archived campaign is not evaluated for rules or coupons. 
 * @member {module:model/NewCampaign.StateEnum} state
 * @default 'enabled'
 */

NewCampaign.prototype['state'] = 'enabled';
/**
 * ID of Ruleset this campaign applies on customer session evaluation.
 * @member {Number} activeRulesetId
 */

NewCampaign.prototype['activeRulesetId'] = undefined;
/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */

NewCampaign.prototype['tags'] = undefined;
/**
 * A list of features for the campaign.
 * @member {Array.<module:model/NewCampaign.FeaturesEnum>} features
 */

NewCampaign.prototype['features'] = undefined;
/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */

NewCampaign.prototype['couponSettings'] = undefined;
/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */

NewCampaign.prototype['referralSettings'] = undefined;
/**
 * The set of limits that will operate for this campaign
 * @member {Array.<module:model/LimitConfig>} limits
 */

NewCampaign.prototype['limits'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

NewCampaign['StateEnum'] = {
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

NewCampaign['FeaturesEnum'] = {
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
var _default = NewCampaign;
exports["default"] = _default;