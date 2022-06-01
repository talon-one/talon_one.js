/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The MutableEntity model module.
 * @module model/MutableEntity
 * @version 4.5.0
 */
class MutableEntity {
    /**
     * Constructs a new <code>MutableEntity</code>.
     * @alias module:model/MutableEntity
     * @param modified {Date} The exact moment this entity was last modified.
     */
    constructor(modified) { 
        
        MutableEntity.initialize(this, modified);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modified) { 
        obj['modified'] = modified;
    }

    /**
     * Constructs a <code>MutableEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutableEntity} obj Optional instance to populate.
     * @return {module:model/MutableEntity} The populated <code>MutableEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutableEntity();

            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The exact moment this entity was last modified.
 * @member {Date} modified
 */
MutableEntity.prototype['modified'] = undefined;






export default MutableEntity;

