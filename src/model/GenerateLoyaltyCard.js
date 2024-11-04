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
 * The GenerateLoyaltyCard model module.
 * @module model/GenerateLoyaltyCard
 * @version 9.0.0
 */
class GenerateLoyaltyCard {
    /**
     * Constructs a new <code>GenerateLoyaltyCard</code>.
     * The parameters necessary to generate a loyalty card.
     * @alias module:model/GenerateLoyaltyCard
     */
    constructor() { 
        
        GenerateLoyaltyCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GenerateLoyaltyCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateLoyaltyCard} obj Optional instance to populate.
     * @return {module:model/GenerateLoyaltyCard} The populated <code>GenerateLoyaltyCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateLoyaltyCard();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('customerProfileIds')) {
                obj['customerProfileIds'] = ApiClient.convertToType(data['customerProfileIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Status of the loyalty card.
 * @member {module:model/GenerateLoyaltyCard.StatusEnum} status
 * @default 'active'
 */
GenerateLoyaltyCard.prototype['status'] = 'active';

/**
 * Integration IDs of the customer profiles linked to the card.
 * @member {Array.<String>} customerProfileIds
 */
GenerateLoyaltyCard.prototype['customerProfileIds'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GenerateLoyaltyCard['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};



export default GenerateLoyaltyCard;
