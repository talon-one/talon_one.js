/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The IntegrationEventV2Request model module.
 * @module model/IntegrationEventV2Request
 * @version 5.0.0
 */
class IntegrationEventV2Request {
    /**
     * Constructs a new <code>IntegrationEventV2Request</code>.
     * 
     * @alias module:model/IntegrationEventV2Request
     * @param type {String} A string representing the event name. Must not be a reserved event name. You create this value when you [create an attribute](https://docs.talon.one/docs/dev/concepts/events#creating-a-custom-event) of type `event` in the Campaign Manager. 
     */
    constructor(type) { 
        
        IntegrationEventV2Request.initialize(this, type);
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
     * Constructs a <code>IntegrationEventV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationEventV2Request} obj Optional instance to populate.
     * @return {module:model/IntegrationEventV2Request} The populated <code>IntegrationEventV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationEventV2Request();

            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
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
            if (data.hasOwnProperty('responseContent')) {
                obj['responseContent'] = ApiClient.convertToType(data['responseContent'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
 * @member {String} profileId
 */
IntegrationEventV2Request.prototype['profileId'] = undefined;

/**
 * When using the `dry` query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them. 
 * @member {Array.<Number>} evaluableCampaignIds
 */
IntegrationEventV2Request.prototype['evaluableCampaignIds'] = undefined;

/**
 * A string representing the event name. Must not be a reserved event name. You create this value when you [create an attribute](https://docs.talon.one/docs/dev/concepts/events#creating-a-custom-event) of type `event` in the Campaign Manager. 
 * @member {String} type
 */
IntegrationEventV2Request.prototype['type'] = undefined;

/**
 * Arbitrary additional JSON properties associated with the event. They must be created in the Campaign Manager before setting them with this property. See [creating custom attributes](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes#creating-custom-attributes).
 * @member {Object} attributes
 */
IntegrationEventV2Request.prototype['attributes'] = undefined;

/**
 * Optional list of requested information to be present on the response related to the tracking custom event. 
 * @member {Array.<module:model/IntegrationEventV2Request.ResponseContentEnum>} responseContent
 */
IntegrationEventV2Request.prototype['responseContent'] = undefined;





/**
 * Allowed values for the <code>responseContent</code> property.
 * @enum {String}
 * @readonly
 */
IntegrationEventV2Request['ResponseContentEnum'] = {

    /**
     * value: "customerProfile"
     * @const
     */
    "customerProfile": "customerProfile",

    /**
     * value: "triggeredCampaigns"
     * @const
     */
    "triggeredCampaigns": "triggeredCampaigns",

    /**
     * value: "loyalty"
     * @const
     */
    "loyalty": "loyalty",

    /**
     * value: "event"
     * @const
     */
    "event": "event",

    /**
     * value: "awardedGiveaways"
     * @const
     */
    "awardedGiveaways": "awardedGiveaways",

    /**
     * value: "ruleFailureReasons"
     * @const
     */
    "ruleFailureReasons": "ruleFailureReasons"
};



export default IntegrationEventV2Request;

