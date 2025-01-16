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
import ItemAttribute from './ItemAttribute';
import Product from './Product';

/**
 * The CatalogItem model module.
 * @module model/CatalogItem
 * @version 10.0.0
 */
class CatalogItem {
    /**
     * Constructs a new <code>CatalogItem</code>.
     * @alias module:model/CatalogItem
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param sku {String} The stock keeping unit of the item.
     * @param catalogid {Number} The ID of the catalog the item belongs to.
     * @param version {Number} The version of the catalog item.
     */
    constructor(id, created, sku, catalogid, version) { 
        
        CatalogItem.initialize(this, id, created, sku, catalogid, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, sku, catalogid, version) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['sku'] = sku;
        obj['catalogid'] = catalogid;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>CatalogItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogItem} obj Optional instance to populate.
     * @return {module:model/CatalogItem} The populated <code>CatalogItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('catalogid')) {
                obj['catalogid'] = ApiClient.convertToType(data['catalogid'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [ItemAttribute]);
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = Product.constructFromObject(data['product']);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
CatalogItem.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
CatalogItem.prototype['created'] = undefined;

/**
 * The stock keeping unit of the item.
 * @member {String} sku
 */
CatalogItem.prototype['sku'] = undefined;

/**
 * Price of the item.
 * @member {Number} price
 */
CatalogItem.prototype['price'] = undefined;

/**
 * The ID of the catalog the item belongs to.
 * @member {Number} catalogid
 */
CatalogItem.prototype['catalogid'] = undefined;

/**
 * The version of the catalog item.
 * @member {Number} version
 */
CatalogItem.prototype['version'] = undefined;

/**
 * @member {Array.<module:model/ItemAttribute>} attributes
 */
CatalogItem.prototype['attributes'] = undefined;

/**
 * @member {module:model/Product} product
 */
CatalogItem.prototype['product'] = undefined;






export default CatalogItem;

