/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EffectEntity model module.
 * @module model/EffectEntity
 * @version 5.0.0
 */
class EffectEntity {
    /**
     * Constructs a new <code>EffectEntity</code>.
     * Definition of all properties that are present on all effects, independent of their type.
     * @alias module:model/EffectEntity
     * @param campaignId {Number} The ID of the campaign that triggered this effect.
     * @param rulesetId {Number} The ID of the ruleset that was active in the campaign when this effect was triggered.
     * @param ruleIndex {Number} The position of the rule that triggered this effect within the ruleset.
     * @param ruleName {String} The name of the rule that triggered this effect.
     * @param effectType {String} The type of effect that was triggered. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
     */
    constructor(campaignId, rulesetId, ruleIndex, ruleName, effectType) { 
        
        EffectEntity.initialize(this, campaignId, rulesetId, ruleIndex, ruleName, effectType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignId, rulesetId, ruleIndex, ruleName, effectType) { 
        obj['campaignId'] = campaignId;
        obj['rulesetId'] = rulesetId;
        obj['ruleIndex'] = ruleIndex;
        obj['ruleName'] = ruleName;
        obj['effectType'] = effectType;
    }

    /**
     * Constructs a <code>EffectEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EffectEntity} obj Optional instance to populate.
     * @return {module:model/EffectEntity} The populated <code>EffectEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EffectEntity();

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
            if (data.hasOwnProperty('triggeredForCatalogItem')) {
                obj['triggeredForCatalogItem'] = ApiClient.convertToType(data['triggeredForCatalogItem'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the campaign that triggered this effect.
 * @member {Number} campaignId
 */
EffectEntity.prototype['campaignId'] = undefined;

/**
 * The ID of the ruleset that was active in the campaign when this effect was triggered.
 * @member {Number} rulesetId
 */
EffectEntity.prototype['rulesetId'] = undefined;

/**
 * The position of the rule that triggered this effect within the ruleset.
 * @member {Number} ruleIndex
 */
EffectEntity.prototype['ruleIndex'] = undefined;

/**
 * The name of the rule that triggered this effect.
 * @member {String} ruleName
 */
EffectEntity.prototype['ruleName'] = undefined;

/**
 * The type of effect that was triggered. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
 * @member {String} effectType
 */
EffectEntity.prototype['effectType'] = undefined;

/**
 * The ID of the coupon that was being evaluated when this effect was triggered.
 * @member {Number} triggeredByCoupon
 */
EffectEntity.prototype['triggeredByCoupon'] = undefined;

/**
 * The ID of the catalog item that was being evaluated when this effect was triggered.
 * @member {Number} triggeredForCatalogItem
 */
EffectEntity.prototype['triggeredForCatalogItem'] = undefined;






export default EffectEntity;

