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
import FeedNotification from './FeedNotification';

/**
 * The UserFeedNotifications model module.
 * @module model/UserFeedNotifications
 * @version 4.5.0
 */
class UserFeedNotifications {
    /**
     * Constructs a new <code>UserFeedNotifications</code>.
     * notifications to notify CAMA user about
     * @alias module:model/UserFeedNotifications
     * @param lastUpdate {Date} Timestamp of the last request for this list
     * @param notifications {Array.<module:model/FeedNotification>} List of all notifications to notify the user about
     */
    constructor(lastUpdate, notifications) { 
        
        UserFeedNotifications.initialize(this, lastUpdate, notifications);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lastUpdate, notifications) { 
        obj['lastUpdate'] = lastUpdate;
        obj['notifications'] = notifications;
    }

    /**
     * Constructs a <code>UserFeedNotifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserFeedNotifications} obj Optional instance to populate.
     * @return {module:model/UserFeedNotifications} The populated <code>UserFeedNotifications</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserFeedNotifications();

            if (data.hasOwnProperty('lastUpdate')) {
                obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Date');
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [FeedNotification]);
            }
        }
        return obj;
    }


}

/**
 * Timestamp of the last request for this list
 * @member {Date} lastUpdate
 */
UserFeedNotifications.prototype['lastUpdate'] = undefined;

/**
 * List of all notifications to notify the user about
 * @member {Array.<module:model/FeedNotification>} notifications
 */
UserFeedNotifications.prototype['notifications'] = undefined;






export default UserFeedNotifications;

