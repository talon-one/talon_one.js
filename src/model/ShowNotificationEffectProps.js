/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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

/**
 * The ShowNotificationEffectProps model module.
 * @module model/ShowNotificationEffectProps
 * @version 4.3.0
 */
class ShowNotificationEffectProps {
    /**
     * Constructs a new <code>ShowNotificationEffectProps</code>.
     * The properties specific to the \&quot;showNotification\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;show notification\&quot; effect.
     * @alias module:model/ShowNotificationEffectProps
     * @param notificationType {String} The type of notification that should be shown (e.g. error/warning/info)
     * @param title {String} Title of the notification
     * @param body {String} Body of the notification
     */
    constructor(notificationType, title, body) { 
        
        ShowNotificationEffectProps.initialize(this, notificationType, title, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, notificationType, title, body) { 
        obj['notificationType'] = notificationType;
        obj['title'] = title;
        obj['body'] = body;
    }

    /**
     * Constructs a <code>ShowNotificationEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowNotificationEffectProps} obj Optional instance to populate.
     * @return {module:model/ShowNotificationEffectProps} The populated <code>ShowNotificationEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShowNotificationEffectProps();

            if (data.hasOwnProperty('notificationType')) {
                obj['notificationType'] = ApiClient.convertToType(data['notificationType'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of notification that should be shown (e.g. error/warning/info)
 * @member {String} notificationType
 */
ShowNotificationEffectProps.prototype['notificationType'] = undefined;

/**
 * Title of the notification
 * @member {String} title
 */
ShowNotificationEffectProps.prototype['title'] = undefined;

/**
 * Body of the notification
 * @member {String} body
 */
ShowNotificationEffectProps.prototype['body'] = undefined;






export default ShowNotificationEffectProps;

