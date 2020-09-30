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
import CartItemAdjustment from './CartItemAdjustment';

/**
 * The CartItem model module.
 * @module model/CartItem
 * @version 4.2.0
 */
class CartItem {
    /**
     * Constructs a new <code>CartItem</code>.
     * @alias module:model/CartItem
     * @param name {String} 
     * @param sku {String} 
     * @param quantity {Number} 
     * @param price {Number} 
     */
    constructor(name, sku, quantity, price) { 
        
        CartItem.initialize(this, name, sku, quantity, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, sku, quantity, price) { 
        obj['name'] = name;
        obj['sku'] = sku;
        obj['quantity'] = quantity;
        obj['price'] = price;
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
            if (data.hasOwnProperty('adjustment')) {
                obj['adjustment'] = CartItemAdjustment.constructFromObject(data['adjustment']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CartItem.prototype['name'] = undefined;

/**
 * @member {String} sku
 */
CartItem.prototype['sku'] = undefined;

/**
 * @member {Number} quantity
 */
CartItem.prototype['quantity'] = undefined;

/**
 * @member {Number} price
 */
CartItem.prototype['price'] = undefined;

/**
 * @member {String} category
 */
CartItem.prototype['category'] = undefined;

/**
 * Weight of item in mm
 * @member {Number} weight
 */
CartItem.prototype['weight'] = undefined;

/**
 * Height of item in mm
 * @member {Number} height
 */
CartItem.prototype['height'] = undefined;

/**
 * Width of item in mm
 * @member {Number} width
 */
CartItem.prototype['width'] = undefined;

/**
 * Length of item in mm
 * @member {Number} length
 */
CartItem.prototype['length'] = undefined;

/**
 * Position of the Cart Item in the Cart (calculated internally)
 * @member {Number} position
 */
CartItem.prototype['position'] = undefined;

/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */
CartItem.prototype['attributes'] = undefined;

/**
 * @member {module:model/CartItemAdjustment} adjustment
 */
CartItem.prototype['adjustment'] = undefined;






export default CartItem;

