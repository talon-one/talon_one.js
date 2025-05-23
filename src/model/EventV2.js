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
 * The EventV2 model module.
 * @module model/EventV2
 * @version 12.0.0
 */
class EventV2 {
    /**
     * Constructs a new <code>EventV2</code>.
     * @alias module:model/EventV2
     * @param type {String} A string representing the event name. Must not be a reserved event name. You create this value when you [create an attribute](https://docs.talon.one/docs/dev/concepts/entities/events#creating-a-custom-event) of type `event` in the Campaign Manager. 
     */
    constructor(type) { 
        
        EventV2.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>EventV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventV2} obj Optional instance to populate.
     * @return {module:model/EventV2} The populated <code>EventV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventV2();

            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
            if (data.hasOwnProperty('storeIntegrationId')) {
                obj['storeIntegrationId'] = ApiClient.convertToType(data['storeIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('evaluableCampaignIds')) {
                obj['evaluableCampaignIds'] = ApiClient.convertToType(data['evaluableCampaignIds'], ['Number']);
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
EventV2.prototype['profileId'] = undefined;

/**
 * The integration ID of the store. You choose this ID when you create a store.
 * @member {String} storeIntegrationId
 */
EventV2.prototype['storeIntegrationId'] = undefined;

/**
 * When using the `dry` query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them. 
 * @member {Array.<Number>} evaluableCampaignIds
 */
EventV2.prototype['evaluableCampaignIds'] = undefined;

/**
 * A string representing the event name. Must not be a reserved event name. You create this value when you [create an attribute](https://docs.talon.one/docs/dev/concepts/entities/events#creating-a-custom-event) of type `event` in the Campaign Manager. 
 * @member {String} type
 */
EventV2.prototype['type'] = undefined;

/**
 * Arbitrary additional JSON properties associated with the event. They must be created in the Campaign Manager before setting them with this property. See [creating custom attributes](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes#creating-a-custom-attribute).
 * @member {Object} attributes
 */
EventV2.prototype['attributes'] = undefined;






export default EventV2;

