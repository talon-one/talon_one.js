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
 * The NewEvent model module.
 * @module model/NewEvent
 * @version 5.0.0
 */
class NewEvent {
    /**
     * Constructs a new <code>NewEvent</code>.
     * 
     * @alias module:model/NewEvent
     * @param type {String} A string representing the event. Must not be a reserved event name.
     * @param attributes {Object} Arbitrary additional JSON data associated with the event.
     * @param sessionId {String} The ID of the session that this event occurred in.
     */
    constructor(type, attributes, sessionId) { 
        
        NewEvent.initialize(this, type, attributes, sessionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, attributes, sessionId) { 
        obj['type'] = type;
        obj['attributes'] = attributes;
        obj['sessionId'] = sessionId;
    }

    /**
     * Constructs a <code>NewEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewEvent} obj Optional instance to populate.
     * @return {module:model/NewEvent} The populated <code>NewEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewEvent();

            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
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
        }
        return obj;
    }


}

/**
 * ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
 * @member {String} profileId
 */
NewEvent.prototype['profileId'] = undefined;

/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */
NewEvent.prototype['type'] = undefined;

/**
 * Arbitrary additional JSON data associated with the event.
 * @member {Object} attributes
 */
NewEvent.prototype['attributes'] = undefined;

/**
 * The ID of the session that this event occurred in.
 * @member {String} sessionId
 */
NewEvent.prototype['sessionId'] = undefined;






export default NewEvent;

