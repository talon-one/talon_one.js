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
 * The AwardGiveawayEffectProps model module.
 * @module model/AwardGiveawayEffectProps
 * @version 9.0.0
 */
class AwardGiveawayEffectProps {
    /**
     * Constructs a new <code>AwardGiveawayEffectProps</code>.
     * The properties specific to the \&quot;awardGiveaway\&quot; effect. This effect contains information on the giveaway item, and which profile it was awarded to.
     * @alias module:model/AwardGiveawayEffectProps
     * @param poolId {Number} The ID of the giveaways pool the code was taken from.
     * @param poolName {String} The name of the giveaways pool the code was taken from.
     * @param recipientIntegrationId {String} The integration ID of the profile that was awarded the giveaway.
     * @param giveawayId {Number} The internal ID for the giveaway that was awarded.
     * @param code {String} The giveaway code that was awarded.
     */
    constructor(poolId, poolName, recipientIntegrationId, giveawayId, code) { 
        
        AwardGiveawayEffectProps.initialize(this, poolId, poolName, recipientIntegrationId, giveawayId, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, poolId, poolName, recipientIntegrationId, giveawayId, code) { 
        obj['poolId'] = poolId;
        obj['poolName'] = poolName;
        obj['recipientIntegrationId'] = recipientIntegrationId;
        obj['giveawayId'] = giveawayId;
        obj['code'] = code;
    }

    /**
     * Constructs a <code>AwardGiveawayEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardGiveawayEffectProps} obj Optional instance to populate.
     * @return {module:model/AwardGiveawayEffectProps} The populated <code>AwardGiveawayEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwardGiveawayEffectProps();

            if (data.hasOwnProperty('poolId')) {
                obj['poolId'] = ApiClient.convertToType(data['poolId'], 'Number');
            }
            if (data.hasOwnProperty('poolName')) {
                obj['poolName'] = ApiClient.convertToType(data['poolName'], 'String');
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('giveawayId')) {
                obj['giveawayId'] = ApiClient.convertToType(data['giveawayId'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the giveaways pool the code was taken from.
 * @member {Number} poolId
 */
AwardGiveawayEffectProps.prototype['poolId'] = undefined;

/**
 * The name of the giveaways pool the code was taken from.
 * @member {String} poolName
 */
AwardGiveawayEffectProps.prototype['poolName'] = undefined;

/**
 * The integration ID of the profile that was awarded the giveaway.
 * @member {String} recipientIntegrationId
 */
AwardGiveawayEffectProps.prototype['recipientIntegrationId'] = undefined;

/**
 * The internal ID for the giveaway that was awarded.
 * @member {Number} giveawayId
 */
AwardGiveawayEffectProps.prototype['giveawayId'] = undefined;

/**
 * The giveaway code that was awarded.
 * @member {String} code
 */
AwardGiveawayEffectProps.prototype['code'] = undefined;






export default AwardGiveawayEffectProps;

