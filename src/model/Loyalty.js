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
import LoyaltyCard from './LoyaltyCard';
import LoyaltyProgramLedgers from './LoyaltyProgramLedgers';

/**
 * The Loyalty model module.
 * @module model/Loyalty
 * @version 8.0.0
 */
class Loyalty {
    /**
     * Constructs a new <code>Loyalty</code>.
     * Customer-specific information about loyalty points.
     * @alias module:model/Loyalty
     * @param programs {Object.<String, module:model/LoyaltyProgramLedgers>} Displays information about point balances in profile-based programs.
     */
    constructor(programs) { 
        
        Loyalty.initialize(this, programs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, programs) { 
        obj['programs'] = programs;
    }

    /**
     * Constructs a <code>Loyalty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Loyalty} obj Optional instance to populate.
     * @return {module:model/Loyalty} The populated <code>Loyalty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Loyalty();

            if (data.hasOwnProperty('cards')) {
                obj['cards'] = ApiClient.convertToType(data['cards'], [LoyaltyCard]);
            }
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ApiClient.convertToType(data['programs'], {'String': LoyaltyProgramLedgers});
            }
        }
        return obj;
    }


}

/**
 * Displays information about the balances of the loyalty cards.
 * @member {Array.<module:model/LoyaltyCard>} cards
 */
Loyalty.prototype['cards'] = undefined;

/**
 * Displays information about point balances in profile-based programs.
 * @member {Object.<String, module:model/LoyaltyProgramLedgers>} programs
 */
Loyalty.prototype['programs'] = undefined;






export default Loyalty;

