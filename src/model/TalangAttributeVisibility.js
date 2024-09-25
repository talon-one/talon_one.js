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
 * The TalangAttributeVisibility model module.
 * @module model/TalangAttributeVisibility
 * @version 9.0.0
 */
class TalangAttributeVisibility {
    /**
     * Constructs a new <code>TalangAttributeVisibility</code>.
     * @alias module:model/TalangAttributeVisibility
     */
    constructor() { 
        
        TalangAttributeVisibility.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TalangAttributeVisibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TalangAttributeVisibility} obj Optional instance to populate.
     * @return {module:model/TalangAttributeVisibility} The populated <code>TalangAttributeVisibility</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TalangAttributeVisibility();

            if (data.hasOwnProperty('invisible')) {
                obj['invisible'] = ApiClient.convertToType(data['invisible'], ['String']);
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of attribute names to hide in the UI.
 * @member {Array.<String>} invisible
 */
TalangAttributeVisibility.prototype['invisible'] = undefined;

/**
 * List of attribute names to show in the UI.
 * @member {Array.<String>} visible
 */
TalangAttributeVisibility.prototype['visible'] = undefined;






export default TalangAttributeVisibility;

