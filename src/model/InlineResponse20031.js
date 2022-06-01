/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
import Role from './Role';

/**
 * The InlineResponse20031 model module.
 * @module model/InlineResponse20031
 * @version 4.5.0
 */
class InlineResponse20031 {
    /**
     * Constructs a new <code>InlineResponse20031</code>.
     * @alias module:model/InlineResponse20031
     * @param totalResultSize {Number} 
     * @param data {Array.<module:model/Role>} 
     */
    constructor(totalResultSize, data) { 
        
        InlineResponse20031.initialize(this, totalResultSize, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalResultSize, data) { 
        obj['totalResultSize'] = totalResultSize;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineResponse20031</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20031} obj Optional instance to populate.
     * @return {module:model/InlineResponse20031} The populated <code>InlineResponse20031</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20031();

            if (data.hasOwnProperty('totalResultSize')) {
                obj['totalResultSize'] = ApiClient.convertToType(data['totalResultSize'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Role]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalResultSize
 */
InlineResponse20031.prototype['totalResultSize'] = undefined;

/**
 * @member {Array.<module:model/Role>} data
 */
InlineResponse20031.prototype['data'] = undefined;






export default InlineResponse20031;
