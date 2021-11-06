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
 * The ManagerConfig model module.
 * @module model/ManagerConfig
 * @version 4.4.0
 */
class ManagerConfig {
    /**
     * Constructs a new <code>ManagerConfig</code>.
     * @alias module:model/ManagerConfig
     * @param schemaVersion {Number} 
     */
    constructor(schemaVersion) { 
        
        ManagerConfig.initialize(this, schemaVersion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, schemaVersion) { 
        obj['schemaVersion'] = schemaVersion;
    }

    /**
     * Constructs a <code>ManagerConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManagerConfig} obj Optional instance to populate.
     * @return {module:model/ManagerConfig} The populated <code>ManagerConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerConfig();

            if (data.hasOwnProperty('schemaVersion')) {
                obj['schemaVersion'] = ApiClient.convertToType(data['schemaVersion'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} schemaVersion
 */
ManagerConfig.prototype['schemaVersion'] = undefined;






export default ManagerConfig;

