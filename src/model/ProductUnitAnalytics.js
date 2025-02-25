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
 * The ProductUnitAnalytics model module.
 * @module model/ProductUnitAnalytics
 * @version 11.0.0
 */
class ProductUnitAnalytics {
    /**
     * Constructs a new <code>ProductUnitAnalytics</code>.
     * @alias module:model/ProductUnitAnalytics
     * @param startTime {Date} The start of the aggregation time frame in UTC.
     * @param endTime {Date} The end of the aggregation time frame in UTC.
     * @param purchasedUnits {module:model/AnalyticsDataPointWithTrend} 
     * @param productId {Number} The ID of the analytics-level product.
     * @param productName {String} The name of the analytics-level product.
     */
    constructor(startTime, endTime, purchasedUnits, productId, productName) { 
        
        ProductUnitAnalytics.initialize(this, startTime, endTime, purchasedUnits, productId, productName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, startTime, endTime, purchasedUnits, productId, productName) { 
        obj['startTime'] = startTime;
        obj['endTime'] = endTime;
        obj['purchasedUnits'] = purchasedUnits;
        obj['productId'] = productId;
        obj['productName'] = productName;
    }

    /**
     * Constructs a <code>ProductUnitAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductUnitAnalytics} obj Optional instance to populate.
     * @return {module:model/ProductUnitAnalytics} The populated <code>ProductUnitAnalytics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductUnitAnalytics();

            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('purchasedUnits')) {
                obj['purchasedUnits'] = AnalyticsDataPointWithTrend.constructFromObject(data['purchasedUnits']);
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The start of the aggregation time frame in UTC.
 * @member {Date} startTime
 */
ProductUnitAnalytics.prototype['startTime'] = undefined;

/**
 * The end of the aggregation time frame in UTC.
 * @member {Date} endTime
 */
ProductUnitAnalytics.prototype['endTime'] = undefined;

/**
 * @member {module:model/AnalyticsDataPointWithTrend} purchasedUnits
 */
ProductUnitAnalytics.prototype['purchasedUnits'] = undefined;

/**
 * The ID of the analytics-level product.
 * @member {Number} productId
 */
ProductUnitAnalytics.prototype['productId'] = undefined;

/**
 * The name of the analytics-level product.
 * @member {String} productName
 */
ProductUnitAnalytics.prototype['productName'] = undefined;






export default ProductUnitAnalytics;

