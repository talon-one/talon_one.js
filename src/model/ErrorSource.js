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
 * The ErrorSource model module.
 * @module model/ErrorSource
 * @version 11.0.0
 */
class ErrorSource {
    /**
     * Constructs a new <code>ErrorSource</code>.
     * The source of the current error, exactly one of &#x60;pointer&#x60;, &#x60;parameter&#x60; or &#x60;line&#x60; will be defined. 
     * @alias module:model/ErrorSource
     */
    constructor() { 
        
        ErrorSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorSource} obj Optional instance to populate.
     * @return {module:model/ErrorSource} The populated <code>ErrorSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorSource();

            if (data.hasOwnProperty('pointer')) {
                obj['pointer'] = ApiClient.convertToType(data['pointer'], 'String');
            }
            if (data.hasOwnProperty('parameter')) {
                obj['parameter'] = ApiClient.convertToType(data['parameter'], 'String');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Pointer to the path in the payload that caused this error.
 * @member {String} pointer
 */
ErrorSource.prototype['pointer'] = undefined;

/**
 * Query parameter that caused this error.
 * @member {String} parameter
 */
ErrorSource.prototype['parameter'] = undefined;

/**
 * Line number in uploaded multipart file that caused this error. 'N/A' if unknown.
 * @member {String} line
 */
ErrorSource.prototype['line'] = undefined;

/**
 * Pointer to the resource that caused this error.
 * @member {String} resource
 */
ErrorSource.prototype['resource'] = undefined;






export default ErrorSource;

