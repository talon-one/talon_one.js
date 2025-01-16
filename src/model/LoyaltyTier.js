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
 * The LoyaltyTier model module.
 * @module model/LoyaltyTier
 * @version 10.0.0
 */
class LoyaltyTier {
    /**
     * Constructs a new <code>LoyaltyTier</code>.
     * A tier in a loyalty program.
     * @alias module:model/LoyaltyTier
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param programID {Number} The ID of the loyalty program that owns this entity.
     * @param name {String} The name of the tier.
     * @param minPoints {Number} The minimum amount of points required to enter the tier.
     */
    constructor(id, created, programID, name, minPoints) { 
        
        LoyaltyTier.initialize(this, id, created, programID, name, minPoints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, programID, name, minPoints) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['programID'] = programID;
        obj['name'] = name;
        obj['minPoints'] = minPoints;
    }

    /**
     * Constructs a <code>LoyaltyTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyTier} obj Optional instance to populate.
     * @return {module:model/LoyaltyTier} The populated <code>LoyaltyTier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyTier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('programID')) {
                obj['programID'] = ApiClient.convertToType(data['programID'], 'Number');
            }
            if (data.hasOwnProperty('programName')) {
                obj['programName'] = ApiClient.convertToType(data['programName'], 'String');
            }
            if (data.hasOwnProperty('programTitle')) {
                obj['programTitle'] = ApiClient.convertToType(data['programTitle'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('minPoints')) {
                obj['minPoints'] = ApiClient.convertToType(data['minPoints'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
LoyaltyTier.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
LoyaltyTier.prototype['created'] = undefined;

/**
 * The ID of the loyalty program that owns this entity.
 * @member {Number} programID
 */
LoyaltyTier.prototype['programID'] = undefined;

/**
 * The integration name of the loyalty program that owns this entity.
 * @member {String} programName
 */
LoyaltyTier.prototype['programName'] = undefined;

/**
 * The Campaign Manager-displayed name of the loyalty program that owns this entity.
 * @member {String} programTitle
 */
LoyaltyTier.prototype['programTitle'] = undefined;

/**
 * The name of the tier.
 * @member {String} name
 */
LoyaltyTier.prototype['name'] = undefined;

/**
 * The minimum amount of points required to enter the tier.
 * @member {Number} minPoints
 */
LoyaltyTier.prototype['minPoints'] = undefined;






export default LoyaltyTier;

