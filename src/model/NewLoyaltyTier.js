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
 * The NewLoyaltyTier model module.
 * @module model/NewLoyaltyTier
 * @version 10.0.0
 */
class NewLoyaltyTier {
    /**
     * Constructs a new <code>NewLoyaltyTier</code>.
     * A new loyalty tier
     * @alias module:model/NewLoyaltyTier
     * @param name {String} The name of the tier
     * @param minPoints {Number} The minimum amount of points required to be eligible for the tier
     */
    constructor(name, minPoints) { 
        
        NewLoyaltyTier.initialize(this, name, minPoints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, minPoints) { 
        obj['name'] = name;
        obj['minPoints'] = minPoints;
    }

    /**
     * Constructs a <code>NewLoyaltyTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewLoyaltyTier} obj Optional instance to populate.
     * @return {module:model/NewLoyaltyTier} The populated <code>NewLoyaltyTier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewLoyaltyTier();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('minPoints')) {
                obj['minPoints'] = ApiClient.convertToType(data['minPoints'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name of the tier
 * @member {String} name
 */
NewLoyaltyTier.prototype['name'] = undefined;

/**
 * The minimum amount of points required to be eligible for the tier
 * @member {Number} minPoints
 */
NewLoyaltyTier.prototype['minPoints'] = undefined;






export default NewLoyaltyTier;

