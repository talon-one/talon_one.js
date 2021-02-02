/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Effect model module.
 * @module model/Effect
 * @version 4.3.0
 */
class Effect {
    /**
     * Constructs a new <code>Effect</code>.
     * 
     * @alias module:model/Effect
     * @param campaignId {Number} The ID of the campaign that triggered this effect
     * @param rulesetId {Number} The ID of the ruleset that was active in the campaign when this effect was triggered
     * @param ruleIndex {Number} The position of the rule that triggered this effect within the ruleset
     * @param ruleName {String} The name of the rule that triggered this effect
     * @param effectType {String} The type of effect that was triggered
     * @param props {Object} 
     */
    constructor(campaignId, rulesetId, ruleIndex, ruleName, effectType, props) { 
        
        Effect.initialize(this, campaignId, rulesetId, ruleIndex, ruleName, effectType, props);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignId, rulesetId, ruleIndex, ruleName, effectType, props) { 
        obj['campaignId'] = campaignId;
        obj['rulesetId'] = rulesetId;
        obj['ruleIndex'] = ruleIndex;
        obj['ruleName'] = ruleName;
        obj['effectType'] = effectType;
        obj['props'] = props;
    }

    /**
     * Constructs a <code>Effect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Effect} obj Optional instance to populate.
     * @return {module:model/Effect} The populated <code>Effect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Effect();

            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('rulesetId')) {
                obj['rulesetId'] = ApiClient.convertToType(data['rulesetId'], 'Number');
            }
            if (data.hasOwnProperty('ruleIndex')) {
                obj['ruleIndex'] = ApiClient.convertToType(data['ruleIndex'], 'Number');
            }
            if (data.hasOwnProperty('ruleName')) {
                obj['ruleName'] = ApiClient.convertToType(data['ruleName'], 'String');
            }
            if (data.hasOwnProperty('effectType')) {
                obj['effectType'] = ApiClient.convertToType(data['effectType'], 'String');
            }
            if (data.hasOwnProperty('triggeredByCoupon')) {
                obj['triggeredByCoupon'] = ApiClient.convertToType(data['triggeredByCoupon'], 'Number');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = ApiClient.convertToType(data['props'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the campaign that triggered this effect
 * @member {Number} campaignId
 */
Effect.prototype['campaignId'] = undefined;

/**
 * The ID of the ruleset that was active in the campaign when this effect was triggered
 * @member {Number} rulesetId
 */
Effect.prototype['rulesetId'] = undefined;

/**
 * The position of the rule that triggered this effect within the ruleset
 * @member {Number} ruleIndex
 */
Effect.prototype['ruleIndex'] = undefined;

/**
 * The name of the rule that triggered this effect
 * @member {String} ruleName
 */
Effect.prototype['ruleName'] = undefined;

/**
 * The type of effect that was triggered
 * @member {String} effectType
 */
Effect.prototype['effectType'] = undefined;

/**
 * The ID of the coupon that was being evaluated when this effect was triggered
 * @member {Number} triggeredByCoupon
 */
Effect.prototype['triggeredByCoupon'] = undefined;

/**
 * @member {Object} props
 */
Effect.prototype['props'] = undefined;






export default Effect;

