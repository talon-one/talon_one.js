/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The CampaignSearch model module.
 * @module model/CampaignSearch
 * @version 5.0.0
 */
class CampaignSearch {
    /**
     * Constructs a new <code>CampaignSearch</code>.
     * @alias module:model/CampaignSearch
     * @param attributes {Object} Properties to match against a campaign. All provided attributes will be exactly matched against campaign attributes.
     */
    constructor(attributes) { 
        
        CampaignSearch.initialize(this, attributes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attributes) { 
        obj['attributes'] = attributes;
    }

    /**
     * Constructs a <code>CampaignSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSearch} obj Optional instance to populate.
     * @return {module:model/CampaignSearch} The populated <code>CampaignSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignSearch();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
        }
        return obj;
    }


}

/**
 * Properties to match against a campaign. All provided attributes will be exactly matched against campaign attributes.
 * @member {Object} attributes
 */
CampaignSearch.prototype['attributes'] = undefined;






export default CampaignSearch;

