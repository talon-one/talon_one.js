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
 * The AnalyticsProduct model module.
 * @module model/AnalyticsProduct
 * @version 11.0.0
 */
class AnalyticsProduct {
    /**
     * Constructs a new <code>AnalyticsProduct</code>.
     * @alias module:model/AnalyticsProduct
     * @param id {Number} The ID of the analytics-level product.
     * @param isPreliminary {Boolean} Indicates whether the analytics-level product is connected to a catalog and also has a product name.
     * @param name {String} The name of the analytics-level product.
     */
    constructor(id, isPreliminary, name) { 
        
        AnalyticsProduct.initialize(this, id, isPreliminary, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, isPreliminary, name) { 
        obj['id'] = id;
        obj['isPreliminary'] = isPreliminary;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AnalyticsProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyticsProduct} obj Optional instance to populate.
     * @return {module:model/AnalyticsProduct} The populated <code>AnalyticsProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsProduct();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('isPreliminary')) {
                obj['isPreliminary'] = ApiClient.convertToType(data['isPreliminary'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('catalogId')) {
                obj['catalogId'] = ApiClient.convertToType(data['catalogId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the analytics-level product.
 * @member {Number} id
 */
AnalyticsProduct.prototype['id'] = undefined;

/**
 * Indicates whether the analytics-level product is connected to a catalog and also has a product name.
 * @member {Boolean} isPreliminary
 */
AnalyticsProduct.prototype['isPreliminary'] = undefined;

/**
 * The name of the analytics-level product.
 * @member {String} name
 */
AnalyticsProduct.prototype['name'] = undefined;

/**
 * The ID of the catalog. You can find the ID in the Campaign Manager in **Account** > **Tools** > **Cart item catalogs**. 
 * @member {Number} catalogId
 */
AnalyticsProduct.prototype['catalogId'] = undefined;






export default AnalyticsProduct;

