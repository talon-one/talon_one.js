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
 * The UpdateLoyaltyProgramTier model module.
 * @module model/UpdateLoyaltyProgramTier
 * @version 11.0.0
 */
class UpdateLoyaltyProgramTier {
    /**
     * Constructs a new <code>UpdateLoyaltyProgramTier</code>.
     * Update a tier in a specified loyalty program.
     * @alias module:model/UpdateLoyaltyProgramTier
     * @param id {Number} The internal ID of the tier.
     */
    constructor(id) { 
        
        UpdateLoyaltyProgramTier.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateLoyaltyProgramTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLoyaltyProgramTier} obj Optional instance to populate.
     * @return {module:model/UpdateLoyaltyProgramTier} The populated <code>UpdateLoyaltyProgramTier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateLoyaltyProgramTier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
 * The internal ID of the tier.
 * @member {Number} id
 */
UpdateLoyaltyProgramTier.prototype['id'] = undefined;

/**
 * The name of the tier.
 * @member {String} name
 */
UpdateLoyaltyProgramTier.prototype['name'] = undefined;

/**
 * The minimum amount of points required to enter the tier.
 * @member {Number} minPoints
 */
UpdateLoyaltyProgramTier.prototype['minPoints'] = undefined;






export default UpdateLoyaltyProgramTier;

