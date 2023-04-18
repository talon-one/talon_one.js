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
 * The CreateApplicationAPIKey model module.
 * @module model/CreateApplicationAPIKey
 * @version 5.0.0
 */
class CreateApplicationAPIKey {
    /**
     * Constructs a new <code>CreateApplicationAPIKey</code>.
     * @alias module:model/CreateApplicationAPIKey
     * @param title {String} Title for API Key.
     * @param expires {Date} The date the API key expired.
     */
    constructor(title, expires) { 
        
        CreateApplicationAPIKey.initialize(this, title, expires);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, expires) { 
        obj['title'] = title;
        obj['expires'] = expires;
    }

    /**
     * Constructs a <code>CreateApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateApplicationAPIKey} obj Optional instance to populate.
     * @return {module:model/CreateApplicationAPIKey} The populated <code>CreateApplicationAPIKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateApplicationAPIKey();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Title for API Key.
 * @member {String} title
 */
CreateApplicationAPIKey.prototype['title'] = undefined;

/**
 * The date the API key expired.
 * @member {Date} expires
 */
CreateApplicationAPIKey.prototype['expires'] = undefined;

/**
 * The third-party platform the API key is valid for. Use `none` for a generic API key to be used from your own integration layer. 
 * @member {module:model/CreateApplicationAPIKey.PlatformEnum} platform
 */
CreateApplicationAPIKey.prototype['platform'] = undefined;





/**
 * Allowed values for the <code>platform</code> property.
 * @enum {String}
 * @readonly
 */
CreateApplicationAPIKey['PlatformEnum'] = {

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
    "customer_data": "customer_data",

    /**
     * value: "salesforce"
     * @const
     */
    "salesforce": "salesforce"
};



export default CreateApplicationAPIKey;

