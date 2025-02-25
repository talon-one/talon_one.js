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
import CampaignSetBranchNode from './CampaignSetBranchNode';

/**
 * The CampaignSet model module.
 * @module model/CampaignSet
 * @version 11.0.0
 */
class CampaignSet {
    /**
     * Constructs a new <code>CampaignSet</code>.
     * @alias module:model/CampaignSet
     * @param applicationId {Number} The ID of the Application that owns this entity.
     * @param id {Number} Internal ID of this entity.
     * @param version {Number} Version of the campaign set.
     * @param set {module:model/CampaignSetBranchNode} 
     */
    constructor(applicationId, id, version, set) { 
        
        CampaignSet.initialize(this, applicationId, id, version, set);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationId, id, version, set) { 
        obj['applicationId'] = applicationId;
        obj['id'] = id;
        obj['version'] = version;
        obj['set'] = set;
    }

    /**
     * Constructs a <code>CampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSet} obj Optional instance to populate.
     * @return {module:model/CampaignSet} The populated <code>CampaignSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignSet();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('set')) {
                obj['set'] = CampaignSetBranchNode.constructFromObject(data['set']);
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the Application that owns this entity.
 * @member {Number} applicationId
 */
CampaignSet.prototype['applicationId'] = undefined;

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
CampaignSet.prototype['id'] = undefined;

/**
 * Version of the campaign set.
 * @member {Number} version
 */
CampaignSet.prototype['version'] = undefined;

/**
 * @member {module:model/CampaignSetBranchNode} set
 */
CampaignSet.prototype['set'] = undefined;

/**
 * Name of the user who last updated this campaign set, if available.
 * @member {String} updatedBy
 */
CampaignSet.prototype['updatedBy'] = undefined;






export default CampaignSet;

