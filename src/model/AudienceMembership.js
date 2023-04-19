/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The AudienceMembership model module.
 * @module model/AudienceMembership
 * @version 5.0.0
 */
class AudienceMembership {
    /**
     * Constructs a new <code>AudienceMembership</code>.
     * @alias module:model/AudienceMembership
     * @param id {Number} The ID of the audience belonging to this entity.
     * @param name {String} The Name of the audience belonging to this entity.
     */
    constructor(id, name) { 
        
        AudienceMembership.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AudienceMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AudienceMembership} obj Optional instance to populate.
     * @return {module:model/AudienceMembership} The populated <code>AudienceMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AudienceMembership();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the audience belonging to this entity.
 * @member {Number} id
 */
AudienceMembership.prototype['id'] = undefined;

/**
 * The Name of the audience belonging to this entity.
 * @member {String} name
 */
AudienceMembership.prototype['name'] = undefined;






export default AudienceMembership;

