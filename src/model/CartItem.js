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
import AdditionalCost from './AdditionalCost';

/**
 * The CartItem model module.
 * @module model/CartItem
 * @version 5.0.0
 */
class CartItem {
    /**
     * Constructs a new <code>CartItem</code>.
     * @alias module:model/CartItem
     * @param sku {String} Stock keeping unit of item.
     * @param quantity {Number} Quantity of item. **Important:** If you enabled [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation#flattening), the quantity is always one and the same cart item might receive multiple per-item discounts. Ensure you can process multiple discounts on one cart item correctly. 
     */
    constructor(sku, quantity) { 
        
        CartItem.initialize(this, sku, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sku, quantity) { 
        obj['sku'] = sku;
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartItem} obj Optional instance to populate.
     * @return {module:model/CartItem} The populated <code>CartItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItem();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('returnedQuantity')) {
                obj['returnedQuantity'] = ApiClient.convertToType(data['returnedQuantity'], 'Number');
            }
            if (data.hasOwnProperty('remainingQuantity')) {
                obj['remainingQuantity'] = ApiClient.convertToType(data['remainingQuantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('additionalCosts')) {
                obj['additionalCosts'] = ApiClient.convertToType(data['additionalCosts'], {'String': AdditionalCost});
            }
            if (data.hasOwnProperty('catalogItemID')) {
                obj['catalogItemID'] = ApiClient.convertToType(data['catalogItemID'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name of item.
 * @member {String} name
 */
CartItem.prototype['name'] = undefined;

/**
 * Stock keeping unit of item.
 * @member {String} sku
 */
CartItem.prototype['sku'] = undefined;

/**
 * Quantity of item. **Important:** If you enabled [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation#flattening), the quantity is always one and the same cart item might receive multiple per-item discounts. Ensure you can process multiple discounts on one cart item correctly. 
 * @member {Number} quantity
 */
CartItem.prototype['quantity'] = undefined;

/**
 * Number of returned items, calculated internally based on returns of this item.
 * @member {Number} returnedQuantity
 */
CartItem.prototype['returnedQuantity'] = undefined;

/**
 * Remaining quantity of the item, calculated internally based on returns of this item.
 * @member {Number} remainingQuantity
 */
CartItem.prototype['remainingQuantity'] = undefined;

/**
 * Price of the item in the currency defined by your Application. This field is required if this item is not part of a [catalog](https://docs.talon.one/docs/product/account/dev-tools/managing-cart-item-catalogs). If it is part of a catalog, setting a price here overrides the price from the catalog. 
 * @member {Number} price
 */
CartItem.prototype['price'] = undefined;

/**
 * Type, group or model of the item.
 * @member {String} category
 */
CartItem.prototype['category'] = undefined;

/**
 * Weight of item in grams.
 * @member {Number} weight
 */
CartItem.prototype['weight'] = undefined;

/**
 * Height of item in mm.
 * @member {Number} height
 */
CartItem.prototype['height'] = undefined;

/**
 * Width of item in mm.
 * @member {Number} width
 */
CartItem.prototype['width'] = undefined;

/**
 * Length of item in mm.
 * @member {Number} length
 */
CartItem.prototype['length'] = undefined;

/**
 * Position of the Cart Item in the Cart (calculated internally).
 * @member {Number} position
 */
CartItem.prototype['position'] = undefined;

/**
 * Use this property to set a value for the attributes of your choice. [Attributes](https://docs.talon.one/docs/dev/concepts/attributes) represent any information to attach to this cart item.  Custom _cart item_ attributes must be created in the Campaign Manager before you set them with this property. 
 * @member {Object} attributes
 */
CartItem.prototype['attributes'] = undefined;

/**
 * Use this property to set a value for the additional costs of this item, such as a shipping cost. They must be created in the Campaign Manager before you set them with this property. See [Managing additional costs](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs). 
 * @member {Object.<String, module:model/AdditionalCost>} additionalCosts
 */
CartItem.prototype['additionalCosts'] = undefined;

/**
 * The [catalog item ID](https://docs.talon.one/docs/product/account/dev-tools/managing-cart-item-catalogs/#synchronizing-cart-item-catalogs).
 * @member {Number} catalogItemID
 */
CartItem.prototype['catalogItemID'] = undefined;






export default CartItem;

