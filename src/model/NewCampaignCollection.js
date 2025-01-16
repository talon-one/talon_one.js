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
 * The NewCampaignCollection model module.
 * @module model/NewCampaignCollection
 * @version 10.0.0
 */
class NewCampaignCollection {
    /**
     * Constructs a new <code>NewCampaignCollection</code>.
     * @alias module:model/NewCampaignCollection
     * @param name {String} The name of this collection.
     */
    constructor(name) { 
        
        NewCampaignCollection.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>NewCampaignCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignCollection} obj Optional instance to populate.
     * @return {module:model/NewCampaignCollection} The populated <code>NewCampaignCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCampaignCollection();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A short description of the purpose of this collection.
 * @member {String} description
 */
NewCampaignCollection.prototype['description'] = undefined;

/**
 * The name of this collection.
 * @member {String} name
 */
NewCampaignCollection.prototype['name'] = undefined;






export default NewCampaignCollection;

