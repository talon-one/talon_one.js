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
 * The AchievementProgress model module.
 * @module model/AchievementProgress
 * @version 11.0.0
 */
class AchievementProgress {
    /**
     * Constructs a new <code>AchievementProgress</code>.
     * The current progress of the customer in the achievement.
     * @alias module:model/AchievementProgress
     * @param achievementId {Number} The internal ID of the achievement.
     * @param name {String} The internal name of the achievement used in API requests. 
     * @param title {String} The display name of the achievement in the Campaign Manager.
     * @param description {String} The description of the achievement in the Campaign Manager.
     * @param campaignId {Number} The ID of the campaign the achievement belongs to.
     * @param status {module:model/AchievementProgress.StatusEnum} The status of the achievement.
     * @param achievementRecurrencePolicy {module:model/AchievementProgress.AchievementRecurrencePolicyEnum} The policy that determines if and how the achievement recurs. - `no_recurrence`: The achievement can be completed only once. - `on_expiration`: The achievement resets after it expires and becomes available again. 
     * @param achievementActivationPolicy {module:model/AchievementProgress.AchievementActivationPolicyEnum} The policy that determines how the achievement starts, ends, or resets. - `user_action`: The achievement ends or resets relative to when the customer started the achievement. - `fixed_schedule`: The achievement starts, ends, or resets for all customers following a fixed schedule. 
     * @param progress {Number} The current progress of the customer in the achievement.
     * @param startDate {Date} Timestamp at which the customer started the achievement.
     * @param endDate {Date} Timestamp at which point the achievement ends and resets for the customer.
     */
    constructor(achievementId, name, title, description, campaignId, status, achievementRecurrencePolicy, achievementActivationPolicy, progress, startDate, endDate) { 
        
        AchievementProgress.initialize(this, achievementId, name, title, description, campaignId, status, achievementRecurrencePolicy, achievementActivationPolicy, progress, startDate, endDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, achievementId, name, title, description, campaignId, status, achievementRecurrencePolicy, achievementActivationPolicy, progress, startDate, endDate) { 
        obj['achievementId'] = achievementId;
        obj['name'] = name;
        obj['title'] = title;
        obj['description'] = description;
        obj['campaignId'] = campaignId;
        obj['status'] = status;
        obj['achievementRecurrencePolicy'] = achievementRecurrencePolicy;
        obj['achievementActivationPolicy'] = achievementActivationPolicy;
        obj['progress'] = progress;
        obj['startDate'] = startDate;
        obj['endDate'] = endDate;
    }

    /**
     * Constructs a <code>AchievementProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementProgress} obj Optional instance to populate.
     * @return {module:model/AchievementProgress} The populated <code>AchievementProgress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementProgress();

            if (data.hasOwnProperty('achievementId')) {
                obj['achievementId'] = ApiClient.convertToType(data['achievementId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'Number');
            }
            if (data.hasOwnProperty('achievementRecurrencePolicy')) {
                obj['achievementRecurrencePolicy'] = ApiClient.convertToType(data['achievementRecurrencePolicy'], 'String');
            }
            if (data.hasOwnProperty('achievementActivationPolicy')) {
                obj['achievementActivationPolicy'] = ApiClient.convertToType(data['achievementActivationPolicy'], 'String');
            }
            if (data.hasOwnProperty('achievementFixedStartDate')) {
                obj['achievementFixedStartDate'] = ApiClient.convertToType(data['achievementFixedStartDate'], 'Date');
            }
            if (data.hasOwnProperty('achievementEndDate')) {
                obj['achievementEndDate'] = ApiClient.convertToType(data['achievementEndDate'], 'Date');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('completionDate')) {
                obj['completionDate'] = ApiClient.convertToType(data['completionDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('optinDate')) {
                obj['optinDate'] = ApiClient.convertToType(data['optinDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The internal ID of the achievement.
 * @member {Number} achievementId
 */
AchievementProgress.prototype['achievementId'] = undefined;

/**
 * The internal name of the achievement used in API requests. 
 * @member {String} name
 */
AchievementProgress.prototype['name'] = undefined;

/**
 * The display name of the achievement in the Campaign Manager.
 * @member {String} title
 */
AchievementProgress.prototype['title'] = undefined;

/**
 * The description of the achievement in the Campaign Manager.
 * @member {String} description
 */
AchievementProgress.prototype['description'] = undefined;

/**
 * The ID of the campaign the achievement belongs to.
 * @member {Number} campaignId
 */
AchievementProgress.prototype['campaignId'] = undefined;

/**
 * The status of the achievement.
 * @member {module:model/AchievementProgress.StatusEnum} status
 */
AchievementProgress.prototype['status'] = undefined;

/**
 * The required number of actions or the transactional milestone to complete the achievement.
 * @member {Number} target
 */
AchievementProgress.prototype['target'] = undefined;

/**
 * The policy that determines if and how the achievement recurs. - `no_recurrence`: The achievement can be completed only once. - `on_expiration`: The achievement resets after it expires and becomes available again. 
 * @member {module:model/AchievementProgress.AchievementRecurrencePolicyEnum} achievementRecurrencePolicy
 */
AchievementProgress.prototype['achievementRecurrencePolicy'] = undefined;

/**
 * The policy that determines how the achievement starts, ends, or resets. - `user_action`: The achievement ends or resets relative to when the customer started the achievement. - `fixed_schedule`: The achievement starts, ends, or resets for all customers following a fixed schedule. 
 * @member {module:model/AchievementProgress.AchievementActivationPolicyEnum} achievementActivationPolicy
 */
AchievementProgress.prototype['achievementActivationPolicy'] = undefined;

/**
 * The achievement's start date when `achievementActivationPolicy` is equal to `fixed_schedule`.  **Note:** It is an RFC3339 timestamp string. 
 * @member {Date} achievementFixedStartDate
 */
AchievementProgress.prototype['achievementFixedStartDate'] = undefined;

/**
 * The achievement's end date. If defined, customers cannot participate in the achievement after this date.  **Note:** It is an RFC3339 timestamp string. 
 * @member {Date} achievementEndDate
 */
AchievementProgress.prototype['achievementEndDate'] = undefined;

/**
 * The current progress of the customer in the achievement.
 * @member {Number} progress
 */
AchievementProgress.prototype['progress'] = undefined;

/**
 * Timestamp at which the customer started the achievement.
 * @member {Date} startDate
 */
AchievementProgress.prototype['startDate'] = undefined;

/**
 * Timestamp at which point the customer completed the achievement.
 * @member {Date} completionDate
 */
AchievementProgress.prototype['completionDate'] = undefined;

/**
 * Timestamp at which point the achievement ends and resets for the customer.
 * @member {Date} endDate
 */
AchievementProgress.prototype['endDate'] = undefined;

/**
 * Timestamp at which the customer opted in to the achievement.
 * @member {Date} optinDate
 */
AchievementProgress.prototype['optinDate'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
AchievementProgress['StatusEnum'] = {

    /**
     * value: "inprogress"
     * @const
     */
    "inprogress": "inprogress",

    /**
     * value: "completed"
     * @const
     */
    "completed": "completed",

    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",

    /**
     * value: "opted_in"
     * @const
     */
    "opted_in": "opted_in"
};


/**
 * Allowed values for the <code>achievementRecurrencePolicy</code> property.
 * @enum {String}
 * @readonly
 */
AchievementProgress['AchievementRecurrencePolicyEnum'] = {

    /**
     * value: "no_recurrence"
     * @const
     */
    "no_recurrence": "no_recurrence",

    /**
     * value: "on_expiration"
     * @const
     */
    "on_expiration": "on_expiration"
};


/**
 * Allowed values for the <code>achievementActivationPolicy</code> property.
 * @enum {String}
 * @readonly
 */
AchievementProgress['AchievementActivationPolicyEnum'] = {

    /**
     * value: "user_action"
     * @const
     */
    "user_action": "user_action",

    /**
     * value: "fixed_schedule"
     * @const
     */
    "fixed_schedule": "fixed_schedule"
};



export default AchievementProgress;

