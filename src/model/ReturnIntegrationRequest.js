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
import NewReturn from './NewReturn';

/**
 * The ReturnIntegrationRequest model module.
 * @module model/ReturnIntegrationRequest
 * @version 12.0.0
 */
class ReturnIntegrationRequest {
    /**
     * Constructs a new <code>ReturnIntegrationRequest</code>.
     * The body of a return integration API request. Next to the cart items details, this contains an optional listing of extra properties that should be returned in the response.
     * @alias module:model/ReturnIntegrationRequest
     * @param _return {module:model/NewReturn} 
     */
    constructor(_return) { 
        
        ReturnIntegrationRequest.initialize(this, _return);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _return) { 
        obj['return'] = _return;
    }

    /**
     * Constructs a <code>ReturnIntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnIntegrationRequest} obj Optional instance to populate.
     * @return {module:model/ReturnIntegrationRequest} The populated <code>ReturnIntegrationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnIntegrationRequest();

            if (data.hasOwnProperty('return')) {
                obj['return'] = NewReturn.constructFromObject(data['return']);
            }
            if (data.hasOwnProperty('responseContent')) {
                obj['responseContent'] = ApiClient.convertToType(data['responseContent'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewReturn} return
 */
ReturnIntegrationRequest.prototype['return'] = undefined;

/**
 * Extends the response with the chosen data entities. Use this property to get as much data as you need in one _Update customer session_ request instead of sending extra requests to other endpoints. 
 * @member {Array.<module:model/ReturnIntegrationRequest.ResponseContentEnum>} responseContent
 */
ReturnIntegrationRequest.prototype['responseContent'] = undefined;





/**
 * Allowed values for the <code>responseContent</code> property.
 * @enum {String}
 * @readonly
 */
ReturnIntegrationRequest['ResponseContentEnum'] = {

    /**
     * value: "customerSession"
     * @const
     */
    "customerSession": "customerSession",

    /**
     * value: "customerProfile"
     * @const
     */
    "customerProfile": "customerProfile",

    /**
     * value: "coupons"
     * @const
     */
    "coupons": "coupons",

    /**
     * value: "triggeredCampaigns"
     * @const
     */
    "triggeredCampaigns": "triggeredCampaigns",

    /**
     * value: "referral"
     * @const
     */
    "referral": "referral",

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
     * value: "previousReturns"
     * @const
     */
    "previousReturns": "previousReturns"
};



export default ReturnIntegrationRequest;

