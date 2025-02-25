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
import ApplicationReferee from './ApplicationReferee';

/**
 * The InlineResponse20033 model module.
 * @module model/InlineResponse20033
 * @version 11.0.0
 */
class InlineResponse20033 {
    /**
     * Constructs a new <code>InlineResponse20033</code>.
     * @alias module:model/InlineResponse20033
     * @param data {Array.<module:model/ApplicationReferee>} 
     */
    constructor(data) { 
        
        InlineResponse20033.initialize(this, data);
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
     * Constructs a <code>InlineResponse20033</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20033} obj Optional instance to populate.
     * @return {module:model/InlineResponse20033} The populated <code>InlineResponse20033</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20033();

            if (data.hasOwnProperty('hasMore')) {
                obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
            }
            if (data.hasOwnProperty('totalResultSize')) {
                obj['totalResultSize'] = ApiClient.convertToType(data['totalResultSize'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ApplicationReferee]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} hasMore
 */
InlineResponse20033.prototype['hasMore'] = undefined;

/**
 * @member {Number} totalResultSize
 */
InlineResponse20033.prototype['totalResultSize'] = undefined;

/**
 * @member {Array.<module:model/ApplicationReferee>} data
 */
InlineResponse20033.prototype['data'] = undefined;






export default InlineResponse20033;

