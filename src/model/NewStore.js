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
 * The NewStore model module.
 * @module model/NewStore
 * @version 6.0.0
 */
class NewStore {
    /**
     * Constructs a new <code>NewStore</code>.
     * 
     * @alias module:model/NewStore
     * @param name {String} The name of the store.
     * @param description {String} The description of the store.
     * @param integrationId {String} The integration ID of the store. You choose this ID when you create a store.
     */
    constructor(name, description, integrationId) { 
        
        NewStore.initialize(this, name, description, integrationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, description, integrationId) { 
        obj['name'] = name;
        obj['description'] = description;
        obj['integrationId'] = integrationId;
    }

    /**
     * Constructs a <code>NewStore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewStore} obj Optional instance to populate.
     * @return {module:model/NewStore} The populated <code>NewStore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewStore();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the store.
 * @member {String} name
 */
NewStore.prototype['name'] = undefined;

/**
 * The description of the store.
 * @member {String} description
 */
NewStore.prototype['description'] = undefined;

/**
 * The attributes of the store.
 * @member {Object} attributes
 */
NewStore.prototype['attributes'] = undefined;

/**
 * The integration ID of the store. You choose this ID when you create a store.
 * @member {String} integrationId
 */
NewStore.prototype['integrationId'] = undefined;






export default NewStore;

