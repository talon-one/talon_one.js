/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
 * The LoyaltyStatistics model module.
 * @module model/LoyaltyStatistics
 * @version 4.3.0
 */
class LoyaltyStatistics {
    /**
     * Constructs a new <code>LoyaltyStatistics</code>.
     * 
     * @alias module:model/LoyaltyStatistics
     * @param totalActivePoints {Number} Total of active points for this loyalty program
     * @param totalPendingPoints {Number} Total of pending points for this loyalty program
     * @param totalSpentPoints {Number} Total of spent points for this loyalty program
     * @param totalExpiredPoints {Number} Total of expired points for this loyalty program
     */
    constructor(totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints) { 
        
        LoyaltyStatistics.initialize(this, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints) { 
        obj['totalActivePoints'] = totalActivePoints;
        obj['totalPendingPoints'] = totalPendingPoints;
        obj['totalSpentPoints'] = totalSpentPoints;
        obj['totalExpiredPoints'] = totalExpiredPoints;
    }

    /**
     * Constructs a <code>LoyaltyStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyStatistics} obj Optional instance to populate.
     * @return {module:model/LoyaltyStatistics} The populated <code>LoyaltyStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyStatistics();

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
        }
        return obj;
    }


}

/**
 * Total of active points for this loyalty program
 * @member {Number} totalActivePoints
 */
LoyaltyStatistics.prototype['totalActivePoints'] = undefined;

/**
 * Total of pending points for this loyalty program
 * @member {Number} totalPendingPoints
 */
LoyaltyStatistics.prototype['totalPendingPoints'] = undefined;

/**
 * Total of spent points for this loyalty program
 * @member {Number} totalSpentPoints
 */
LoyaltyStatistics.prototype['totalSpentPoints'] = undefined;

/**
 * Total of expired points for this loyalty program
 * @member {Number} totalExpiredPoints
 */
LoyaltyStatistics.prototype['totalExpiredPoints'] = undefined;






export default LoyaltyStatistics;

