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
 * The IdentifiableEntity model module.
 * @module model/IdentifiableEntity
 * @version 12.0.0
 */
class IdentifiableEntity {
    /**
     * Constructs a new <code>IdentifiableEntity</code>.
     * @alias module:model/IdentifiableEntity
     * @param id {Number} Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints.
     */
    constructor(id) { 
        
        IdentifiableEntity.initialize(this, id);
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
     * Constructs a <code>IdentifiableEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentifiableEntity} obj Optional instance to populate.
     * @return {module:model/IdentifiableEntity} The populated <code>IdentifiableEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentifiableEntity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints.
 * @member {Number} id
 */
IdentifiableEntity.prototype['id'] = undefined;






export default IdentifiableEntity;

