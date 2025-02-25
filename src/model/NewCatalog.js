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
 * The NewCatalog model module.
 * @module model/NewCatalog
 * @version 11.0.0
 */
class NewCatalog {
    /**
     * Constructs a new <code>NewCatalog</code>.
     * @alias module:model/NewCatalog
     * @param name {String} The cart item catalog name.
     * @param description {String} A description of this cart item catalog.
     */
    constructor(name, description) { 
        
        NewCatalog.initialize(this, name, description);
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
     * Constructs a <code>NewCatalog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCatalog} obj Optional instance to populate.
     * @return {module:model/NewCatalog} The populated <code>NewCatalog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCatalog();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The cart item catalog name.
 * @member {String} name
 */
NewCatalog.prototype['name'] = undefined;

/**
 * A description of this cart item catalog.
 * @member {String} description
 */
NewCatalog.prototype['description'] = undefined;

/**
 * A list of the IDs of the applications that are subscribed to this catalog.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
NewCatalog.prototype['subscribedApplicationsIds'] = undefined;






export default NewCatalog;

