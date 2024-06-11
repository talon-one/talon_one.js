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
 * The AchievementAdditionalProperties model module.
 * @module model/AchievementAdditionalProperties
 * @version 8.0.0
 */
class AchievementAdditionalProperties {
    /**
     * Constructs a new <code>AchievementAdditionalProperties</code>.
     * @alias module:model/AchievementAdditionalProperties
     * @param campaignId {Number} ID of the campaign, to which the achievement belongs to
     * @param userId {Number} ID of the user that created this achievement.
     * @param createdBy {String} Name of the user that created the achievement.  **Note**: This is not available if the user has been deleted. 
     */
    constructor(campaignId, userId, createdBy) { 
        
        AchievementAdditionalProperties.initialize(this, campaignId, userId, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignId, userId, createdBy) { 
        obj['campaignId'] = campaignId;
        obj['userId'] = userId;
        obj['createdBy'] = createdBy;
    }

    /**
     * Constructs a <code>AchievementAdditionalProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementAdditionalProperties} obj Optional instance to populate.
     * @return {module:model/AchievementAdditionalProperties} The populated <code>AchievementAdditionalProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementAdditionalProperties();

            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('hasProgress')) {
                obj['hasProgress'] = ApiClient.convertToType(data['hasProgress'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * ID of the campaign, to which the achievement belongs to
 * @member {Number} campaignId
 */
AchievementAdditionalProperties.prototype['campaignId'] = undefined;

/**
 * ID of the user that created this achievement.
 * @member {Number} userId
 */
AchievementAdditionalProperties.prototype['userId'] = undefined;

/**
 * Name of the user that created the achievement.  **Note**: This is not available if the user has been deleted. 
 * @member {String} createdBy
 */
AchievementAdditionalProperties.prototype['createdBy'] = undefined;

/**
 * Indicates if a customer has made progress in the achievement.
 * @member {Boolean} hasProgress
 */
AchievementAdditionalProperties.prototype['hasProgress'] = undefined;






export default AchievementAdditionalProperties;
