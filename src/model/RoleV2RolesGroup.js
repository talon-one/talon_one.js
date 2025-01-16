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
import RoleV2ApplicationDetails from './RoleV2ApplicationDetails';

/**
 * The RoleV2RolesGroup model module.
 * @module model/RoleV2RolesGroup
 * @version 10.0.0
 */
class RoleV2RolesGroup {
    /**
     * Constructs a new <code>RoleV2RolesGroup</code>.
     * @alias module:model/RoleV2RolesGroup
     */
    constructor() { 
        
        RoleV2RolesGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleV2RolesGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleV2RolesGroup} obj Optional instance to populate.
     * @return {module:model/RoleV2RolesGroup} The populated <code>RoleV2RolesGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleV2RolesGroup();

            if (data.hasOwnProperty('applications')) {
                obj['applications'] = ApiClient.convertToType(data['applications'], {'String': RoleV2ApplicationDetails});
            }
            if (data.hasOwnProperty('loyaltyPrograms')) {
                obj['loyaltyPrograms'] = ApiClient.convertToType(data['loyaltyPrograms'], {'String': 'String'});
            }
            if (data.hasOwnProperty('campaignAccessGroups')) {
                obj['campaignAccessGroups'] = ApiClient.convertToType(data['campaignAccessGroups'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * A map of the link between the Application, campaign, or draft campaign-related permission set and the Application ID the permissions apply to.
 * @member {Object.<String, module:model/RoleV2ApplicationDetails>} applications
 */
RoleV2RolesGroup.prototype['applications'] = undefined;

/**
 * A map of the link between the loyalty program-related permission set and the Application ID the permissions apply to.
 * @member {Object.<String, String>} loyaltyPrograms
 */
RoleV2RolesGroup.prototype['loyaltyPrograms'] = undefined;

/**
 * A map of the link between the campaign access group-related permission set and the Application ID the permissions apply to.
 * @member {Object.<String, String>} campaignAccessGroups
 */
RoleV2RolesGroup.prototype['campaignAccessGroups'] = undefined;






export default RoleV2RolesGroup;

