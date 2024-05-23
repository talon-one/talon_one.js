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
 * The RoleV2PermissionSet model module.
 * @module model/RoleV2PermissionSet
 * @version 7.0.0
 */
class RoleV2PermissionSet {
    /**
     * Constructs a new <code>RoleV2PermissionSet</code>.
     * @alias module:model/RoleV2PermissionSet
     * @param name {String} Name of the permission set.
     * @param logicalOperations {Array.<String>} List of logical operations in the permission set. Each logical operation must be shown under the `x-permission` tag on an endpoint level. 
     */
    constructor(name, logicalOperations) { 
        
        RoleV2PermissionSet.initialize(this, name, logicalOperations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, logicalOperations) { 
        obj['name'] = name;
        obj['logicalOperations'] = logicalOperations;
    }

    /**
     * Constructs a <code>RoleV2PermissionSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleV2PermissionSet} obj Optional instance to populate.
     * @return {module:model/RoleV2PermissionSet} The populated <code>RoleV2PermissionSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleV2PermissionSet();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('logicalOperations')) {
                obj['logicalOperations'] = ApiClient.convertToType(data['logicalOperations'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Name of the permission set.
 * @member {String} name
 */
RoleV2PermissionSet.prototype['name'] = undefined;

/**
 * List of logical operations in the permission set. Each logical operation must be shown under the `x-permission` tag on an endpoint level. 
 * @member {Array.<String>} logicalOperations
 */
RoleV2PermissionSet.prototype['logicalOperations'] = undefined;






export default RoleV2PermissionSet;

