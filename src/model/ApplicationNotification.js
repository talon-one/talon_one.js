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
 * The ApplicationNotification model module.
 * @module model/ApplicationNotification
 * @version 11.0.0
 */
class ApplicationNotification {
    /**
     * Constructs a new <code>ApplicationNotification</code>.
     * @alias module:model/ApplicationNotification
     * @param event {String} Event type. It can be one of the following: ['campaign_evaluation_tree_changed'] 
     */
    constructor(event) { 
        
        ApplicationNotification.initialize(this, event);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, event) { 
        obj['event'] = event;
    }

    /**
     * Constructs a <code>ApplicationNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationNotification} obj Optional instance to populate.
     * @return {module:model/ApplicationNotification} The populated <code>ApplicationNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationNotification();

            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Event type. It can be one of the following: ['campaign_evaluation_tree_changed'] 
 * @member {String} event
 */
ApplicationNotification.prototype['event'] = undefined;






export default ApplicationNotification;

