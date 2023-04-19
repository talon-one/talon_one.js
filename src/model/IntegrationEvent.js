/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The IntegrationEvent model module.
 * @module model/IntegrationEvent
 * @version 5.0.0
 */
class IntegrationEvent {
    /**
     * Constructs a new <code>IntegrationEvent</code>.
     * 
     * @alias module:model/IntegrationEvent
     * @param type {String} A string representing the event. Must not be a reserved event name.
     * @param attributes {Object} Arbitrary additional JSON data associated with the event.
     */
    constructor(type, attributes) { 
        
        IntegrationEvent.initialize(this, type, attributes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, attributes) { 
        obj['type'] = type;
        obj['attributes'] = attributes;
    }

    /**
     * Constructs a <code>IntegrationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationEvent} obj Optional instance to populate.
     * @return {module:model/IntegrationEvent} The populated <code>IntegrationEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationEvent();

            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
        }
        return obj;
    }


}

/**
 * ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
 * @member {String} profileId
 */
IntegrationEvent.prototype['profileId'] = undefined;

/**
 * A string representing the event. Must not be a reserved event name.
 * @member {String} type
 */
IntegrationEvent.prototype['type'] = undefined;

/**
 * Arbitrary additional JSON data associated with the event.
 * @member {Object} attributes
 */
IntegrationEvent.prototype['attributes'] = undefined;






export default IntegrationEvent;

