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
import CatalogActionFilter from './CatalogActionFilter';

/**
 * The PatchManyItemsCatalogAction model module.
 * @module model/PatchManyItemsCatalogAction
 * @version 12.0.0
 */
class PatchManyItemsCatalogAction {
    /**
     * Constructs a new <code>PatchManyItemsCatalogAction</code>.
     * The specific properties of the \&quot;PATCH_MANY\&quot; catalog sync action.
     * @alias module:model/PatchManyItemsCatalogAction
     */
    constructor() { 
        
        PatchManyItemsCatalogAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchManyItemsCatalogAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchManyItemsCatalogAction} obj Optional instance to populate.
     * @return {module:model/PatchManyItemsCatalogAction} The populated <code>PatchManyItemsCatalogAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchManyItemsCatalogAction();

            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [CatalogActionFilter]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
        }
        return obj;
    }


}

/**
 * Price of the item.
 * @member {Number} price
 */
PatchManyItemsCatalogAction.prototype['price'] = undefined;

/**
 * The list of filters used to select the items to patch, joined by `AND`.  **Note:** Every item in the catalog will be modified if there are no filters. 
 * @member {Array.<module:model/CatalogActionFilter>} filters
 */
PatchManyItemsCatalogAction.prototype['filters'] = undefined;

/**
 * The attributes of the items to patch.
 * @member {Object} attributes
 */
PatchManyItemsCatalogAction.prototype['attributes'] = undefined;






export default PatchManyItemsCatalogAction;

