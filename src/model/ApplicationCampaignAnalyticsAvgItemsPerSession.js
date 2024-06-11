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
 * The ApplicationCampaignAnalyticsAvgItemsPerSession model module.
 * @module model/ApplicationCampaignAnalyticsAvgItemsPerSession
 * @version 8.0.0
 */
class ApplicationCampaignAnalyticsAvgItemsPerSession {
    /**
     * Constructs a new <code>ApplicationCampaignAnalyticsAvgItemsPerSession</code>.
     * The number of items from sessions divided by the number of sessions. The &#x60;influenced&#x60; value includes only sessions with at least one applied effect.
     * @alias module:model/ApplicationCampaignAnalyticsAvgItemsPerSession
     */
    constructor() { 
        
        ApplicationCampaignAnalyticsAvgItemsPerSession.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationCampaignAnalyticsAvgItemsPerSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCampaignAnalyticsAvgItemsPerSession} obj Optional instance to populate.
     * @return {module:model/ApplicationCampaignAnalyticsAvgItemsPerSession} The populated <code>ApplicationCampaignAnalyticsAvgItemsPerSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCampaignAnalyticsAvgItemsPerSession();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('uplift')) {
                obj['uplift'] = ApiClient.convertToType(data['uplift'], 'Number');
            }
            if (data.hasOwnProperty('trend')) {
                obj['trend'] = ApiClient.convertToType(data['trend'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} value
 */
ApplicationCampaignAnalyticsAvgItemsPerSession.prototype['value'] = undefined;

/**
 * @member {Number} uplift
 */
ApplicationCampaignAnalyticsAvgItemsPerSession.prototype['uplift'] = undefined;

/**
 * @member {Number} trend
 */
ApplicationCampaignAnalyticsAvgItemsPerSession.prototype['trend'] = undefined;






export default ApplicationCampaignAnalyticsAvgItemsPerSession;

