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
import LoyaltyCard from './LoyaltyCard';

/**
 * The InlineResponse20018 model module.
 * @module model/InlineResponse20018
 * @version 12.0.0
 */
class InlineResponse20018 {
    /**
     * Constructs a new <code>InlineResponse20018</code>.
     * @alias module:model/InlineResponse20018
     * @param hasMore {Boolean} 
     * @param data {Array.<module:model/LoyaltyCard>} 
     */
    constructor(hasMore, data) { 
        
        InlineResponse20018.initialize(this, hasMore, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hasMore, data) { 
        obj['hasMore'] = hasMore;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20018();

            if (data.hasOwnProperty('hasMore')) {
                obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LoyaltyCard]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} hasMore
 */
InlineResponse20018.prototype['hasMore'] = undefined;

/**
 * @member {Array.<module:model/LoyaltyCard>} data
 */
InlineResponse20018.prototype['data'] = undefined;






export default InlineResponse20018;

