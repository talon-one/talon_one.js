/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * @version 4.5.0
 */
class NewApplicationAPIKey {
    /**
     * Constructs a new <code>NewApplicationAPIKey</code>.
     * 
     * @alias module:model/NewApplicationAPIKey
     * @param title {String} Title for API Key
     * @param expires {Date} The date the API key expired
     * @param id {Number} ID of the API Key
     * @param createdBy {Number} ID of user who created
     * @param accountID {Number} ID of account the key is used for
     * @param applicationID {Number} ID of application the key is used for
     * @param created {Date} The date the API key was created
     * @param key {String} The API key
     */
    constructor(title, expires, id, createdBy, accountID, applicationID, created, key) { 
        
        NewApplicationAPIKey.initialize(this, title, expires, id, createdBy, accountID, applicationID, created, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, expires, id, createdBy, accountID, applicationID, created, key) { 
        obj['title'] = title;
        obj['expires'] = expires;
        obj['id'] = id;
        obj['createdBy'] = createdBy;
        obj['accountID'] = accountID;
        obj['applicationID'] = applicationID;
        obj['created'] = created;
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

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
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
            if (data.hasOwnProperty('applicationID')) {
                obj['applicationID'] = ApiClient.convertToType(data['applicationID'], 'Number');
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
 * Title for API Key
 * @member {String} title
 */
NewApplicationAPIKey.prototype['title'] = undefined;

/**
 * The date the API key expired
 * @member {Date} expires
 */
NewApplicationAPIKey.prototype['expires'] = undefined;

/**
 * The third-party platform the API key is valid for. Use `none` for a generic API key to be used from your own integration layer. 
 * @member {module:model/NewApplicationAPIKey.PlatformEnum} platform
 */
NewApplicationAPIKey.prototype['platform'] = undefined;

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
 * The API key
 * @member {String} key
 */
NewApplicationAPIKey.prototype['key'] = undefined;





/**
 * Allowed values for the <code>platform</code> property.
 * @enum {String}
 * @readonly
 */
NewApplicationAPIKey['PlatformEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "segment"
     * @const
     */
    "segment": "segment",

    /**
     * value: "braze"
     * @const
     */
    "braze": "braze",

    /**
     * value: "mparticle"
     * @const
     */
    "mparticle": "mparticle",

    /**
     * value: "selligent"
     * @const
     */
    "selligent": "selligent",

    /**
     * value: "iterable"
     * @const
     */
    "iterable": "iterable",

    /**
     * value: "customer_engagement"
     * @const
     */
    "customer_engagement": "customer_engagement",

    /**
     * value: "customer_data"
     * @const
     */
    "customer_data": "customer_data"
};



export default NewApplicationAPIKey;

