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
 * The ProductSkuUnitAnalytics model module.
 * @module model/ProductSkuUnitAnalytics
 * @version 10.0.0
 */
class ProductSkuUnitAnalytics {
    /**
     * Constructs a new <code>ProductSkuUnitAnalytics</code>.
     * @alias module:model/ProductSkuUnitAnalytics
     * @param startTime {Date} The start of the aggregation time frame in UTC.
     * @param endTime {Date} The end of the aggregation time frame in UTC.
     * @param purchasedUnits {module:model/AnalyticsDataPointWithTrend} 
     * @param sku {String} The SKU linked to the analytics-level product.
     */
    constructor(startTime, endTime, purchasedUnits, sku) { 
        
        ProductSkuUnitAnalytics.initialize(this, startTime, endTime, purchasedUnits, sku);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, startTime, endTime, purchasedUnits, sku) { 
        obj['startTime'] = startTime;
        obj['endTime'] = endTime;
        obj['purchasedUnits'] = purchasedUnits;
        obj['sku'] = sku;
    }

    /**
     * Constructs a <code>ProductSkuUnitAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSkuUnitAnalytics} obj Optional instance to populate.
     * @return {module:model/ProductSkuUnitAnalytics} The populated <code>ProductSkuUnitAnalytics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSkuUnitAnalytics();

            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('purchasedUnits')) {
                obj['purchasedUnits'] = AnalyticsDataPointWithTrend.constructFromObject(data['purchasedUnits']);
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The start of the aggregation time frame in UTC.
 * @member {Date} startTime
 */
ProductSkuUnitAnalytics.prototype['startTime'] = undefined;

/**
 * The end of the aggregation time frame in UTC.
 * @member {Date} endTime
 */
ProductSkuUnitAnalytics.prototype['endTime'] = undefined;

/**
 * @member {module:model/AnalyticsDataPointWithTrend} purchasedUnits
 */
ProductSkuUnitAnalytics.prototype['purchasedUnits'] = undefined;

/**
 * The SKU linked to the analytics-level product.
 * @member {String} sku
 */
ProductSkuUnitAnalytics.prototype['sku'] = undefined;






export default ProductSkuUnitAnalytics;

