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
import ApplicationCustomer from './ApplicationCustomer';

/**
 * The InlineResponse20013 model module.
 * @module model/InlineResponse20013
 * @version 4.3.0
 */
class InlineResponse20013 {
    /**
     * Constructs a new <code>InlineResponse20013</code>.
     * @alias module:model/InlineResponse20013
     * @param hasMore {Boolean} 
     * @param data {Array.<module:model/ApplicationCustomer>} 
     */
    constructor(hasMore, data) { 
        
        InlineResponse20013.initialize(this, hasMore, data);
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
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013();

            if (data.hasOwnProperty('hasMore')) {
                obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ApplicationCustomer]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} hasMore
 */
InlineResponse20013.prototype['hasMore'] = undefined;

/**
 * @member {Array.<module:model/ApplicationCustomer>} data
 */
InlineResponse20013.prototype['data'] = undefined;






export default InlineResponse20013;

