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
 * The NewApplicationAPIKey model module.
 * @module model/NewApplicationAPIKey
 * @version 4.1.1
 */
class NewApplicationAPIKey {
    /**
     * Constructs a new <code>NewApplicationAPIKey</code>.
     * 
     * @alias module:model/NewApplicationAPIKey
     * @param id {Number} ID of the API Key
     * @param createdBy {Number} ID of user who created
     * @param title {String} Title for API Key
     * @param accountID {Number} ID of account the key is used for
     * @param applicationID {Number} ID of application the key is used for
     * @param created {Date} The date the API key was created
     * @param expires {Date} The date the API key expired
     * @param key {String} Raw API Key
     */
    constructor(id, createdBy, title, accountID, applicationID, created, expires, key) { 
        
        NewApplicationAPIKey.initialize(this, id, createdBy, title, accountID, applicationID, created, expires, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdBy, title, accountID, applicationID, created, expires, key) { 
        obj['id'] = id;
        obj['createdBy'] = createdBy;
        obj['title'] = title;
        obj['accountID'] = accountID;
        obj['applicationID'] = applicationID;
        obj['created'] = created;
        obj['expires'] = expires;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>NewApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApplicationAPIKey} obj Optional instance to populate.
     * @return {module:model/NewApplicationAPIKey} The populated <code>NewApplicationAPIKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewApplicationAPIKey();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('accountID')) {
                obj['accountID'] = ApiClient.convertToType(data['accountID'], 'Number');
            }
            if (data.hasOwnProperty('applicationID')) {
                obj['applicationID'] = ApiClient.convertToType(data['applicationID'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the API Key
 * @member {Number} id
 */
NewApplicationAPIKey.prototype['id'] = undefined;

/**
 * ID of user who created
 * @member {Number} createdBy
 */
NewApplicationAPIKey.prototype['createdBy'] = undefined;

/**
 * Title for API Key
 * @member {String} title
 */
NewApplicationAPIKey.prototype['title'] = undefined;

/**
 * ID of account the key is used for
 * @member {Number} accountID
 */
NewApplicationAPIKey.prototype['accountID'] = undefined;

/**
 * ID of application the key is used for
 * @member {Number} applicationID
 */
NewApplicationAPIKey.prototype['applicationID'] = undefined;

/**
 * The date the API key was created
 * @member {Date} created
 */
NewApplicationAPIKey.prototype['created'] = undefined;

/**
 * The date the API key expired
 * @member {Date} expires
 */
NewApplicationAPIKey.prototype['expires'] = undefined;

/**
 * Raw API Key
 * @member {String} key
 */
NewApplicationAPIKey.prototype['key'] = undefined;






export default NewApplicationAPIKey;

