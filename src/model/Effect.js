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
 * The Effect model module.
 * @module model/Effect
 * @version 11.0.0
 */
class Effect {
    /**
     * Constructs a new <code>Effect</code>.
     * A generic effect that is fired by a triggered campaign. The props property will contain information specific to the specific effect type.
     * @alias module:model/Effect
     * @param campaignId {Number} The ID of the campaign that triggered this effect.
     * @param rulesetId {Number} The ID of the ruleset that was active in the campaign when this effect was triggered.
     * @param ruleIndex {Number} The position of the rule that triggered this effect within the ruleset.
     * @param ruleName {String} The name of the rule that triggered this effect.
     * @param effectType {String} The type of effect that was triggered. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
     * @param props {Object} The properties of the effect. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
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
            if (data.hasOwnProperty('triggeredForCatalogItem')) {
                obj['triggeredForCatalogItem'] = ApiClient.convertToType(data['triggeredForCatalogItem'], 'Number');
            }
            if (data.hasOwnProperty('conditionIndex')) {
                obj['conditionIndex'] = ApiClient.convertToType(data['conditionIndex'], 'Number');
            }
            if (data.hasOwnProperty('evaluationGroupID')) {
                obj['evaluationGroupID'] = ApiClient.convertToType(data['evaluationGroupID'], 'Number');
            }
            if (data.hasOwnProperty('evaluationGroupMode')) {
                obj['evaluationGroupMode'] = ApiClient.convertToType(data['evaluationGroupMode'], 'String');
            }
            if (data.hasOwnProperty('campaignRevisionId')) {
                obj['campaignRevisionId'] = ApiClient.convertToType(data['campaignRevisionId'], 'Number');
            }
            if (data.hasOwnProperty('campaignRevisionVersionId')) {
                obj['campaignRevisionVersionId'] = ApiClient.convertToType(data['campaignRevisionVersionId'], 'Number');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = ApiClient.convertToType(data['props'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the campaign that triggered this effect.
 * @member {Number} campaignId
 */
Effect.prototype['campaignId'] = undefined;

/**
 * The ID of the ruleset that was active in the campaign when this effect was triggered.
 * @member {Number} rulesetId
 */
Effect.prototype['rulesetId'] = undefined;

/**
 * The position of the rule that triggered this effect within the ruleset.
 * @member {Number} ruleIndex
 */
Effect.prototype['ruleIndex'] = undefined;

/**
 * The name of the rule that triggered this effect.
 * @member {String} ruleName
 */
Effect.prototype['ruleName'] = undefined;

/**
 * The type of effect that was triggered. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
 * @member {String} effectType
 */
Effect.prototype['effectType'] = undefined;

/**
 * The ID of the coupon that was being evaluated when this effect was triggered.
 * @member {Number} triggeredByCoupon
 */
Effect.prototype['triggeredByCoupon'] = undefined;

/**
 * The ID of the catalog item that was being evaluated when this effect was triggered.
 * @member {Number} triggeredForCatalogItem
 */
Effect.prototype['triggeredForCatalogItem'] = undefined;

/**
 * The index of the condition that was triggered.
 * @member {Number} conditionIndex
 */
Effect.prototype['conditionIndex'] = undefined;

/**
 * The ID of the evaluation group. For more information, see [Managing campaign evaluation](https://docs.talon.one/docs/product/applications/managing-campaign-evaluation).
 * @member {Number} evaluationGroupID
 */
Effect.prototype['evaluationGroupID'] = undefined;

/**
 * The evaluation mode of the evaluation group. For more information, see [Managing campaign evaluation](https://docs.talon.one/docs/product/applications/managing-campaign-evaluation).
 * @member {String} evaluationGroupMode
 */
Effect.prototype['evaluationGroupMode'] = undefined;

/**
 * The revision ID of the campaign that was used when triggering the effect.
 * @member {Number} campaignRevisionId
 */
Effect.prototype['campaignRevisionId'] = undefined;

/**
 * The revision version ID of the campaign that was used when triggering the effect.
 * @member {Number} campaignRevisionVersionId
 */
Effect.prototype['campaignRevisionVersionId'] = undefined;

/**
 * The properties of the effect. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
 * @member {Object} props
 */
Effect.prototype['props'] = undefined;






export default Effect;

