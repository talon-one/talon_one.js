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
import CampaignSetIDs from './CampaignSetIDs';

/**
 * The CampaignPrioritiesV2 model module.
 * @module model/CampaignPrioritiesV2
 * @version 4.6.0
 */
class CampaignPrioritiesV2 {
    /**
     * Constructs a new <code>CampaignPrioritiesV2</code>.
     * @alias module:model/CampaignPrioritiesV2
     */
    constructor() { 
        
        CampaignPrioritiesV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CampaignPrioritiesV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignPrioritiesV2} obj Optional instance to populate.
     * @return {module:model/CampaignPrioritiesV2} The populated <code>CampaignPrioritiesV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignPrioritiesV2();

            if (data.hasOwnProperty('exclusive')) {
                obj['exclusive'] = ApiClient.convertToType(data['exclusive'], [CampaignSetIDs]);
            }
            if (data.hasOwnProperty('stackable')) {
                obj['stackable'] = ApiClient.convertToType(data['stackable'], [CampaignSetIDs]);
            }
            if (data.hasOwnProperty('universal')) {
                obj['universal'] = ApiClient.convertToType(data['universal'], [CampaignSetIDs]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CampaignSetIDs>} exclusive
 */
CampaignPrioritiesV2.prototype['exclusive'] = undefined;

/**
 * @member {Array.<module:model/CampaignSetIDs>} stackable
 */
CampaignPrioritiesV2.prototype['stackable'] = undefined;

/**
 * @member {Array.<module:model/CampaignSetIDs>} universal
 */
CampaignPrioritiesV2.prototype['universal'] = undefined;






export default CampaignPrioritiesV2;

