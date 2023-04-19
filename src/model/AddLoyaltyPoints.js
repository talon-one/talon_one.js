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
 * The AddLoyaltyPoints model module.
 * @module model/AddLoyaltyPoints
 * @version 5.0.0
 */
class AddLoyaltyPoints {
    /**
     * Constructs a new <code>AddLoyaltyPoints</code>.
     * Points to add.
     * @alias module:model/AddLoyaltyPoints
     * @param points {Number} Amount of loyalty points.
     */
    constructor(points) { 
        
        AddLoyaltyPoints.initialize(this, points);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, points) { 
        obj['points'] = points;
    }

    /**
     * Constructs a <code>AddLoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddLoyaltyPoints} obj Optional instance to populate.
     * @return {module:model/AddLoyaltyPoints} The populated <code>AddLoyaltyPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddLoyaltyPoints();

            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('validityDuration')) {
                obj['validityDuration'] = ApiClient.convertToType(data['validityDuration'], 'String');
            }
            if (data.hasOwnProperty('validUntil')) {
                obj['validUntil'] = ApiClient.convertToType(data['validUntil'], 'Date');
            }
            if (data.hasOwnProperty('pendingDuration')) {
                obj['pendingDuration'] = ApiClient.convertToType(data['pendingDuration'], 'String');
            }
            if (data.hasOwnProperty('pendingUntil')) {
                obj['pendingUntil'] = ApiClient.convertToType(data['pendingUntil'], 'Date');
            }
            if (data.hasOwnProperty('subledgerId')) {
                obj['subledgerId'] = ApiClient.convertToType(data['subledgerId'], 'String');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Amount of loyalty points.
 * @member {Number} points
 */
AddLoyaltyPoints.prototype['points'] = undefined;

/**
 * Name / reason for the point addition.
 * @member {String} name
 */
AddLoyaltyPoints.prototype['name'] = undefined;

/**
 * The duration after which the added loyalty points should expire. The time format is an integer followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported:   - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day.   - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month.   If passed, `validUntil` should be omitted. 
 * @member {String} validityDuration
 */
AddLoyaltyPoints.prototype['validityDuration'] = undefined;

/**
 * Date and time when points should expire. The value should be provided in RFC 3339 format. If passed, `validityDuration` should be omitted. 
 * @member {Date} validUntil
 */
AddLoyaltyPoints.prototype['validUntil'] = undefined;

/**
 * The amount of time before the points are considered valid. The time format is an integer followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported:   - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day.   - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month. If passed, `pendingUntil` should be omitted. 
 * @member {String} pendingDuration
 */
AddLoyaltyPoints.prototype['pendingDuration'] = undefined;

/**
 * Date and time after the points are considered valid. The value should be provided in RFC 3339 format. If passed, `pendingDuration` should be omitted. 
 * @member {Date} pendingUntil
 */
AddLoyaltyPoints.prototype['pendingUntil'] = undefined;

/**
 * ID of the subledger the points are added to. If there is no existing subledger with this ID, the subledger is created automatically.
 * @member {String} subledgerId
 */
AddLoyaltyPoints.prototype['subledgerId'] = undefined;

/**
 * ID of the Application that is connected to the loyalty program. It is displayed in your Talon.One deployment URL.
 * @member {Number} applicationId
 */
AddLoyaltyPoints.prototype['applicationId'] = undefined;






export default AddLoyaltyPoints;

