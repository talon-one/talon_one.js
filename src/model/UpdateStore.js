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
 * The UpdateStore model module.
 * @module model/UpdateStore
 * @version 11.0.0
 */
class UpdateStore {
    /**
     * Constructs a new <code>UpdateStore</code>.
     * @alias module:model/UpdateStore
     * @param name {String} The name of the store.
     * @param description {String} The description of the store.
     */
    constructor(name, description) { 
        
        UpdateStore.initialize(this, name, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, description) { 
        obj['name'] = name;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>UpdateStore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateStore} obj Optional instance to populate.
     * @return {module:model/UpdateStore} The populated <code>UpdateStore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateStore();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
        }
        return obj;
    }


}

/**
 * The name of the store.
 * @member {String} name
 */
UpdateStore.prototype['name'] = undefined;

/**
 * The description of the store.
 * @member {String} description
 */
UpdateStore.prototype['description'] = undefined;

/**
 * The attributes of the store.
 * @member {Object} attributes
 */
UpdateStore.prototype['attributes'] = undefined;






export default UpdateStore;

