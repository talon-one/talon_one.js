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
 * The MessageLogRequest model module.
 * @module model/MessageLogRequest
 * @version 11.0.0
 */
class MessageLogRequest {
    /**
     * Constructs a new <code>MessageLogRequest</code>.
     * Details of the request.
     * @alias module:model/MessageLogRequest
     * @param createdAt {Date} Timestamp when the request was made.
     * @param request {Blob} Raw request data.
     */
    constructor(createdAt, request) { 
        
        MessageLogRequest.initialize(this, createdAt, request);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, request) { 
        obj['createdAt'] = createdAt;
        obj['request'] = request;
    }

    /**
     * Constructs a <code>MessageLogRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageLogRequest} obj Optional instance to populate.
     * @return {module:model/MessageLogRequest} The populated <code>MessageLogRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageLogRequest();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], 'Blob');
            }
        }
        return obj;
    }


}

/**
 * Timestamp when the request was made.
 * @member {Date} createdAt
 */
MessageLogRequest.prototype['createdAt'] = undefined;

/**
 * Raw request data.
 * @member {Blob} request
 */
MessageLogRequest.prototype['request'] = undefined;






export default MessageLogRequest;

