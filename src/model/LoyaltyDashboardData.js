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
import LoyaltyDashboardPointsBreakdown from './LoyaltyDashboardPointsBreakdown';

/**
 * The LoyaltyDashboardData model module.
 * @module model/LoyaltyDashboardData
 * @version 5.0.1
 */
class LoyaltyDashboardData {
    /**
     * Constructs a new <code>LoyaltyDashboardData</code>.
     * Datapoint for the graphs and cards on a loyalty program dashboard.
     * @alias module:model/LoyaltyDashboardData
     * @param _date {Date} Date at which data point was collected.
     * @param totalActivePoints {Number} Total of active points for this loyalty program.
     * @param totalPendingPoints {Number} Total of pending points for this loyalty program.
     * @param totalSpentPoints {Number} Total of spent points for this loyalty program.
     * @param totalExpiredPoints {Number} Total of expired points for this loyalty program.
     * @param totalMembers {Number} Number of loyalty program members.
     * @param newMembers {Number} Number of members who joined on this day.
     * @param spentPoints {module:model/LoyaltyDashboardPointsBreakdown} 
     * @param earnedPoints {module:model/LoyaltyDashboardPointsBreakdown} 
     */
    constructor(_date, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints, totalMembers, newMembers, spentPoints, earnedPoints) { 
        
        LoyaltyDashboardData.initialize(this, _date, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints, totalMembers, newMembers, spentPoints, earnedPoints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _date, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints, totalMembers, newMembers, spentPoints, earnedPoints) { 
        obj['date'] = _date;
        obj['totalActivePoints'] = totalActivePoints;
        obj['totalPendingPoints'] = totalPendingPoints;
        obj['totalSpentPoints'] = totalSpentPoints;
        obj['totalExpiredPoints'] = totalExpiredPoints;
        obj['totalMembers'] = totalMembers;
        obj['newMembers'] = newMembers;
        obj['spentPoints'] = spentPoints;
        obj['earnedPoints'] = earnedPoints;
    }

    /**
     * Constructs a <code>LoyaltyDashboardData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyDashboardData} obj Optional instance to populate.
     * @return {module:model/LoyaltyDashboardData} The populated <code>LoyaltyDashboardData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyDashboardData();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('totalActivePoints')) {
                obj['totalActivePoints'] = ApiClient.convertToType(data['totalActivePoints'], 'Number');
            }
            if (data.hasOwnProperty('totalPendingPoints')) {
                obj['totalPendingPoints'] = ApiClient.convertToType(data['totalPendingPoints'], 'Number');
            }
            if (data.hasOwnProperty('totalSpentPoints')) {
                obj['totalSpentPoints'] = ApiClient.convertToType(data['totalSpentPoints'], 'Number');
            }
            if (data.hasOwnProperty('totalExpiredPoints')) {
                obj['totalExpiredPoints'] = ApiClient.convertToType(data['totalExpiredPoints'], 'Number');
            }
            if (data.hasOwnProperty('totalMembers')) {
                obj['totalMembers'] = ApiClient.convertToType(data['totalMembers'], 'Number');
            }
            if (data.hasOwnProperty('newMembers')) {
                obj['newMembers'] = ApiClient.convertToType(data['newMembers'], 'Number');
            }
            if (data.hasOwnProperty('spentPoints')) {
                obj['spentPoints'] = LoyaltyDashboardPointsBreakdown.constructFromObject(data['spentPoints']);
            }
            if (data.hasOwnProperty('earnedPoints')) {
                obj['earnedPoints'] = LoyaltyDashboardPointsBreakdown.constructFromObject(data['earnedPoints']);
            }
        }
        return obj;
    }


}

/**
 * Date at which data point was collected.
 * @member {Date} date
 */
LoyaltyDashboardData.prototype['date'] = undefined;

/**
 * Total of active points for this loyalty program.
 * @member {Number} totalActivePoints
 */
LoyaltyDashboardData.prototype['totalActivePoints'] = undefined;

/**
 * Total of pending points for this loyalty program.
 * @member {Number} totalPendingPoints
 */
LoyaltyDashboardData.prototype['totalPendingPoints'] = undefined;

/**
 * Total of spent points for this loyalty program.
 * @member {Number} totalSpentPoints
 */
LoyaltyDashboardData.prototype['totalSpentPoints'] = undefined;

/**
 * Total of expired points for this loyalty program.
 * @member {Number} totalExpiredPoints
 */
LoyaltyDashboardData.prototype['totalExpiredPoints'] = undefined;

/**
 * Number of loyalty program members.
 * @member {Number} totalMembers
 */
LoyaltyDashboardData.prototype['totalMembers'] = undefined;

/**
 * Number of members who joined on this day.
 * @member {Number} newMembers
 */
LoyaltyDashboardData.prototype['newMembers'] = undefined;

/**
 * @member {module:model/LoyaltyDashboardPointsBreakdown} spentPoints
 */
LoyaltyDashboardData.prototype['spentPoints'] = undefined;

/**
 * @member {module:model/LoyaltyDashboardPointsBreakdown} earnedPoints
 */
LoyaltyDashboardData.prototype['earnedPoints'] = undefined;






export default LoyaltyDashboardData;

