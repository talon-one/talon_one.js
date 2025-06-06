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
 * The UpdateRole model module.
 * @module model/UpdateRole
 * @version 12.0.0
 */
class UpdateRole {
    /**
     * Constructs a new <code>UpdateRole</code>.
     * @alias module:model/UpdateRole
     */
    constructor() { 
        
        UpdateRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRole} obj Optional instance to populate.
     * @return {module:model/UpdateRole} The populated <code>UpdateRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRole();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], 'String');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Name of the role.
 * @member {String} name
 */
UpdateRole.prototype['name'] = undefined;

/**
 * Description of the role.
 * @member {String} description
 */
UpdateRole.prototype['description'] = undefined;

/**
 * The `Access Control List` json defining the role of the user. This represents the access control on the user level.
 * @member {String} acl
 */
UpdateRole.prototype['acl'] = undefined;

/**
 * An array of user identifiers.
 * @member {Array.<Number>} members
 */
UpdateRole.prototype['members'] = undefined;






export default UpdateRole;

