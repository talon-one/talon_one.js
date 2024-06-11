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
import APIError from './APIError';

/**
 * The ErrorResponseWithStatus model module.
 * @module model/ErrorResponseWithStatus
 * @version 8.0.0
 */
class ErrorResponseWithStatus {
    /**
     * Constructs a new <code>ErrorResponseWithStatus</code>.
     * @alias module:model/ErrorResponseWithStatus
     */
    constructor() { 
        
        ErrorResponseWithStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponseWithStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponseWithStatus} obj Optional instance to populate.
     * @return {module:model/ErrorResponseWithStatus} The populated <code>ErrorResponseWithStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponseWithStatus();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [APIError]);
            }
            if (data.hasOwnProperty('StatusCode')) {
                obj['StatusCode'] = ApiClient.convertToType(data['StatusCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
ErrorResponseWithStatus.prototype['message'] = undefined;

/**
 * An array of individual problems encountered during the request.
 * @member {Array.<module:model/APIError>} errors
 */
ErrorResponseWithStatus.prototype['errors'] = undefined;

/**
 * The error code
 * @member {Number} StatusCode
 */
ErrorResponseWithStatus.prototype['StatusCode'] = undefined;






export default ErrorResponseWithStatus;

