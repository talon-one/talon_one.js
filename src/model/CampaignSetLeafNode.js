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
 * The CampaignSetLeafNode model module.
 * @module model/CampaignSetLeafNode
 * @version 9.0.0
 */
class CampaignSetLeafNode {
    /**
     * Constructs a new <code>CampaignSetLeafNode</code>.
     * @alias module:model/CampaignSetLeafNode
     * @param type {module:model/CampaignSetLeafNode.TypeEnum} Indicates the node type.
     * @param campaignId {Number} ID of the campaign
     */
    constructor(type, campaignId) { 
        
        CampaignSetLeafNode.initialize(this, type, campaignId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, campaignId) { 
        obj['type'] = type;
        obj['campaignId'] = campaignId;
    }

    /**
     * Constructs a <code>CampaignSetLeafNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetLeafNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetLeafNode} The populated <code>CampaignSetLeafNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignSetLeafNode();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Indicates the node type.
 * @member {module:model/CampaignSetLeafNode.TypeEnum} type
 */
CampaignSetLeafNode.prototype['type'] = undefined;

/**
 * ID of the campaign
 * @member {Number} campaignId
 */
CampaignSetLeafNode.prototype['campaignId'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignSetLeafNode['TypeEnum'] = {

    /**
     * value: "CAMPAIGN"
     * @const
     */
    "CAMPAIGN": "CAMPAIGN"
};



export default CampaignSetLeafNode;

