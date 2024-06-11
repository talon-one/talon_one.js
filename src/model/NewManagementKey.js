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
import Endpoint from './Endpoint';

/**
 * The NewManagementKey model module.
 * @module model/NewManagementKey
 * @version 8.0.0
 */
class NewManagementKey {
    /**
     * Constructs a new <code>NewManagementKey</code>.
     * 
     * @alias module:model/NewManagementKey
     * @param name {String} Name for management key.
     * @param expiryDate {Date} The date the management key expires.
     * @param endpoints {Array.<module:model/Endpoint>} The list of endpoints that can be accessed with the key
     * @param id {Number} ID of the management key.
     * @param createdBy {Number} ID of the user who created it.
     * @param accountID {Number} ID of account the key is used for.
     * @param created {Date} The date the management key was created.
     * @param key {String} The management key.
     */
    constructor(name, expiryDate, endpoints, id, createdBy, accountID, created, key) { 
        
        NewManagementKey.initialize(this, name, expiryDate, endpoints, id, createdBy, accountID, created, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, expiryDate, endpoints, id, createdBy, accountID, created, key) { 
        obj['name'] = name;
        obj['expiryDate'] = expiryDate;
        obj['endpoints'] = endpoints;
        obj['id'] = id;
        obj['createdBy'] = createdBy;
        obj['accountID'] = accountID;
        obj['created'] = created;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>NewManagementKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewManagementKey} obj Optional instance to populate.
     * @return {module:model/NewManagementKey} The populated <code>NewManagementKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewManagementKey();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('endpoints')) {
                obj['endpoints'] = ApiClient.convertToType(data['endpoints'], [Endpoint]);
            }
            if (data.hasOwnProperty('allowedApplicationIds')) {
                obj['allowedApplicationIds'] = ApiClient.convertToType(data['allowedApplicationIds'], ['Number']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('accountID')) {
                obj['accountID'] = ApiClient.convertToType(data['accountID'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name for management key.
 * @member {String} name
 */
NewManagementKey.prototype['name'] = undefined;

/**
 * The date the management key expires.
 * @member {Date} expiryDate
 */
NewManagementKey.prototype['expiryDate'] = undefined;

/**
 * The list of endpoints that can be accessed with the key
 * @member {Array.<module:model/Endpoint>} endpoints
 */
NewManagementKey.prototype['endpoints'] = undefined;

/**
 * A list of Application IDs that you can access with the management key. An empty or missing list means the management key can be used for all Applications in the account. 
 * @member {Array.<Number>} allowedApplicationIds
 */
NewManagementKey.prototype['allowedApplicationIds'] = undefined;

/**
 * ID of the management key.
 * @member {Number} id
 */
NewManagementKey.prototype['id'] = undefined;

/**
 * ID of the user who created it.
 * @member {Number} createdBy
 */
NewManagementKey.prototype['createdBy'] = undefined;

/**
 * ID of account the key is used for.
 * @member {Number} accountID
 */
NewManagementKey.prototype['accountID'] = undefined;

/**
 * The date the management key was created.
 * @member {Date} created
 */
NewManagementKey.prototype['created'] = undefined;

/**
 * The management key.
 * @member {String} key
 */
NewManagementKey.prototype['key'] = undefined;






export default NewManagementKey;

