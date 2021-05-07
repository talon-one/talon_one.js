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
 * The CouponReservations model module.
 * @module model/CouponReservations
 * @version 10.0.0
 */
class CouponReservations {
    /**
     * Constructs a new <code>CouponReservations</code>.
     * @alias module:model/CouponReservations
     * @param integrationIDs {Array.<String>} List of Integration IDs
     */
    constructor(integrationIDs) { 
        
        CouponReservations.initialize(this, integrationIDs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, integrationIDs) { 
        obj['integrationIDs'] = integrationIDs;
    }

    /**
     * Constructs a <code>CouponReservations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponReservations} obj Optional instance to populate.
     * @return {module:model/CouponReservations} The populated <code>CouponReservations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponReservations();

            if (data.hasOwnProperty('integrationIDs')) {
                obj['integrationIDs'] = ApiClient.convertToType(data['integrationIDs'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of Integration IDs
 * @member {Array.<String>} integrationIDs
 */
CouponReservations.prototype['integrationIDs'] = undefined;






export default CouponReservations;

