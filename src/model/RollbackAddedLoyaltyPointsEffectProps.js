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
 * The RollbackAddedLoyaltyPointsEffectProps model module.
 * @module model/RollbackAddedLoyaltyPointsEffectProps
 * @version 4.3.0
 */
class RollbackAddedLoyaltyPointsEffectProps {
    /**
     * Constructs a new <code>RollbackAddedLoyaltyPointsEffectProps</code>.
     * The properties specific to the \&quot;rollbackAddedLoyaltyPoints\&quot; effect. This gets triggered whenever previously a closed session with an addLoyaltyPoints effect is cancelled.
     * @alias module:model/RollbackAddedLoyaltyPointsEffectProps
     * @param programId {Number} The ID of the loyalty program where the points were originally added
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were originally added
     * @param value {Number} The amount of points that were rolled back
     * @param recipientIntegrationId {String} The user for whom these points were originally added
     * @param transactionUUID {String} The identifier of 'deduction' entry added to the ledger as the `addLoyaltyPoints` effect is rolled back.
     */
    constructor(programId, subLedgerId, value, recipientIntegrationId, transactionUUID) { 
        
        RollbackAddedLoyaltyPointsEffectProps.initialize(this, programId, subLedgerId, value, recipientIntegrationId, transactionUUID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, programId, subLedgerId, value, recipientIntegrationId, transactionUUID) { 
        obj['programId'] = programId;
        obj['subLedgerId'] = subLedgerId;
        obj['value'] = value;
        obj['recipientIntegrationId'] = recipientIntegrationId;
        obj['transactionUUID'] = transactionUUID;
    }

    /**
     * Constructs a <code>RollbackAddedLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackAddedLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackAddedLoyaltyPointsEffectProps} The populated <code>RollbackAddedLoyaltyPointsEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RollbackAddedLoyaltyPointsEffectProps();

            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
            }
            if (data.hasOwnProperty('subLedgerId')) {
                obj['subLedgerId'] = ApiClient.convertToType(data['subLedgerId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('transactionUUID')) {
                obj['transactionUUID'] = ApiClient.convertToType(data['transactionUUID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the loyalty program where the points were originally added
 * @member {Number} programId
 */
RollbackAddedLoyaltyPointsEffectProps.prototype['programId'] = undefined;

/**
 * The ID of the subledger within the loyalty program where these points were originally added
 * @member {String} subLedgerId
 */
RollbackAddedLoyaltyPointsEffectProps.prototype['subLedgerId'] = undefined;

/**
 * The amount of points that were rolled back
 * @member {Number} value
 */
RollbackAddedLoyaltyPointsEffectProps.prototype['value'] = undefined;

/**
 * The user for whom these points were originally added
 * @member {String} recipientIntegrationId
 */
RollbackAddedLoyaltyPointsEffectProps.prototype['recipientIntegrationId'] = undefined;

/**
 * The identifier of 'deduction' entry added to the ledger as the `addLoyaltyPoints` effect is rolled back.
 * @member {String} transactionUUID
 */
RollbackAddedLoyaltyPointsEffectProps.prototype['transactionUUID'] = undefined;






export default RollbackAddedLoyaltyPointsEffectProps;

