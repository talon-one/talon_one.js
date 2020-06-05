/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
 * The AccessLogEntry model module.
 * @module model/AccessLogEntry
 * @version 4.1.1
 */
class AccessLogEntry {
    /**
     * Constructs a new <code>AccessLogEntry</code>.
     * Log of application accesses
     * @alias module:model/AccessLogEntry
     * @param uuid {String} UUID reference of request
     * @param status {Number} HTTP status code of response
     * @param method {String} HTTP method of request
     * @param requestUri {String} target URI of request
     * @param time {Date} timestamp of request
     * @param requestPayload {String} payload of request
     * @param responsePayload {String} payload of response
     */
    constructor(uuid, status, method, requestUri, time, requestPayload, responsePayload) { 
        
        AccessLogEntry.initialize(this, uuid, status, method, requestUri, time, requestPayload, responsePayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, status, method, requestUri, time, requestPayload, responsePayload) { 
        obj['uuid'] = uuid;
        obj['status'] = status;
        obj['method'] = method;
        obj['requestUri'] = requestUri;
        obj['time'] = time;
        obj['requestPayload'] = requestPayload;
        obj['responsePayload'] = responsePayload;
    }

    /**
     * Constructs a <code>AccessLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessLogEntry} obj Optional instance to populate.
     * @return {module:model/AccessLogEntry} The populated <code>AccessLogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessLogEntry();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('requestUri')) {
                obj['requestUri'] = ApiClient.convertToType(data['requestUri'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
            if (data.hasOwnProperty('requestPayload')) {
                obj['requestPayload'] = ApiClient.convertToType(data['requestPayload'], 'String');
            }
            if (data.hasOwnProperty('responsePayload')) {
                obj['responsePayload'] = ApiClient.convertToType(data['responsePayload'], 'String');
            }
        }
        return obj;
    }


}

/**
 * UUID reference of request
 * @member {String} uuid
 */
AccessLogEntry.prototype['uuid'] = undefined;

/**
 * HTTP status code of response
 * @member {Number} status
 */
AccessLogEntry.prototype['status'] = undefined;

/**
 * HTTP method of request
 * @member {String} method
 */
AccessLogEntry.prototype['method'] = undefined;

/**
 * target URI of request
 * @member {String} requestUri
 */
AccessLogEntry.prototype['requestUri'] = undefined;

/**
 * timestamp of request
 * @member {Date} time
 */
AccessLogEntry.prototype['time'] = undefined;

/**
 * payload of request
 * @member {String} requestPayload
 */
AccessLogEntry.prototype['requestPayload'] = undefined;

/**
 * payload of response
 * @member {String} responsePayload
 */
AccessLogEntry.prototype['responsePayload'] = undefined;






export default AccessLogEntry;

