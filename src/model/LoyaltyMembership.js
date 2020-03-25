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
 * The LoyaltyMembership model module.
 * @module model/LoyaltyMembership
 * @version 4.0.0
 */
class LoyaltyMembership {
    /**
     * Constructs a new <code>LoyaltyMembership</code>.
     * @alias module:model/LoyaltyMembership
     * @param loyaltyProgramId {Number} The ID of the loyalty program belonging to this entity.
     */
    constructor(loyaltyProgramId) { 
        
        LoyaltyMembership.initialize(this, loyaltyProgramId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, loyaltyProgramId) { 
        obj['loyaltyProgramId'] = loyaltyProgramId;
    }

    /**
     * Constructs a <code>LoyaltyMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyMembership} obj Optional instance to populate.
     * @return {module:model/LoyaltyMembership} The populated <code>LoyaltyMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMembership();

            if (data.hasOwnProperty('joined')) {
                obj['joined'] = ApiClient.convertToType(data['joined'], 'Date');
            }
            if (data.hasOwnProperty('loyaltyProgramId')) {
                obj['loyaltyProgramId'] = ApiClient.convertToType(data['loyaltyProgramId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The moment in which the loyalty program was joined.
 * @member {Date} joined
 */
LoyaltyMembership.prototype['joined'] = undefined;

/**
 * The ID of the loyalty program belonging to this entity.
 * @member {Number} loyaltyProgramId
 */
LoyaltyMembership.prototype['loyaltyProgramId'] = undefined;






export default LoyaltyMembership;

