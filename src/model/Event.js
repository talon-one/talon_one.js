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
import LedgerEntry from './LedgerEntry';
import Meta from './Meta';

/**
 * The Event model module.
 * @module model/Event
 * @version 6.0.0
 */
class Event {
    /**
     * Constructs a new <code>Event</code>.
     * 
     * @alias module:model/Event
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param type {String} A string representing the event. Must not be a reserved event name.
     * @param attributes {Object} Arbitrary additional JSON data associated with the event.
     * @param effects {Array.<Object>} An array of effects generated by the rules of the enabled campaigns of the Application.  You decide how to apply them in your system. See the list of [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects). 
     * @param ledgerEntries {Array.<module:model/LedgerEntry>} Ledger entries for the event.
     */
    constructor(id, created, applicationId, type, attributes, effects, ledgerEntries) { 
        
        Event.initialize(this, id, created, applicationId, type, attributes, effects, ledgerEntries);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, type, attributes, effects, ledgerEntries) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['type'] = type;
        obj['attributes'] = attributes;
        obj['effects'] = effects;
        obj['ledgerEntries'] = ledgerEntries;
    }

    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Event();

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
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
            if (data.hasOwnProperty('storeIntegrationId')) {
                obj['storeIntegrationId'] = ApiClient.convertToType(data['storeIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('sessionId')) {
                obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
            }
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], [Object]);
            }
            if (data.hasOwnProperty('ledgerEntries')) {
                obj['ledgerEntries'] = ApiClient.convertToType(data['ledgerEntries'], [LedgerEntry]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Event.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Event.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
Event.prototype['applicationId'] = undefined;

/**
 * ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
 * @member {String} profileId
 */
Event.prototype['profileId'] = undefined;

/**
 * The integration ID of the store. You choose this ID when you create a store.
 * @member {String} storeIntegrationId
 */
Event.prototype['storeIntegrationId'] = undefined;

/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */
Event.prototype['type'] = undefined;

/**
 * Arbitrary additional JSON data associated with the event.
 * @member {Object} attributes
 */
Event.prototype['attributes'] = undefined;

/**
 * The ID of the session that this event occurred in.
 * @member {String} sessionId
 */
Event.prototype['sessionId'] = undefined;

/**
 * An array of effects generated by the rules of the enabled campaigns of the Application.  You decide how to apply them in your system. See the list of [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects). 
 * @member {Array.<Object>} effects
 */
Event.prototype['effects'] = undefined;

/**
 * Ledger entries for the event.
 * @member {Array.<module:model/LedgerEntry>} ledgerEntries
 */
Event.prototype['ledgerEntries'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
Event.prototype['meta'] = undefined;






export default Event;

