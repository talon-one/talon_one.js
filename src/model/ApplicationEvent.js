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
 * The ApplicationEvent model module.
 * @module model/ApplicationEvent
 * @version 4.1.0
 */
class ApplicationEvent {
    /**
     * Constructs a new <code>ApplicationEvent</code>.
     * 
     * @alias module:model/ApplicationEvent
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param type {String} A string representing the event. Must not be a reserved event name.
     * @param attributes {Object} Additional JSON serialized data associated with the event.
     * @param effects {Array.<Object>} An array containing the effects that were applied as a result of this event.
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
                obj['effects'] = ApiClient.convertToType(data['effects'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
ApplicationEvent.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
ApplicationEvent.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
ApplicationEvent.prototype['applicationId'] = undefined;

/**
 * The globally unique Talon.One ID of the customer that created this entity.
 * @member {Number} profileId
 */
ApplicationEvent.prototype['profileId'] = undefined;

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
 * @member {Array.<Object>} effects
 */
ApplicationEvent.prototype['effects'] = undefined;






export default ApplicationEvent;

