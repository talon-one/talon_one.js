/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
import Coupon from './Coupon';

/**
 * The InlineResponse2007 model module.
 * @module model/InlineResponse2007
 * @version 5.0.0
 */
class InlineResponse2007 {
    /**
     * Constructs a new <code>InlineResponse2007</code>.
     * @alias module:model/InlineResponse2007
     * @param hasMore {Boolean} 
     * @param data {Array.<module:model/Coupon>} 
     */
    constructor(hasMore, data) { 
        
        InlineResponse2007.initialize(this, hasMore, data);
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
     * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007();

            if (data.hasOwnProperty('hasMore')) {
                obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Coupon]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} hasMore
 */
InlineResponse2007.prototype['hasMore'] = undefined;

/**
 * @member {Array.<module:model/Coupon>} data
 */
InlineResponse2007.prototype['data'] = undefined;






export default InlineResponse2007;

