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
 * The ChangeLoyaltyTierLevelEffectProps model module.
 * @module model/ChangeLoyaltyTierLevelEffectProps
 * @version 7.0.0
 */
class ChangeLoyaltyTierLevelEffectProps {
    /**
     * Constructs a new <code>ChangeLoyaltyTierLevelEffectProps</code>.
     * The properties specific to the \&quot;changeLoyaltyTierLevel\&quot; effect. This is triggered whenever the user&#39;s loyalty tier is upgraded due to a validated rule that contained an \&quot;addLoyaltyPoints\&quot; effect. 
     * @alias module:model/ChangeLoyaltyTierLevelEffectProps
     * @param ruleTitle {String} The title of the rule that triggered the tier upgrade.
     * @param programId {Number} The ID of the loyalty program where these points were added.
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added.
     * @param newTierName {String} The name of the tier to which the user has been upgraded.
     */
    constructor(ruleTitle, programId, subLedgerId, newTierName) { 
        
        ChangeLoyaltyTierLevelEffectProps.initialize(this, ruleTitle, programId, subLedgerId, newTierName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ruleTitle, programId, subLedgerId, newTierName) { 
        obj['ruleTitle'] = ruleTitle;
        obj['programId'] = programId;
        obj['subLedgerId'] = subLedgerId;
        obj['newTierName'] = newTierName;
    }

    /**
     * Constructs a <code>ChangeLoyaltyTierLevelEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeLoyaltyTierLevelEffectProps} obj Optional instance to populate.
     * @return {module:model/ChangeLoyaltyTierLevelEffectProps} The populated <code>ChangeLoyaltyTierLevelEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeLoyaltyTierLevelEffectProps();

            if (data.hasOwnProperty('ruleTitle')) {
                obj['ruleTitle'] = ApiClient.convertToType(data['ruleTitle'], 'String');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
            }
            if (data.hasOwnProperty('subLedgerId')) {
                obj['subLedgerId'] = ApiClient.convertToType(data['subLedgerId'], 'String');
            }
            if (data.hasOwnProperty('previousTierName')) {
                obj['previousTierName'] = ApiClient.convertToType(data['previousTierName'], 'String');
            }
            if (data.hasOwnProperty('newTierName')) {
                obj['newTierName'] = ApiClient.convertToType(data['newTierName'], 'String');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The title of the rule that triggered the tier upgrade.
 * @member {String} ruleTitle
 */
ChangeLoyaltyTierLevelEffectProps.prototype['ruleTitle'] = undefined;

/**
 * The ID of the loyalty program where these points were added.
 * @member {Number} programId
 */
ChangeLoyaltyTierLevelEffectProps.prototype['programId'] = undefined;

/**
 * The ID of the subledger within the loyalty program where these points were added.
 * @member {String} subLedgerId
 */
ChangeLoyaltyTierLevelEffectProps.prototype['subLedgerId'] = undefined;

/**
 * The name of the tier from which the user was upgraded.
 * @member {String} previousTierName
 */
ChangeLoyaltyTierLevelEffectProps.prototype['previousTierName'] = undefined;

/**
 * The name of the tier to which the user has been upgraded.
 * @member {String} newTierName
 */
ChangeLoyaltyTierLevelEffectProps.prototype['newTierName'] = undefined;

/**
 * The expiration date of the new tier.
 * @member {Date} expiryDate
 */
ChangeLoyaltyTierLevelEffectProps.prototype['expiryDate'] = undefined;






export default ChangeLoyaltyTierLevelEffectProps;

