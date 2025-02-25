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
 * The AddLoyaltyPointsEffectProps model module.
 * @module model/AddLoyaltyPointsEffectProps
 * @version 11.0.0
 */
class AddLoyaltyPointsEffectProps {
    /**
     * Constructs a new <code>AddLoyaltyPointsEffectProps</code>.
     * The properties specific to the \&quot;addLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;add loyalty\&quot; effect. These points are automatically stored and managed inside Talon.One. 
     * @alias module:model/AddLoyaltyPointsEffectProps
     * @param name {String} The name / description of this loyalty point addition.
     * @param programId {Number} The ID of the loyalty program where these points were added.
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added.
     * @param value {Number} The amount of points that were added.
     * @param recipientIntegrationId {String} The user for whom these points were added.
     * @param transactionUUID {String} The identifier of this addition in the loyalty ledger.
     */
    constructor(name, programId, subLedgerId, value, recipientIntegrationId, transactionUUID) { 
        
        AddLoyaltyPointsEffectProps.initialize(this, name, programId, subLedgerId, value, recipientIntegrationId, transactionUUID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, programId, subLedgerId, value, recipientIntegrationId, transactionUUID) { 
        obj['name'] = name;
        obj['programId'] = programId;
        obj['subLedgerId'] = subLedgerId;
        obj['value'] = value;
        obj['recipientIntegrationId'] = recipientIntegrationId;
        obj['transactionUUID'] = transactionUUID;
    }

    /**
     * Constructs a <code>AddLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/AddLoyaltyPointsEffectProps} The populated <code>AddLoyaltyPointsEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddLoyaltyPointsEffectProps();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('desiredValue')) {
                obj['desiredValue'] = ApiClient.convertToType(data['desiredValue'], 'Number');
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('transactionUUID')) {
                obj['transactionUUID'] = ApiClient.convertToType(data['transactionUUID'], 'String');
            }
            if (data.hasOwnProperty('cartItemPosition')) {
                obj['cartItemPosition'] = ApiClient.convertToType(data['cartItemPosition'], 'Number');
            }
            if (data.hasOwnProperty('cartItemSubPosition')) {
                obj['cartItemSubPosition'] = ApiClient.convertToType(data['cartItemSubPosition'], 'Number');
            }
            if (data.hasOwnProperty('cardIdentifier')) {
                obj['cardIdentifier'] = ApiClient.convertToType(data['cardIdentifier'], 'String');
            }
            if (data.hasOwnProperty('bundleIndex')) {
                obj['bundleIndex'] = ApiClient.convertToType(data['bundleIndex'], 'Number');
            }
            if (data.hasOwnProperty('bundleName')) {
                obj['bundleName'] = ApiClient.convertToType(data['bundleName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name / description of this loyalty point addition.
 * @member {String} name
 */
AddLoyaltyPointsEffectProps.prototype['name'] = undefined;

/**
 * The ID of the loyalty program where these points were added.
 * @member {Number} programId
 */
AddLoyaltyPointsEffectProps.prototype['programId'] = undefined;

/**
 * The ID of the subledger within the loyalty program where these points were added.
 * @member {String} subLedgerId
 */
AddLoyaltyPointsEffectProps.prototype['subLedgerId'] = undefined;

/**
 * The amount of points that were added.
 * @member {Number} value
 */
AddLoyaltyPointsEffectProps.prototype['value'] = undefined;

/**
 * The original amount of loyalty points to be awarded.
 * @member {Number} desiredValue
 */
AddLoyaltyPointsEffectProps.prototype['desiredValue'] = undefined;

/**
 * The user for whom these points were added.
 * @member {String} recipientIntegrationId
 */
AddLoyaltyPointsEffectProps.prototype['recipientIntegrationId'] = undefined;

/**
 * Date after which points will be valid.
 * @member {Date} startDate
 */
AddLoyaltyPointsEffectProps.prototype['startDate'] = undefined;

/**
 * Date after which points will expire.
 * @member {Date} expiryDate
 */
AddLoyaltyPointsEffectProps.prototype['expiryDate'] = undefined;

/**
 * The identifier of this addition in the loyalty ledger.
 * @member {String} transactionUUID
 */
AddLoyaltyPointsEffectProps.prototype['transactionUUID'] = undefined;

/**
 * The index of the item in the cart items list on which the loyal points addition should be applied.
 * @member {Number} cartItemPosition
 */
AddLoyaltyPointsEffectProps.prototype['cartItemPosition'] = undefined;

/**
 * For cart items with `quantity` > 1, the sub position indicates to which item the loyalty points addition is applied. 
 * @member {Number} cartItemSubPosition
 */
AddLoyaltyPointsEffectProps.prototype['cartItemSubPosition'] = undefined;

/**
 * The alphanumeric identifier of the loyalty card. 
 * @member {String} cardIdentifier
 */
AddLoyaltyPointsEffectProps.prototype['cardIdentifier'] = undefined;

/**
 * The position of the bundle in a list of item bundles created from the same bundle definition.
 * @member {Number} bundleIndex
 */
AddLoyaltyPointsEffectProps.prototype['bundleIndex'] = undefined;

/**
 * The name of the bundle definition.
 * @member {String} bundleName
 */
AddLoyaltyPointsEffectProps.prototype['bundleName'] = undefined;






export default AddLoyaltyPointsEffectProps;

