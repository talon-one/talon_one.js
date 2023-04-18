/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The NewInternalAudience model module.
 * @module model/NewInternalAudience
 * @version 5.0.0
 */
class NewInternalAudience {
    /**
     * Constructs a new <code>NewInternalAudience</code>.
     * @alias module:model/NewInternalAudience
     * @param name {String} The human-friendly display name for this audience.
     */
    constructor(name) { 
        
        NewInternalAudience.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>NewInternalAudience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInternalAudience} obj Optional instance to populate.
     * @return {module:model/NewInternalAudience} The populated <code>NewInternalAudience</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewInternalAudience();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sandbox')) {
                obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The human-friendly display name for this audience.
 * @member {String} name
 */
NewInternalAudience.prototype['name'] = undefined;

/**
 * Indicates if this is a live or sandbox Application.
 * @member {Boolean} sandbox
 */
NewInternalAudience.prototype['sandbox'] = undefined;

/**
 * A description of the audience.
 * @member {String} description
 */
NewInternalAudience.prototype['description'] = undefined;






export default NewInternalAudience;

