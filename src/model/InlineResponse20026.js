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
import ApplicationSession from './ApplicationSession';

/**
 * The InlineResponse20026 model module.
 * @module model/InlineResponse20026
 * @version 5.0.1
 */
class InlineResponse20026 {
    /**
     * Constructs a new <code>InlineResponse20026</code>.
     * @alias module:model/InlineResponse20026
     * @param data {Array.<module:model/ApplicationSession>} 
     */
    constructor(data) { 
        
        InlineResponse20026.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20026} obj Optional instance to populate.
     * @return {module:model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20026();

            if (data.hasOwnProperty('hasMore')) {
                obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ApplicationSession]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} hasMore
 */
InlineResponse20026.prototype['hasMore'] = undefined;

/**
 * @member {Array.<module:model/ApplicationSession>} data
 */
InlineResponse20026.prototype['data'] = undefined;






export default InlineResponse20026;

