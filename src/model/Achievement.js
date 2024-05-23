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
import TimePoint from './TimePoint';

/**
 * The Achievement model module.
 * @module model/Achievement
 * @version 7.0.0
 */
class Achievement {
    /**
     * Constructs a new <code>Achievement</code>.
     * 
     * @alias module:model/Achievement
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param name {String} The internal name of the achievement used in API requests.  **Note**: The name should start with a letter. This cannot be changed after the achievement has been created. 
     * @param title {String} The display name for the achievement in the Campaign Manager.
     * @param description {String} A description of the achievement.
     * @param target {Number} The required number of actions or the transactional milestone to complete the achievement.
     * @param period {String} The relative duration after which the achievement ends and resets for a particular customer profile.  **Note**: The `period` does not start when the achievement is created.  The period is a **positive real number** followed by one letter indicating the time unit.  Examples: `30s`, `40m`, `1h`, `5D`, `7W`, `10M`, `15Y`.  Available units:  - `s`: seconds - `m`: minutes - `h`: hours - `D`: days - `W`: weeks - `M`: months - `Y`: years  You can also round certain units down to the beginning of period and up to the end of period.: - `_D` for rounding down days only. Signifies the start of the day. Example: `30D_D` - `_U` for rounding up days, weeks, months and years. Signifies the end of the day, week, month or year. Example: `23W_U`  **Note**: You can either use the round down and round up option or set an absolute period. 
     * @param campaignId {Number} ID of the campaign, to which the achievement belongs to
     * @param userId {Number} ID of the user that created this achievement.
     * @param createdBy {String} Name of the user that created the achievement.  **Note**: This is not available if the user has been deleted. 
     */
    constructor(id, created, name, title, description, target, period, campaignId, userId, createdBy) { 
        
        Achievement.initialize(this, id, created, name, title, description, target, period, campaignId, userId, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, name, title, description, target, period, campaignId, userId, createdBy) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['name'] = name;
        obj['title'] = title;
        obj['description'] = description;
        obj['target'] = target;
        obj['period'] = period;
        obj['campaignId'] = campaignId;
        obj['userId'] = userId;
        obj['createdBy'] = createdBy;
    }

    /**
     * Constructs a <code>Achievement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Achievement} obj Optional instance to populate.
     * @return {module:model/Achievement} The populated <code>Achievement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Achievement();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('periodEndOverride')) {
                obj['periodEndOverride'] = TimePoint.constructFromObject(data['periodEndOverride']);
            }
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
 * Internal ID of this entity.
 * @member {Number} id
 */
Achievement.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Achievement.prototype['created'] = undefined;

/**
 * The internal name of the achievement used in API requests.  **Note**: The name should start with a letter. This cannot be changed after the achievement has been created. 
 * @member {String} name
 */
Achievement.prototype['name'] = undefined;

/**
 * The display name for the achievement in the Campaign Manager.
 * @member {String} title
 */
Achievement.prototype['title'] = undefined;

/**
 * A description of the achievement.
 * @member {String} description
 */
Achievement.prototype['description'] = undefined;

/**
 * The required number of actions or the transactional milestone to complete the achievement.
 * @member {Number} target
 */
Achievement.prototype['target'] = undefined;

/**
 * The relative duration after which the achievement ends and resets for a particular customer profile.  **Note**: The `period` does not start when the achievement is created.  The period is a **positive real number** followed by one letter indicating the time unit.  Examples: `30s`, `40m`, `1h`, `5D`, `7W`, `10M`, `15Y`.  Available units:  - `s`: seconds - `m`: minutes - `h`: hours - `D`: days - `W`: weeks - `M`: months - `Y`: years  You can also round certain units down to the beginning of period and up to the end of period.: - `_D` for rounding down days only. Signifies the start of the day. Example: `30D_D` - `_U` for rounding up days, weeks, months and years. Signifies the end of the day, week, month or year. Example: `23W_U`  **Note**: You can either use the round down and round up option or set an absolute period. 
 * @member {String} period
 */
Achievement.prototype['period'] = undefined;

/**
 * @member {module:model/TimePoint} periodEndOverride
 */
Achievement.prototype['periodEndOverride'] = undefined;

/**
 * ID of the campaign, to which the achievement belongs to
 * @member {Number} campaignId
 */
Achievement.prototype['campaignId'] = undefined;

/**
 * ID of the user that created this achievement.
 * @member {Number} userId
 */
Achievement.prototype['userId'] = undefined;

/**
 * Name of the user that created the achievement.  **Note**: This is not available if the user has been deleted. 
 * @member {String} createdBy
 */
Achievement.prototype['createdBy'] = undefined;

/**
 * Indicates if a customer has made progress in the achievement.
 * @member {Boolean} hasProgress
 */
Achievement.prototype['hasProgress'] = undefined;






export default Achievement;

