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
import Product from './Product';

/**
 * The AddItemCatalogAction model module.
 * @module model/AddItemCatalogAction
 * @version 11.0.0
 */
class AddItemCatalogAction {
    /**
     * Constructs a new <code>AddItemCatalogAction</code>.
     * The specific properties of the \&quot;ADD\&quot; catalog sync action. 
     * @alias module:model/AddItemCatalogAction
     * @param sku {String} The unique SKU of the item to add.
     */
    constructor(sku) { 
        
        AddItemCatalogAction.initialize(this, sku);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sku) { 
        obj['sku'] = sku;
    }

    /**
     * Constructs a <code>AddItemCatalogAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddItemCatalogAction} obj Optional instance to populate.
     * @return {module:model/AddItemCatalogAction} The populated <code>AddItemCatalogAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddItemCatalogAction();

            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = Product.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('replaceIfExists')) {
                obj['replaceIfExists'] = ApiClient.convertToType(data['replaceIfExists'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The unique SKU of the item to add.
 * @member {String} sku
 */
AddItemCatalogAction.prototype['sku'] = undefined;

/**
 * Price of the item.
 * @member {Number} price
 */
AddItemCatalogAction.prototype['price'] = undefined;

/**
 * The attributes of the item to add.
 * @member {Object} attributes
 */
AddItemCatalogAction.prototype['attributes'] = undefined;

/**
 * @member {module:model/Product} product
 */
AddItemCatalogAction.prototype['product'] = undefined;

/**
 * Indicates whether to replace the attributes of the item if the same SKU exists.  **Note**: When set to `true`:   - If you do not provide a new `price` value, the existing `price` value is retained.   - If you do not provide a new `product` value, the `product` value is set to `null`. 
 * @member {Boolean} replaceIfExists
 * @default false
 */
AddItemCatalogAction.prototype['replaceIfExists'] = false;






export default AddItemCatalogAction;

