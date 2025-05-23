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
 * The ScimBaseUserName model module.
 * @module model/ScimBaseUserName
 * @version 12.0.0
 */
class ScimBaseUserName {
    /**
     * Constructs a new <code>ScimBaseUserName</code>.
     * The components of the user’s real name.
     * @alias module:model/ScimBaseUserName
     */
    constructor() { 
        
        ScimBaseUserName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScimBaseUserName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimBaseUserName} obj Optional instance to populate.
     * @return {module:model/ScimBaseUserName} The populated <code>ScimBaseUserName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimBaseUserName();

            if (data.hasOwnProperty('formatted')) {
                obj['formatted'] = ApiClient.convertToType(data['formatted'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The full name, including all middle names, titles, and suffixes as appropriate, formatted for display.
 * @member {String} formatted
 */
ScimBaseUserName.prototype['formatted'] = undefined;






export default ScimBaseUserName;

