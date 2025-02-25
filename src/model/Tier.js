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

/**
 * The Tier model module.
 * @module model/Tier
 * @version 11.0.0
 */
class Tier {
    /**
     * Constructs a new <code>Tier</code>.
     * @alias module:model/Tier
     * @param id {Number} The internal ID of the tier.
     * @param name {String} The name of the tier.
     */
    constructor(id, name) { 
        
        Tier.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Tier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tier} obj Optional instance to populate.
     * @return {module:model/Tier} The populated <code>Tier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('downgradePolicy')) {
                obj['downgradePolicy'] = ApiClient.convertToType(data['downgradePolicy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The internal ID of the tier.
 * @member {Number} id
 */
Tier.prototype['id'] = undefined;

/**
 * The name of the tier.
 * @member {String} name
 */
Tier.prototype['name'] = undefined;

/**
 * Date and time when the customer moved to this tier. This value uses the loyalty program's time zone setting.
 * @member {Date} startDate
 */
Tier.prototype['startDate'] = undefined;

/**
 * Date when tier level expires in the RFC3339 format (in the Loyalty Program's timezone).
 * @member {Date} expiryDate
 */
Tier.prototype['expiryDate'] = undefined;

/**
 * The policy that defines how customer tiers are downgraded in the loyalty program after tier reevaluation.  - `one_down`: If the customer doesn't have enough points to stay in the current tier, they are downgraded by one tier.  - `balance_based`: The customer's tier is reevaluated based on the amount of active points they have at the moment. 
 * @member {module:model/Tier.DowngradePolicyEnum} downgradePolicy
 */
Tier.prototype['downgradePolicy'] = undefined;





/**
 * Allowed values for the <code>downgradePolicy</code> property.
 * @enum {String}
 * @readonly
 */
Tier['DowngradePolicyEnum'] = {

    /**
     * value: "one_down"
     * @const
     */
    "one_down": "one_down",

    /**
     * value: "balance_based"
     * @const
     */
    "balance_based": "balance_based"
};



export default Tier;

