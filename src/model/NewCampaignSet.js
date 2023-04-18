/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
import CampaignSetBranchNode from './CampaignSetBranchNode';

/**
 * The NewCampaignSet model module.
 * @module model/NewCampaignSet
 * @version 5.0.0
 */
class NewCampaignSet {
    /**
     * Constructs a new <code>NewCampaignSet</code>.
     * 
     * @alias module:model/NewCampaignSet
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param version {Number} Version of the campaign set.
     * @param set {module:model/CampaignSetBranchNode} 
     */
    constructor(applicationId, version, set) { 
        
        NewCampaignSet.initialize(this, applicationId, version, set);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationId, version, set) { 
        obj['applicationId'] = applicationId;
        obj['version'] = version;
        obj['set'] = set;
    }

    /**
     * Constructs a <code>NewCampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignSet} obj Optional instance to populate.
     * @return {module:model/NewCampaignSet} The populated <code>NewCampaignSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCampaignSet();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('set')) {
                obj['set'] = CampaignSetBranchNode.constructFromObject(data['set']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
NewCampaignSet.prototype['applicationId'] = undefined;

/**
 * Version of the campaign set.
 * @member {Number} version
 */
NewCampaignSet.prototype['version'] = undefined;

/**
 * @member {module:model/CampaignSetBranchNode} set
 */
NewCampaignSet.prototype['set'] = undefined;






export default NewCampaignSet;

