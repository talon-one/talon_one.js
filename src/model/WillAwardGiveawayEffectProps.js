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
 * The WillAwardGiveawayEffectProps model module.
 * @module model/WillAwardGiveawayEffectProps
 * @version 5.0.0
 */
class WillAwardGiveawayEffectProps {
    /**
     * Constructs a new <code>WillAwardGiveawayEffectProps</code>.
     * The properties specific to the \&quot;awardGiveaway\&quot; effect when the session is not closed yet. This effect replaces \&quot;awardGiveaway\&quot; only when updating a session with any state other than \&quot;closed\&quot;. This is to ensure no giveaway codes are leaked when they are still not guaranteed to be awarded.
     * @alias module:model/WillAwardGiveawayEffectProps
     * @param poolId {Number} The ID of the giveaways pool the code will be taken from.
     * @param poolName {String} The name of the giveaways pool the code will be taken from.
     * @param recipientIntegrationId {String} The integration ID of the profile that will be awarded the giveaway.
     */
    constructor(poolId, poolName, recipientIntegrationId) { 
        
        WillAwardGiveawayEffectProps.initialize(this, poolId, poolName, recipientIntegrationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, poolId, poolName, recipientIntegrationId) { 
        obj['poolId'] = poolId;
        obj['poolName'] = poolName;
        obj['recipientIntegrationId'] = recipientIntegrationId;
    }

    /**
     * Constructs a <code>WillAwardGiveawayEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WillAwardGiveawayEffectProps} obj Optional instance to populate.
     * @return {module:model/WillAwardGiveawayEffectProps} The populated <code>WillAwardGiveawayEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WillAwardGiveawayEffectProps();

            if (data.hasOwnProperty('poolId')) {
                obj['poolId'] = ApiClient.convertToType(data['poolId'], 'Number');
            }
            if (data.hasOwnProperty('poolName')) {
                obj['poolName'] = ApiClient.convertToType(data['poolName'], 'String');
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the giveaways pool the code will be taken from.
 * @member {Number} poolId
 */
WillAwardGiveawayEffectProps.prototype['poolId'] = undefined;

/**
 * The name of the giveaways pool the code will be taken from.
 * @member {String} poolName
 */
WillAwardGiveawayEffectProps.prototype['poolName'] = undefined;

/**
 * The integration ID of the profile that will be awarded the giveaway.
 * @member {String} recipientIntegrationId
 */
WillAwardGiveawayEffectProps.prototype['recipientIntegrationId'] = undefined;






export default WillAwardGiveawayEffectProps;

