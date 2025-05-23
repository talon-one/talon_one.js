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
import AnalyticsDataPointWithTrend from './AnalyticsDataPointWithTrend';

/**
 * The AnalyticsSKU model module.
 * @module model/AnalyticsSKU
 * @version 12.0.0
 */
class AnalyticsSKU {
    /**
     * Constructs a new <code>AnalyticsSKU</code>.
     * @alias module:model/AnalyticsSKU
     * @param id {Number} The ID of the SKU linked to the application.
     * @param sku {String} The SKU linked to the application.
     */
    constructor(id, sku) { 
        
        AnalyticsSKU.initialize(this, id, sku);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, sku) { 
        obj['id'] = id;
        obj['sku'] = sku;
    }

    /**
     * Constructs a <code>AnalyticsSKU</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyticsSKU} obj Optional instance to populate.
     * @return {module:model/AnalyticsSKU} The populated <code>AnalyticsSKU</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyticsSKU();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('unitsSold')) {
                obj['unitsSold'] = AnalyticsDataPointWithTrend.constructFromObject(data['unitsSold']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the SKU linked to the application.
 * @member {Number} id
 */
AnalyticsSKU.prototype['id'] = undefined;

/**
 * The SKU linked to the application.
 * @member {String} sku
 */
AnalyticsSKU.prototype['sku'] = undefined;

/**
 * Values in UTC for the date the SKU linked to the product was last updated.
 * @member {Date} lastUpdated
 */
AnalyticsSKU.prototype['lastUpdated'] = undefined;

/**
 * @member {module:model/AnalyticsDataPointWithTrend} unitsSold
 */
AnalyticsSKU.prototype['unitsSold'] = undefined;






export default AnalyticsSKU;

