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
import MessageLogRequest from './MessageLogRequest';
import MessageLogResponse from './MessageLogResponse';

/**
 * The MessageLogEntry model module.
 * @module model/MessageLogEntry
 * @version 10.0.0
 */
class MessageLogEntry {
    /**
     * Constructs a new <code>MessageLogEntry</code>.
     * Message Log.
     * @alias module:model/MessageLogEntry
     * @param id {String} Unique identifier of the message.
     * @param service {String} Name of the service that generated the log entry.
     * @param createdAt {Date} Timestamp when the log entry was created.
     * @param entityType {module:model/MessageLogEntry.EntityTypeEnum} The entity type the log is related to. 
     */
    constructor(id, service, createdAt, entityType) { 
        
        MessageLogEntry.initialize(this, id, service, createdAt, entityType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, service, createdAt, entityType) { 
        obj['id'] = id;
        obj['service'] = service;
        obj['createdAt'] = createdAt;
        obj['entityType'] = entityType;
    }

    /**
     * Constructs a <code>MessageLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageLogEntry} obj Optional instance to populate.
     * @return {module:model/MessageLogEntry} The populated <code>MessageLogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageLogEntry();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('changeType')) {
                obj['changeType'] = ApiClient.convertToType(data['changeType'], 'String');
            }
            if (data.hasOwnProperty('notificationId')) {
                obj['notificationId'] = ApiClient.convertToType(data['notificationId'], 'Number');
            }
            if (data.hasOwnProperty('notificationName')) {
                obj['notificationName'] = ApiClient.convertToType(data['notificationName'], 'String');
            }
            if (data.hasOwnProperty('webhookId')) {
                obj['webhookId'] = ApiClient.convertToType(data['webhookId'], 'Number');
            }
            if (data.hasOwnProperty('webhookName')) {
                obj['webhookName'] = ApiClient.convertToType(data['webhookName'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = MessageLogRequest.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = MessageLogResponse.constructFromObject(data['response']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('loyaltyProgramId')) {
                obj['loyaltyProgramId'] = ApiClient.convertToType(data['loyaltyProgramId'], 'Number');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier of the message.
 * @member {String} id
 */
MessageLogEntry.prototype['id'] = undefined;

/**
 * Name of the service that generated the log entry.
 * @member {String} service
 */
MessageLogEntry.prototype['service'] = undefined;

/**
 * Type of change that triggered the notification.
 * @member {String} changeType
 */
MessageLogEntry.prototype['changeType'] = undefined;

/**
 * ID of the notification.
 * @member {Number} notificationId
 */
MessageLogEntry.prototype['notificationId'] = undefined;

/**
 * The name of the notification.
 * @member {String} notificationName
 */
MessageLogEntry.prototype['notificationName'] = undefined;

/**
 * ID of the webhook.
 * @member {Number} webhookId
 */
MessageLogEntry.prototype['webhookId'] = undefined;

/**
 * The name of the webhook.
 * @member {String} webhookName
 */
MessageLogEntry.prototype['webhookName'] = undefined;

/**
 * @member {module:model/MessageLogRequest} request
 */
MessageLogEntry.prototype['request'] = undefined;

/**
 * @member {module:model/MessageLogResponse} response
 */
MessageLogEntry.prototype['response'] = undefined;

/**
 * Timestamp when the log entry was created.
 * @member {Date} createdAt
 */
MessageLogEntry.prototype['createdAt'] = undefined;

/**
 * The entity type the log is related to. 
 * @member {module:model/MessageLogEntry.EntityTypeEnum} entityType
 */
MessageLogEntry.prototype['entityType'] = undefined;

/**
 * The target URL of the request.
 * @member {String} url
 */
MessageLogEntry.prototype['url'] = undefined;

/**
 * Identifier of the Application.
 * @member {Number} applicationId
 */
MessageLogEntry.prototype['applicationId'] = undefined;

/**
 * Identifier of the loyalty program.
 * @member {Number} loyaltyProgramId
 */
MessageLogEntry.prototype['loyaltyProgramId'] = undefined;

/**
 * Identifier of the campaign.
 * @member {Number} campaignId
 */
MessageLogEntry.prototype['campaignId'] = undefined;





/**
 * Allowed values for the <code>entityType</code> property.
 * @enum {String}
 * @readonly
 */
MessageLogEntry['EntityTypeEnum'] = {

    /**
     * value: "application"
     * @const
     */
    "application": "application",

    /**
     * value: "loyalty_program"
     * @const
     */
    "loyalty_program": "loyalty_program",

    /**
     * value: "webhook"
     * @const
     */
    "webhook": "webhook"
};



export default MessageLogEntry;

