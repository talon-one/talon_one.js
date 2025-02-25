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
 * The RollbackIncreasedAchievementProgressEffectProps model module.
 * @module model/RollbackIncreasedAchievementProgressEffectProps
 * @version 11.0.0
 */
class RollbackIncreasedAchievementProgressEffectProps {
    /**
     * Constructs a new <code>RollbackIncreasedAchievementProgressEffectProps</code>.
     * The properties specific to the \&quot;rollbackIncreasedAchievementProgress\&quot; effect. This gets triggered whenever a closed session where the &#x60;increaseAchievementProgress&#x60; effect was triggered is cancelled. This is applicable only when the customer has not completed the achievement.
     * @alias module:model/RollbackIncreasedAchievementProgressEffectProps
     * @param achievementId {Number} The internal ID of the achievement.
     * @param achievementName {String} The name of the achievement.
     * @param progressTrackerId {Number} The internal ID of the achievement progress tracker.
     * @param decreaseProgressBy {Number} The value by which the customer's current progress in the achievement is decreased.
     * @param currentProgress {Number} The current progress of the customer in the achievement.
     * @param target {Number} The target value to complete the achievement.
     */
    constructor(achievementId, achievementName, progressTrackerId, decreaseProgressBy, currentProgress, target) { 
        
        RollbackIncreasedAchievementProgressEffectProps.initialize(this, achievementId, achievementName, progressTrackerId, decreaseProgressBy, currentProgress, target);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, achievementId, achievementName, progressTrackerId, decreaseProgressBy, currentProgress, target) { 
        obj['achievementId'] = achievementId;
        obj['achievementName'] = achievementName;
        obj['progressTrackerId'] = progressTrackerId;
        obj['decreaseProgressBy'] = decreaseProgressBy;
        obj['currentProgress'] = currentProgress;
        obj['target'] = target;
    }

    /**
     * Constructs a <code>RollbackIncreasedAchievementProgressEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackIncreasedAchievementProgressEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackIncreasedAchievementProgressEffectProps} The populated <code>RollbackIncreasedAchievementProgressEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RollbackIncreasedAchievementProgressEffectProps();

            if (data.hasOwnProperty('achievementId')) {
                obj['achievementId'] = ApiClient.convertToType(data['achievementId'], 'Number');
            }
            if (data.hasOwnProperty('achievementName')) {
                obj['achievementName'] = ApiClient.convertToType(data['achievementName'], 'String');
            }
            if (data.hasOwnProperty('progressTrackerId')) {
                obj['progressTrackerId'] = ApiClient.convertToType(data['progressTrackerId'], 'Number');
            }
            if (data.hasOwnProperty('decreaseProgressBy')) {
                obj['decreaseProgressBy'] = ApiClient.convertToType(data['decreaseProgressBy'], 'Number');
            }
            if (data.hasOwnProperty('currentProgress')) {
                obj['currentProgress'] = ApiClient.convertToType(data['currentProgress'], 'Number');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The internal ID of the achievement.
 * @member {Number} achievementId
 */
RollbackIncreasedAchievementProgressEffectProps.prototype['achievementId'] = undefined;

/**
 * The name of the achievement.
 * @member {String} achievementName
 */
RollbackIncreasedAchievementProgressEffectProps.prototype['achievementName'] = undefined;

/**
 * The internal ID of the achievement progress tracker.
 * @member {Number} progressTrackerId
 */
RollbackIncreasedAchievementProgressEffectProps.prototype['progressTrackerId'] = undefined;

/**
 * The value by which the customer's current progress in the achievement is decreased.
 * @member {Number} decreaseProgressBy
 */
RollbackIncreasedAchievementProgressEffectProps.prototype['decreaseProgressBy'] = undefined;

/**
 * The current progress of the customer in the achievement.
 * @member {Number} currentProgress
 */
RollbackIncreasedAchievementProgressEffectProps.prototype['currentProgress'] = undefined;

/**
 * The target value to complete the achievement.
 * @member {Number} target
 */
RollbackIncreasedAchievementProgressEffectProps.prototype['target'] = undefined;






export default RollbackIncreasedAchievementProgressEffectProps;

