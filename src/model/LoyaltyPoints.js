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
 * The LoyaltyPoints model module.
 * @module model/LoyaltyPoints
 * @version 4.1.1
 */
class LoyaltyPoints {
    /**
     * Constructs a new <code>LoyaltyPoints</code>.
     * Points to add or deduct
     * @alias module:model/LoyaltyPoints
     * @param points {Number} Amount of loyalty points
     */
    constructor(points) { 
        
        LoyaltyPoints.initialize(this, points);
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
     * Constructs a <code>LoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyPoints} obj Optional instance to populate.
     * @return {module:model/LoyaltyPoints} The populated <code>LoyaltyPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyPoints();

            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('expiryDuration')) {
                obj['expiryDuration'] = ApiClient.convertToType(data['expiryDuration'], 'String');
            }
            if (data.hasOwnProperty('subLedgerID')) {
                obj['subLedgerID'] = ApiClient.convertToType(data['subLedgerID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Amount of loyalty points
 * @member {Number} points
 */
LoyaltyPoints.prototype['points'] = undefined;

/**
 * Allows to specify a name for the addition or deduction
 * @member {String} name
 */
LoyaltyPoints.prototype['name'] = undefined;

/**
 * Indicates the duration after which the added loyalty points should expire. The format is a number followed by one letter indicating the unit, like '1h' or '40m' or '30d'.
 * @member {String} expiryDuration
 */
LoyaltyPoints.prototype['expiryDuration'] = undefined;

/**
 * This specifies if we are adding loyalty points to the main ledger or a subledger
 * @member {String} subLedgerID
 */
LoyaltyPoints.prototype['subLedgerID'] = undefined;






export default LoyaltyPoints;

