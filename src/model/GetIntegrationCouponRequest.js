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
 * The GetIntegrationCouponRequest model module.
 * @module model/GetIntegrationCouponRequest
 * @version 8.0.0
 */
class GetIntegrationCouponRequest {
    /**
     * Constructs a new <code>GetIntegrationCouponRequest</code>.
     * @alias module:model/GetIntegrationCouponRequest
     * @param campaignIds {Array.<Number>} A list of IDs of the campaigns to get coupons from.
     * @param limit {Number} The maximum number of coupons included in the response.
     */
    constructor(campaignIds, limit) { 
        
        GetIntegrationCouponRequest.initialize(this, campaignIds, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignIds, limit) { 
        obj['campaignIds'] = campaignIds;
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>GetIntegrationCouponRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetIntegrationCouponRequest} obj Optional instance to populate.
     * @return {module:model/GetIntegrationCouponRequest} The populated <code>GetIntegrationCouponRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetIntegrationCouponRequest();

            if (data.hasOwnProperty('campaignIds')) {
                obj['campaignIds'] = ApiClient.convertToType(data['campaignIds'], ['Number']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A list of IDs of the campaigns to get coupons from.
 * @member {Array.<Number>} campaignIds
 */
GetIntegrationCouponRequest.prototype['campaignIds'] = undefined;

/**
 * The maximum number of coupons included in the response.
 * @member {Number} limit
 */
GetIntegrationCouponRequest.prototype['limit'] = undefined;






export default GetIntegrationCouponRequest;

