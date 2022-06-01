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
import Binding from './Binding';
import LimitConfig from './LimitConfig';

/**
 * The CreateTemplateCampaign model module.
 * @module model/CreateTemplateCampaign
 * @version 4.5.0
 */
class CreateTemplateCampaign {
    /**
     * Constructs a new <code>CreateTemplateCampaign</code>.
     * @alias module:model/CreateTemplateCampaign
     * @param name {String} A user-facing name for this campaign.
     * @param templateId {Number} The ID of the Campaign Template which will be used in order to create the Campaign.
     */
    constructor(name, templateId) { 
        
        CreateTemplateCampaign.initialize(this, name, templateId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, templateId) { 
        obj['name'] = name;
        obj['templateId'] = templateId;
    }

    /**
     * Constructs a <code>CreateTemplateCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTemplateCampaign} obj Optional instance to populate.
     * @return {module:model/CreateTemplateCampaign} The populated <code>CreateTemplateCampaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTemplateCampaign();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
            }
            if (data.hasOwnProperty('campaignAttributesOverrides')) {
                obj['campaignAttributesOverrides'] = ApiClient.convertToType(data['campaignAttributesOverrides'], Object);
            }
            if (data.hasOwnProperty('templateParamValues')) {
                obj['templateParamValues'] = ApiClient.convertToType(data['templateParamValues'], [Binding]);
            }
            if (data.hasOwnProperty('limitOverrides')) {
                obj['limitOverrides'] = ApiClient.convertToType(data['limitOverrides'], [LimitConfig]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A user-facing name for this campaign.
 * @member {String} name
 */
CreateTemplateCampaign.prototype['name'] = undefined;

/**
 * A detailed description of the campaign.
 * @member {String} description
 */
CreateTemplateCampaign.prototype['description'] = undefined;

/**
 * The ID of the Campaign Template which will be used in order to create the Campaign.
 * @member {Number} templateId
 */
CreateTemplateCampaign.prototype['templateId'] = undefined;

/**
 * Custom Campaign Attributes. If the Campaign Template defines the same values, they will be overridden.
 * @member {Object} campaignAttributesOverrides
 */
CreateTemplateCampaign.prototype['campaignAttributesOverrides'] = undefined;

/**
 * Actual values to replace the template placeholder values in the Ruleset bindings. Values for all Template Parameters must be provided.
 * @member {Array.<module:model/Binding>} templateParamValues
 */
CreateTemplateCampaign.prototype['templateParamValues'] = undefined;

/**
 * Limits for this Campaign. If the Campaign Template or Application define default values for the same limits, they will be overridden.
 * @member {Array.<module:model/LimitConfig>} limitOverrides
 */
CreateTemplateCampaign.prototype['limitOverrides'] = undefined;

/**
 * A list of tags for the campaign. If the campaign template has tags, they will be overridden by this list.
 * @member {Array.<String>} tags
 */
CreateTemplateCampaign.prototype['tags'] = undefined;






export default CreateTemplateCampaign;
