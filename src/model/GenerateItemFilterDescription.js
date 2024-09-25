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
 * The GenerateItemFilterDescription model module.
 * @module model/GenerateItemFilterDescription
 * @version 9.0.0
 */
class GenerateItemFilterDescription {
    /**
     * Constructs a new <code>GenerateItemFilterDescription</code>.
     * @alias module:model/GenerateItemFilterDescription
     * @param itemFilter {Array.<Object>} An array of item filter Talang expressions.
     */
    constructor(itemFilter) { 
        
        GenerateItemFilterDescription.initialize(this, itemFilter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemFilter) { 
        obj['itemFilter'] = itemFilter;
    }

    /**
     * Constructs a <code>GenerateItemFilterDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateItemFilterDescription} obj Optional instance to populate.
     * @return {module:model/GenerateItemFilterDescription} The populated <code>GenerateItemFilterDescription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateItemFilterDescription();

            if (data.hasOwnProperty('itemFilter')) {
                obj['itemFilter'] = ApiClient.convertToType(data['itemFilter'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * An array of item filter Talang expressions.
 * @member {Array.<Object>} itemFilter
 */
GenerateItemFilterDescription.prototype['itemFilter'] = undefined;






export default GenerateItemFilterDescription;

