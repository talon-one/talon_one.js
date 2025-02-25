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
 * The ShowBundleMetadataEffectProps model module.
 * @module model/ShowBundleMetadataEffectProps
 * @version 11.0.0
 */
class ShowBundleMetadataEffectProps {
    /**
     * Constructs a new <code>ShowBundleMetadataEffectProps</code>.
     * This effect is **deprecated**. The properties specific to the \&quot;ShowBundleMetadata\&quot; effect. This effect contains information that allows you to associate the discounts from a rule in a bundle campaign with specific cart items. This way you can distinguish from \&quot;normal\&quot; discounts that were not the result of a product bundle. 
     * @alias module:model/ShowBundleMetadataEffectProps
     * @param description {String} Description of the product bundle.
     * @param bundleAttributes {Array.<String>} The cart item attributes that determined which items are being bundled together.
     * @param itemsIndices {Array.<Number>} The indices in the cart items array of the bundled items.
     */
    constructor(description, bundleAttributes, itemsIndices) { 
        
        ShowBundleMetadataEffectProps.initialize(this, description, bundleAttributes, itemsIndices);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, bundleAttributes, itemsIndices) { 
        obj['description'] = description;
        obj['bundleAttributes'] = bundleAttributes;
        obj['itemsIndices'] = itemsIndices;
    }

    /**
     * Constructs a <code>ShowBundleMetadataEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowBundleMetadataEffectProps} obj Optional instance to populate.
     * @return {module:model/ShowBundleMetadataEffectProps} The populated <code>ShowBundleMetadataEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShowBundleMetadataEffectProps();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('bundleAttributes')) {
                obj['bundleAttributes'] = ApiClient.convertToType(data['bundleAttributes'], ['String']);
            }
            if (data.hasOwnProperty('itemsIndices')) {
                obj['itemsIndices'] = ApiClient.convertToType(data['itemsIndices'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Description of the product bundle.
 * @member {String} description
 */
ShowBundleMetadataEffectProps.prototype['description'] = undefined;

/**
 * The cart item attributes that determined which items are being bundled together.
 * @member {Array.<String>} bundleAttributes
 */
ShowBundleMetadataEffectProps.prototype['bundleAttributes'] = undefined;

/**
 * The indices in the cart items array of the bundled items.
 * @member {Array.<Number>} itemsIndices
 */
ShowBundleMetadataEffectProps.prototype['itemsIndices'] = undefined;






export default ShowBundleMetadataEffectProps;

