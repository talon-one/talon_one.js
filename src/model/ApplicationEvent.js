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
import Effect from './Effect';
import RuleFailureReason from './RuleFailureReason';

/**
 * The ApplicationEvent model module.
 * @module model/ApplicationEvent
 * @version 11.0.0
 */
class ApplicationEvent {
    /**
     * Constructs a new <code>ApplicationEvent</code>.
     * @alias module:model/ApplicationEvent
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param applicationId {Number} The ID of the Application that owns this entity.
     * @param type {String} A string representing the event. Must not be a reserved event name.
     * @param attributes {Object} Additional JSON serialized data associated with the event.
     * @param effects {Array.<module:model/Effect>} An array containing the effects that were applied as a result of this event.
     */
    constructor(id, created, applicationId, type, attributes, effects) { 
        
        ApplicationEvent.initialize(this, id, created, applicationId, type, attributes, effects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, type, attributes, effects) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['type'] = type;
        obj['attributes'] = attributes;
        obj['effects'] = effects;
    }

    /**
     * Constructs a <code>ApplicationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationEvent} obj Optional instance to populate.
     * @return {module:model/ApplicationEvent} The populated <code>ApplicationEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationEvent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'Number');
            }
            if (data.hasOwnProperty('storeId')) {
                obj['storeId'] = ApiClient.convertToType(data['storeId'], 'Number');
            }
            if (data.hasOwnProperty('storeIntegrationId')) {
                obj['storeIntegrationId'] = ApiClient.convertToType(data['storeIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('sessionId')) {
                obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], [Effect]);
            }
            if (data.hasOwnProperty('ruleFailureReasons')) {
                obj['ruleFailureReasons'] = ApiClient.convertToType(data['ruleFailureReasons'], [RuleFailureReason]);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
ApplicationEvent.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
ApplicationEvent.prototype['created'] = undefined;

/**
 * The ID of the Application that owns this entity.
 * @member {Number} applicationId
 */
ApplicationEvent.prototype['applicationId'] = undefined;

/**
 * The globally unique Talon.One ID of the customer that created this entity.
 * @member {Number} profileId
 */
ApplicationEvent.prototype['profileId'] = undefined;

/**
 * The ID of the store.
 * @member {Number} storeId
 */
ApplicationEvent.prototype['storeId'] = undefined;

/**
 * The integration ID of the store. You choose this ID when you create a store.
 * @member {String} storeIntegrationId
 */
ApplicationEvent.prototype['storeIntegrationId'] = undefined;

/**
 * The globally unique Talon.One ID of the session that contains this event.
 * @member {Number} sessionId
 */
ApplicationEvent.prototype['sessionId'] = undefined;

/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */
ApplicationEvent.prototype['type'] = undefined;

/**
 * Additional JSON serialized data associated with the event.
 * @member {Object} attributes
 */
ApplicationEvent.prototype['attributes'] = undefined;

/**
 * An array containing the effects that were applied as a result of this event.
 * @member {Array.<module:model/Effect>} effects
 */
ApplicationEvent.prototype['effects'] = undefined;

/**
 * An array containing the rule failure reasons which happened during this event.
 * @member {Array.<module:model/RuleFailureReason>} ruleFailureReasons
 */
ApplicationEvent.prototype['ruleFailureReasons'] = undefined;






export default ApplicationEvent;

