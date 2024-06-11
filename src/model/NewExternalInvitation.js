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
 * The NewExternalInvitation model module.
 * @module model/NewExternalInvitation
 * @version 8.0.0
 */
class NewExternalInvitation {
    /**
     * Constructs a new <code>NewExternalInvitation</code>.
     * Parameters for inviting a new user from an external identity provider.
     * @alias module:model/NewExternalInvitation
     * @param email {String} Email address of the user.
     */
    constructor(email) { 
        
        NewExternalInvitation.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>NewExternalInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewExternalInvitation} obj Optional instance to populate.
     * @return {module:model/NewExternalInvitation} The populated <code>NewExternalInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewExternalInvitation();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('userGroups')) {
                obj['userGroups'] = ApiClient.convertToType(data['userGroups'], ['String']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the user.
 * @member {String} name
 */
NewExternalInvitation.prototype['name'] = undefined;

/**
 * List of user groups in the external identity provider.  If there are roles in Talon.One whose names match these user groups, those roles will be automatically assigned to the user upon invitation. 
 * @member {Array.<String>} userGroups
 */
NewExternalInvitation.prototype['userGroups'] = undefined;

/**
 * Email address of the user.
 * @member {String} email
 */
NewExternalInvitation.prototype['email'] = undefined;






export default NewExternalInvitation;
