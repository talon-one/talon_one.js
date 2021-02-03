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
 * The CreateApplicationAPIKey model module.
 * @module model/CreateApplicationAPIKey
 * @version 4.3.0
 */
class CreateApplicationAPIKey {
    /**
     * Constructs a new <code>CreateApplicationAPIKey</code>.
     * @alias module:model/CreateApplicationAPIKey
     * @param title {String} Title for API Key
     * @param expires {Date} The date the API key expired
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
 * Title for API Key
 * @member {String} title
 */
CreateApplicationAPIKey.prototype['title'] = undefined;

/**
 * The date the API key expired
 * @member {Date} expires
 */
CreateApplicationAPIKey.prototype['expires'] = undefined;

/**
 * Platform the API key is valid for.
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
    "selligent": "selligent"
};



export default CreateApplicationAPIKey;

