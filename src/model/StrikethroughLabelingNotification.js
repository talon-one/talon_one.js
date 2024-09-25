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
import StrikethroughChangedItem from './StrikethroughChangedItem';
import StrikethroughTrigger from './StrikethroughTrigger';

/**
 * The StrikethroughLabelingNotification model module.
 * @module model/StrikethroughLabelingNotification
 * @version 9.0.0
 */
class StrikethroughLabelingNotification {
    /**
     * Constructs a new <code>StrikethroughLabelingNotification</code>.
     * The strikethrough labels notification for an application.
     * @alias module:model/StrikethroughLabelingNotification
     * @param applicationId {Number} The ID of the application that catalog items labels belongs to.
     * @param currentBatch {Number} The batch number of the notification. Notifications might be sent in different batches.
     * @param totalBatches {Number} The total number of batches for the notification.
     * @param trigger {module:model/StrikethroughTrigger} 
     * @param changedItems {Array.<module:model/StrikethroughChangedItem>} 
     */
    constructor(applicationId, currentBatch, totalBatches, trigger, changedItems) { 
        
        StrikethroughLabelingNotification.initialize(this, applicationId, currentBatch, totalBatches, trigger, changedItems);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationId, currentBatch, totalBatches, trigger, changedItems) { 
        obj['applicationId'] = applicationId;
        obj['currentBatch'] = currentBatch;
        obj['totalBatches'] = totalBatches;
        obj['trigger'] = trigger;
        obj['changedItems'] = changedItems;
    }

    /**
     * Constructs a <code>StrikethroughLabelingNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StrikethroughLabelingNotification} obj Optional instance to populate.
     * @return {module:model/StrikethroughLabelingNotification} The populated <code>StrikethroughLabelingNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StrikethroughLabelingNotification();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('currentBatch')) {
                obj['currentBatch'] = ApiClient.convertToType(data['currentBatch'], 'Number');
            }
            if (data.hasOwnProperty('totalBatches')) {
                obj['totalBatches'] = ApiClient.convertToType(data['totalBatches'], 'Number');
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = StrikethroughTrigger.constructFromObject(data['trigger']);
            }
            if (data.hasOwnProperty('changedItems')) {
                obj['changedItems'] = ApiClient.convertToType(data['changedItems'], [StrikethroughChangedItem]);
            }
        }
        return obj;
    }


}

/**
 * The ID of the application that catalog items labels belongs to.
 * @member {Number} applicationId
 */
StrikethroughLabelingNotification.prototype['applicationId'] = undefined;

/**
 * The batch number of the notification. Notifications might be sent in different batches.
 * @member {Number} currentBatch
 */
StrikethroughLabelingNotification.prototype['currentBatch'] = undefined;

/**
 * The total number of batches for the notification.
 * @member {Number} totalBatches
 */
StrikethroughLabelingNotification.prototype['totalBatches'] = undefined;

/**
 * @member {module:model/StrikethroughTrigger} trigger
 */
StrikethroughLabelingNotification.prototype['trigger'] = undefined;

/**
 * @member {Array.<module:model/StrikethroughChangedItem>} changedItems
 */
StrikethroughLabelingNotification.prototype['changedItems'] = undefined;






export default StrikethroughLabelingNotification;

