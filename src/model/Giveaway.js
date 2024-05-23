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
 * The Giveaway model module.
 * @module model/Giveaway
 * @version 7.0.0
 */
class Giveaway {
    /**
     * Constructs a new <code>Giveaway</code>.
     * 
     * @alias module:model/Giveaway
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param code {String} The code value of this giveaway.
     * @param poolId {Number} The ID of the pool to return giveaway codes from.
     */
    constructor(id, created, code, poolId) { 
        
        Giveaway.initialize(this, id, created, code, poolId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, code, poolId) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['code'] = code;
        obj['poolId'] = poolId;
    }

    /**
     * Constructs a <code>Giveaway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Giveaway} obj Optional instance to populate.
     * @return {module:model/Giveaway} The populated <code>Giveaway</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Giveaway();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('poolId')) {
                obj['poolId'] = ApiClient.convertToType(data['poolId'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('used')) {
                obj['used'] = ApiClient.convertToType(data['used'], 'Boolean');
            }
            if (data.hasOwnProperty('importId')) {
                obj['importId'] = ApiClient.convertToType(data['importId'], 'Number');
            }
            if (data.hasOwnProperty('profileIntegrationId')) {
                obj['profileIntegrationId'] = ApiClient.convertToType(data['profileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Giveaway.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Giveaway.prototype['created'] = undefined;

/**
 * The code value of this giveaway.
 * @member {String} code
 */
Giveaway.prototype['code'] = undefined;

/**
 * The ID of the pool to return giveaway codes from.
 * @member {Number} poolId
 */
Giveaway.prototype['poolId'] = undefined;

/**
 * Timestamp at which point the giveaway becomes valid.
 * @member {Date} startDate
 */
Giveaway.prototype['startDate'] = undefined;

/**
 * Timestamp at which point the giveaway becomes invalid.
 * @member {Date} endDate
 */
Giveaway.prototype['endDate'] = undefined;

/**
 * Arbitrary properties associated with this giveaway.
 * @member {Object} attributes
 */
Giveaway.prototype['attributes'] = undefined;

/**
 * Indicates whether this giveaway code was given before.
 * @member {Boolean} used
 */
Giveaway.prototype['used'] = undefined;

/**
 * The ID of the Import which created this giveaway.
 * @member {Number} importId
 */
Giveaway.prototype['importId'] = undefined;

/**
 * The third-party integration ID of the customer profile that was awarded the giveaway, if the giveaway was awarded.
 * @member {String} profileIntegrationId
 */
Giveaway.prototype['profileIntegrationId'] = undefined;

/**
 * The internal ID of the customer profile that was awarded the giveaway, if the giveaway was awarded and an internal ID exists.
 * @member {Number} profileId
 */
Giveaway.prototype['profileId'] = undefined;






export default Giveaway;

