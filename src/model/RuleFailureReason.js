/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The RuleFailureReason model module.
 * @module model/RuleFailureReason
 * @version 4.6.0
 */
class RuleFailureReason {
    /**
     * Constructs a new <code>RuleFailureReason</code>.
     * Details about why a rule failed.
     * @alias module:model/RuleFailureReason
     * @param campaignID {Number} The ID of the campaign that contains the rule that failed.
     * @param campaignName {String} The name of the campaign that contains the rule that failed.
     * @param rulesetID {Number} The ID of the ruleset that contains the rule that failed.
     * @param ruleIndex {Number} The index of the rule that failed within the ruleset.
     * @param ruleName {String} The name of the rule that failed within the ruleset.
     */
    constructor(campaignID, campaignName, rulesetID, ruleIndex, ruleName) { 
        
        RuleFailureReason.initialize(this, campaignID, campaignName, rulesetID, ruleIndex, ruleName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignID, campaignName, rulesetID, ruleIndex, ruleName) { 
        obj['campaignID'] = campaignID;
        obj['campaignName'] = campaignName;
        obj['rulesetID'] = rulesetID;
        obj['ruleIndex'] = ruleIndex;
        obj['ruleName'] = ruleName;
    }

    /**
     * Constructs a <code>RuleFailureReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleFailureReason} obj Optional instance to populate.
     * @return {module:model/RuleFailureReason} The populated <code>RuleFailureReason</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleFailureReason();

            if (data.hasOwnProperty('campaignID')) {
                obj['campaignID'] = ApiClient.convertToType(data['campaignID'], 'Number');
            }
            if (data.hasOwnProperty('campaignName')) {
                obj['campaignName'] = ApiClient.convertToType(data['campaignName'], 'String');
            }
            if (data.hasOwnProperty('rulesetID')) {
                obj['rulesetID'] = ApiClient.convertToType(data['rulesetID'], 'Number');
            }
            if (data.hasOwnProperty('couponID')) {
                obj['couponID'] = ApiClient.convertToType(data['couponID'], 'Number');
            }
            if (data.hasOwnProperty('couponValue')) {
                obj['couponValue'] = ApiClient.convertToType(data['couponValue'], 'String');
            }
            if (data.hasOwnProperty('referralID')) {
                obj['referralID'] = ApiClient.convertToType(data['referralID'], 'Number');
            }
            if (data.hasOwnProperty('referralValue')) {
                obj['referralValue'] = ApiClient.convertToType(data['referralValue'], 'String');
            }
            if (data.hasOwnProperty('ruleIndex')) {
                obj['ruleIndex'] = ApiClient.convertToType(data['ruleIndex'], 'Number');
            }
            if (data.hasOwnProperty('ruleName')) {
                obj['ruleName'] = ApiClient.convertToType(data['ruleName'], 'String');
            }
            if (data.hasOwnProperty('conditionIndex')) {
                obj['conditionIndex'] = ApiClient.convertToType(data['conditionIndex'], 'Number');
            }
            if (data.hasOwnProperty('effectIndex')) {
                obj['effectIndex'] = ApiClient.convertToType(data['effectIndex'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the campaign that contains the rule that failed.
 * @member {Number} campaignID
 */
RuleFailureReason.prototype['campaignID'] = undefined;

/**
 * The name of the campaign that contains the rule that failed.
 * @member {String} campaignName
 */
RuleFailureReason.prototype['campaignName'] = undefined;

/**
 * The ID of the ruleset that contains the rule that failed.
 * @member {Number} rulesetID
 */
RuleFailureReason.prototype['rulesetID'] = undefined;

/**
 * The ID of the coupon that was being evaluated at the time of the rule failure.
 * @member {Number} couponID
 */
RuleFailureReason.prototype['couponID'] = undefined;

/**
 * The code of the coupon that was being evaluated at the time of the rule failure.
 * @member {String} couponValue
 */
RuleFailureReason.prototype['couponValue'] = undefined;

/**
 * The ID of the referral that was being evaluated at the time of the rule failure.
 * @member {Number} referralID
 */
RuleFailureReason.prototype['referralID'] = undefined;

/**
 * The code of the referral that was being evaluated at the time of the rule failure.
 * @member {String} referralValue
 */
RuleFailureReason.prototype['referralValue'] = undefined;

/**
 * The index of the rule that failed within the ruleset.
 * @member {Number} ruleIndex
 */
RuleFailureReason.prototype['ruleIndex'] = undefined;

/**
 * The name of the rule that failed within the ruleset.
 * @member {String} ruleName
 */
RuleFailureReason.prototype['ruleName'] = undefined;

/**
 * The index of the condition that failed.
 * @member {Number} conditionIndex
 */
RuleFailureReason.prototype['conditionIndex'] = undefined;

/**
 * The index of the effect that failed.
 * @member {Number} effectIndex
 */
RuleFailureReason.prototype['effectIndex'] = undefined;

/**
 * More details about the failure.
 * @member {String} details
 */
RuleFailureReason.prototype['details'] = undefined;






export default RuleFailureReason;

