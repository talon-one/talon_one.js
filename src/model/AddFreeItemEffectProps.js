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

/**
 * The AddFreeItemEffectProps model module.
 * @module model/AddFreeItemEffectProps
 * @version 1.0.0
 */
class AddFreeItemEffectProps {
    /**
     * Constructs a new <code>AddFreeItemEffectProps</code>.
     * The properties specific to the \&quot;addFreeItem\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;add free item\&quot; effect.
     * @alias module:model/AddFreeItemEffectProps
     * @param sku {String} SKU of the item that needs to be added
     * @param name {String} The name/description of the effect
     */
    constructor(sku, name) { 
        
        AddFreeItemEffectProps.initialize(this, sku, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sku, name) { 
        obj['sku'] = sku;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AddFreeItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFreeItemEffectProps} obj Optional instance to populate.
     * @return {module:model/AddFreeItemEffectProps} The populated <code>AddFreeItemEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFreeItemEffectProps();

            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * SKU of the item that needs to be added
 * @member {String} sku
 */
AddFreeItemEffectProps.prototype['sku'] = undefined;

/**
 * The name/description of the effect
 * @member {String} name
 */
AddFreeItemEffectProps.prototype['name'] = undefined;






export default AddFreeItemEffectProps;
