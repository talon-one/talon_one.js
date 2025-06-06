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
 * The DeductLoyaltyPointsEffectProps model module.
 * @module model/DeductLoyaltyPointsEffectProps
 * @version 12.0.0
 */
class DeductLoyaltyPointsEffectProps {
    /**
     * Constructs a new <code>DeductLoyaltyPointsEffectProps</code>.
     * The properties specific to the \&quot;deductLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained a condition to only trigger when the given number of loyalty points could be deduced. These points are automatically stored and managed inside Talon.One.
     * @alias module:model/DeductLoyaltyPointsEffectProps
     * @param ruleTitle {String} The title of the rule that contained triggered this points deduction.
     * @param programId {Number} The ID of the loyalty program where these points were added.
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added.
     * @param value {Number} The amount of points that were deducted.
     * @param transactionUUID {String} The identifier of this deduction in the loyalty ledger.
     * @param name {String} The name property gets one of the following two values. It can be the loyalty program name or it can represent a reason for the respective deduction of loyalty points. The latter is an optional value defined in a deduction rule. 
     */
    constructor(ruleTitle, programId, subLedgerId, value, transactionUUID, name) { 
        
        DeductLoyaltyPointsEffectProps.initialize(this, ruleTitle, programId, subLedgerId, value, transactionUUID, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ruleTitle, programId, subLedgerId, value, transactionUUID, name) { 
        obj['ruleTitle'] = ruleTitle;
        obj['programId'] = programId;
        obj['subLedgerId'] = subLedgerId;
        obj['value'] = value;
        obj['transactionUUID'] = transactionUUID;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>DeductLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeductLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/DeductLoyaltyPointsEffectProps} The populated <code>DeductLoyaltyPointsEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeductLoyaltyPointsEffectProps();

            if (data.hasOwnProperty('ruleTitle')) {
                obj['ruleTitle'] = ApiClient.convertToType(data['ruleTitle'], 'String');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
            }
            if (data.hasOwnProperty('subLedgerId')) {
                obj['subLedgerId'] = ApiClient.convertToType(data['subLedgerId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('transactionUUID')) {
                obj['transactionUUID'] = ApiClient.convertToType(data['transactionUUID'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cardIdentifier')) {
                obj['cardIdentifier'] = ApiClient.convertToType(data['cardIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The title of the rule that contained triggered this points deduction.
 * @member {String} ruleTitle
 */
DeductLoyaltyPointsEffectProps.prototype['ruleTitle'] = undefined;

/**
 * The ID of the loyalty program where these points were added.
 * @member {Number} programId
 */
DeductLoyaltyPointsEffectProps.prototype['programId'] = undefined;

/**
 * The ID of the subledger within the loyalty program where these points were added.
 * @member {String} subLedgerId
 */
DeductLoyaltyPointsEffectProps.prototype['subLedgerId'] = undefined;

/**
 * The amount of points that were deducted.
 * @member {Number} value
 */
DeductLoyaltyPointsEffectProps.prototype['value'] = undefined;

/**
 * The identifier of this deduction in the loyalty ledger.
 * @member {String} transactionUUID
 */
DeductLoyaltyPointsEffectProps.prototype['transactionUUID'] = undefined;

/**
 * The name property gets one of the following two values. It can be the loyalty program name or it can represent a reason for the respective deduction of loyalty points. The latter is an optional value defined in a deduction rule. 
 * @member {String} name
 */
DeductLoyaltyPointsEffectProps.prototype['name'] = undefined;

/**
 * The alphanumeric identifier of the loyalty card. 
 * @member {String} cardIdentifier
 */
DeductLoyaltyPointsEffectProps.prototype['cardIdentifier'] = undefined;






export default DeductLoyaltyPointsEffectProps;

