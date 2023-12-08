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
 * The CreateAchievement model module.
 * @module model/CreateAchievement
 * @version 6.0.0
 */
class CreateAchievement {
    /**
     * Constructs a new <code>CreateAchievement</code>.
     * @alias module:model/CreateAchievement
     * @param name {String} The internal name of the achievement used in API requests.  **Note**: The name should start with a letter. This cannot be changed after the achievement has been created. 
     * @param title {String} The display name for the achievement in the Campaign Manager.
     * @param description {String} A description of the achievement.
     * @param target {Number} The maximum number of times a specific action must be completed by a customer profile over a defined period of time.
     * @param period {String} The relative duration after which the achievement is reset for a particular customer profile.  **Note**: The `period` does not start when the achievement is created.  The period is a **positive real number** followed by one letter indicating the time unit.  Examples: `30s`, `40m`, `1h`, `5D`, `7W`, `10M`, `15Y`.  Available units:  - `s`: seconds - `m`: minutes - `h`: hours - `D`: days - `W`: weeks - `M`: months - `Y`: years  You can also round certain units down to the beginning of period and up to the end of period.: - `_D` for rounding down days only. Signifies the start of the day. Example: `30D_D` - `_U` for rounding up days, weeks, months and years. Signifies the end of the day, week, month or year. Example: `23W_U`  **Note**: You can either use the round down and round up option or set an absolute period. 
     */
    constructor(name, title, description, target, period) { 
        
        CreateAchievement.initialize(this, name, title, description, target, period);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, title, description, target, period) { 
        obj['name'] = name;
        obj['title'] = title;
        obj['description'] = description;
        obj['target'] = target;
        obj['period'] = period;
    }

    /**
     * Constructs a <code>CreateAchievement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAchievement} obj Optional instance to populate.
     * @return {module:model/CreateAchievement} The populated <code>CreateAchievement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAchievement();

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
        }
        return obj;
    }


}

/**
 * The internal name of the achievement used in API requests.  **Note**: The name should start with a letter. This cannot be changed after the achievement has been created. 
 * @member {String} name
 */
CreateAchievement.prototype['name'] = undefined;

/**
 * The display name for the achievement in the Campaign Manager.
 * @member {String} title
 */
CreateAchievement.prototype['title'] = undefined;

/**
 * A description of the achievement.
 * @member {String} description
 */
CreateAchievement.prototype['description'] = undefined;

/**
 * The maximum number of times a specific action must be completed by a customer profile over a defined period of time.
 * @member {Number} target
 */
CreateAchievement.prototype['target'] = undefined;

/**
 * The relative duration after which the achievement is reset for a particular customer profile.  **Note**: The `period` does not start when the achievement is created.  The period is a **positive real number** followed by one letter indicating the time unit.  Examples: `30s`, `40m`, `1h`, `5D`, `7W`, `10M`, `15Y`.  Available units:  - `s`: seconds - `m`: minutes - `h`: hours - `D`: days - `W`: weeks - `M`: months - `Y`: years  You can also round certain units down to the beginning of period and up to the end of period.: - `_D` for rounding down days only. Signifies the start of the day. Example: `30D_D` - `_U` for rounding up days, weeks, months and years. Signifies the end of the day, week, month or year. Example: `23W_U`  **Note**: You can either use the round down and round up option or set an absolute period. 
 * @member {String} period
 */
CreateAchievement.prototype['period'] = undefined;

/**
 * @member {module:model/TimePoint} periodEndOverride
 */
CreateAchievement.prototype['periodEndOverride'] = undefined;






export default CreateAchievement;

