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
 * The MessageTest model module.
 * @module model/MessageTest
 * @version 11.0.0
 */
class MessageTest {
    /**
     * Constructs a new <code>MessageTest</code>.
     * @alias module:model/MessageTest
     * @param httpResponse {String} The returned http response.
     * @param httpStatus {Number} The returned http status code.
     */
    constructor(httpResponse, httpStatus) { 
        
        MessageTest.initialize(this, httpResponse, httpStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, httpResponse, httpStatus) { 
        obj['httpResponse'] = httpResponse;
        obj['httpStatus'] = httpStatus;
    }

    /**
     * Constructs a <code>MessageTest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageTest} obj Optional instance to populate.
     * @return {module:model/MessageTest} The populated <code>MessageTest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageTest();

            if (data.hasOwnProperty('httpResponse')) {
                obj['httpResponse'] = ApiClient.convertToType(data['httpResponse'], 'String');
            }
            if (data.hasOwnProperty('httpStatus')) {
                obj['httpStatus'] = ApiClient.convertToType(data['httpStatus'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The returned http response.
 * @member {String} httpResponse
 */
MessageTest.prototype['httpResponse'] = undefined;

/**
 * The returned http status code.
 * @member {Number} httpStatus
 */
MessageTest.prototype['httpStatus'] = undefined;






export default MessageTest;

